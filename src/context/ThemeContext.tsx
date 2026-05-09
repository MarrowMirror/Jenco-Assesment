import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

export interface ThemeColors {
  page: string;
  footer: string;
  accent1: string;
  accent2: string;
}

export const DEFAULT_THEME: ThemeColors = {
  page: '#000000',
  footer: '#080C10',
  accent1: '#fffdc8',
  accent2: '#007e7e',
};

const BASE_STORAGE_KEY = 'jenco-custom-theme';

interface ThemeContextType {
  theme: ThemeColors;
  industry: string;
  previewTheme: (colors: Partial<ThemeColors>) => void;
  saveTheme: () => void;
  resetTheme: () => void;
  cancelPreview: () => void;
  setIndustry: (slug: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/** Perceived brightness → strict 2-color text */
export function getAdaptiveTextColor(hex: string): string {
  const clean = hex.replace('#', '');
  if (clean.length < 6) return '#ffffff';
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  // Using 155 as threshold for light/dark
  // Light background -> #1e1e1e text
  // Dark background -> #ffffff text
  return (r * 299 + g * 587 + b * 114) / 1000 > 155 ? '#1e1e1e' : '#ffffff';
}

/** Single source of truth — applies all CSS vars in one rAF tick */
export function applyThemeToCSSVars(t: ThemeColors): void {
  requestAnimationFrame(() => {
    const root = document.documentElement;
    
    // Page
    root.style.setProperty('--color-page-bg', t.page);
    root.style.setProperty('--color-page-text', getAdaptiveTextColor(t.page));
    
    // Footer (replaces sidebar)
    root.style.setProperty('--color-footer-bg', t.footer);
    root.style.setProperty('--color-footer-text', getAdaptiveTextColor(t.footer));
    
    // Accents
    root.style.setProperty('--color-primary', t.accent1);
    root.style.setProperty('--color-secondary', t.accent2);
    
    // Adaptive text for accents
    root.style.setProperty('--color-primary-text', getAdaptiveTextColor(t.accent1));
    root.style.setProperty('--color-secondary-text', getAdaptiveTextColor(t.accent2));
  });
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [industry, setIndustryState] = useState<string>('global');
  
  const getStorageKey = (slug: string) => `${BASE_STORAGE_KEY}-${slug}`;

  const [savedTheme, setSavedTheme] = useState<ThemeColors>(DEFAULT_THEME);
  const [activeTheme, setActiveTheme] = useState<ThemeColors>(DEFAULT_THEME);

  const rafRef = useRef<number | null>(null);

  // Load theme when industry changes
  useEffect(() => {
    try {
      const saved = localStorage.getItem(getStorageKey(industry));
      const themeToLoad = saved ? { ...DEFAULT_THEME, ...JSON.parse(saved) } : DEFAULT_THEME;
      setSavedTheme(themeToLoad);
      setActiveTheme(themeToLoad);
    } catch {
      setSavedTheme(DEFAULT_THEME);
      setActiveTheme(DEFAULT_THEME);
    }
  }, [industry]);

  // Apply CSS variables whenever activeTheme changes
  useEffect(() => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      applyThemeToCSSVars(activeTheme);
      rafRef.current = null;
    });
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [activeTheme]);

  const previewTheme = (colors: Partial<ThemeColors>) => {
    setActiveTheme(prev => ({ ...prev, ...colors }));
  };

  const saveTheme = () => {
    setSavedTheme(activeTheme);
    localStorage.setItem(getStorageKey(industry), JSON.stringify(activeTheme));
  };

  const resetTheme = () => {
    setActiveTheme(DEFAULT_THEME);
    setSavedTheme(DEFAULT_THEME);
    localStorage.setItem(getStorageKey(industry), JSON.stringify(DEFAULT_THEME));
  };

  const cancelPreview = () => {
    setActiveTheme(savedTheme);
  };

  const setIndustry = (slug: string) => {
    setIndustryState(slug);
  };

  return (
    <ThemeContext.Provider value={{ 
      theme: activeTheme, 
      industry,
      previewTheme, 
      saveTheme, 
      resetTheme,
      cancelPreview,
      setIndustry
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

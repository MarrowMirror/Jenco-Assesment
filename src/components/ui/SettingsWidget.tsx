import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Draggable from 'react-draggable';
import { IconButton, Modal, Box, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import { Save, RotateCcw } from 'lucide-react';
import { HexColorPicker } from 'react-colorful';
import { useTheme, ThemeColors } from '../../context/ThemeContext';

const COLOR_FIELDS: { key: keyof ThemeColors; label: string; helper?: string }[] = [
  { key: 'page', label: 'Main Background', helper: 'Main site background color' },
  { key: 'footer', label: 'Footer Background', helper: 'Bottom section background' },
  { key: 'accent1', label: 'Accent 1', helper: 'Primary actions, highlights' },
  { key: 'accent2', label: 'Accent 2', helper: 'Secondary accents, hover' },
];

function isValidHex(v: string): boolean {
  return /^#[0-9A-Fa-f]{6}$/.test(v);
}


// --- Sub-components ---

const HexColorField: React.FC<{
  fieldKey: keyof ThemeColors;
  label: string;
  helper?: string;
  value: string;
  onChange: (key: keyof ThemeColors, value: string) => void;
}> = ({ fieldKey, label, helper, value, onChange }) => {
  const [draft, setDraft] = useState(value);
  const [open, setOpen] = useState(false);
  const [popoverPos, setPopoverPos] = useState({ top: 0, left: 0 });
  const swatchRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  // Handle outside click
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        swatchRef.current && !swatchRef.current.contains(target) &&
        popoverRef.current && !popoverRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (!open || !swatchRef.current) return;
    const rect = swatchRef.current.getBoundingClientRect();
    const popoverHeight = 280;
    const padding = 8;
    let top = rect.bottom + padding + window.scrollY;
    let left = rect.left + window.scrollX;

    if (rect.bottom + popoverHeight + padding > window.innerHeight) {
      top = rect.top - popoverHeight - padding + window.scrollY;
    }
    setPopoverPos({ top, left });
  }, [open]);

  const handleHexInput = useCallback(
    (raw: string) => {
      let v = raw.startsWith('#') ? raw : `#${raw}`;
      v = '#' + v.slice(1).replace(/[^0-9a-fA-F]/g, '').slice(0, 6);
      setDraft(v);
      if (isValidHex(v)) onChange(fieldKey, v);
    },
    [fieldKey, onChange],
  );

  return (
    <Box sx={{ p: 2, borderRadius: '16px', bgcolor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600, display: 'block', mb: 0.5 }}>
        {label}
      </Typography>
      {helper && <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)', display: 'block', mb: 1.5 }}>{helper}</Typography>}

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <button
          ref={swatchRef}
          type="button"
          onClick={() => setOpen(!open)}
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            background: isValidHex(value) ? value : '#000',
            border: '2px solid rgba(255,255,255,0.1)',
            cursor: 'pointer'
          }}
        />
        <input
          type="text"
          value={draft}
          onChange={e => handleHexInput(e.target.value)}
          maxLength={7}
          style={{
            flex: 1,
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8,
            padding: '8px 12px',
            color: 'white',
            fontFamily: 'monospace',
            fontSize: '0.9rem'
          }}
        />
      </Box>

      {open && createPortal(
        <Box
          ref={popoverRef}
          sx={{
            position: 'absolute',
            top: popoverPos.top,
            left: popoverPos.left,
            zIndex: 100000,
            bgcolor: '#1a1a1a',
            p: 1.5,
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
          }}
        >
          <HexColorPicker color={value} onChange={v => onChange(fieldKey, v)} />
          <Box sx={{ mt: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>HEX</Typography>
            <input
              type="text"
              value={value}
              readOnly
              style={{
                flex: 1,
                background: '#000',
                border: 'none',
                borderRadius: 6,
                padding: '4px 8px',
                color: 'white',
                fontSize: '0.8rem',
                fontFamily: 'monospace'
              }}
            />
          </Box>
        </Box>,
        document.body
      )}
    </Box>
  );
};

// --- Main Component ---

const SettingsWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const { theme, industry, previewTheme, saveTheme, resetTheme, cancelPreview } = useTheme();
  const draggableRef = useRef(null);

  const handleOpen = () => {
    if (!isDragging) setOpen(true);
  };

  const handleColorChange = (key: keyof ThemeColors, value: string) => {
    previewTheme({ [key]: value });
  };

  return (
    <>
      <Draggable
        nodeRef={draggableRef}
        defaultPosition={{ x: window.innerWidth - 80, y: window.innerHeight - 80 }}
        onStart={() => setIsDragging(false)}
        onDrag={() => setIsDragging(true)}
        bounds="body"
      >
        <Box ref={draggableRef} sx={{ position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
          <IconButton
            onClick={handleOpen}
            sx={{
              bgcolor: 'var(--accent)',
              color: 'white',
              width: 56,
              height: 56,
              boxShadow: '0 8px 32px rgba(22, 150, 206, 0.4)',
              '&:hover': { bgcolor: 'var(--accent-light)', transform: 'scale(1.05)' },
              transition: 'transform 0.2s ease, background-color 0.2s ease',
            }}
          >
            <SettingsIcon fontSize="large" />
          </IconButton>
        </Box>
      </Draggable>

      <Modal
        open={open}
        onClose={() => {
          cancelPreview();
          setOpen(false);
        }}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(12px)' }}
      >
        <Box sx={{
          width: '95%',
          maxWidth: 640,
          bgcolor: '#080C10',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '28px',
          p: { xs: 3, sm: 4 },
          maxHeight: '95vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 24px 80px rgba(0, 0, 0, 0.6)',
        }}>
          <IconButton 
            onClick={() => {
              cancelPreview();
              setOpen(false);
            }} 
            sx={{ position: 'absolute', top: 16, right: 16, color: 'rgba(255, 255, 255, 0.5)' }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h6" sx={{ color: 'var(--accent)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem', mb: 1 }}>
            Settings
          </Typography>
          <Typography variant="h4" sx={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'white', mb: 1, letterSpacing: '-0.02em' }}>
            Theme Customizer
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)', mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
            Editing: <span style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'capitalize' }}>{industry.replace('-', ' ')}</span>
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3, mb: 4 }}>
            {COLOR_FIELDS.map(field => (
              <HexColorField
                key={field.key}
                fieldKey={field.key}
                label={field.label}
                helper={field.helper}
                value={theme[field.key]}
                onChange={handleColorChange}
              />
            ))}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
            <button
              className="btn-secondary"
              style={{ flex: 1, minHeight: '52px', border: '1px solid rgba(255,255,255,0.1)' }}
              onClick={() => {
                resetTheme();
              }}
            >
              <RotateCcw size={18} style={{ marginRight: 8 }} />
              Restore
            </button>
            <button
              className="btn-primary"
              style={{ flex: 2, minHeight: '52px' }}
              onClick={() => {
                saveTheme();
              }}
            >
              <Save size={18} style={{ marginRight: 8 }} />
              Save Changes
            </button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default SettingsWidget;

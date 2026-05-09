import { useEffect, useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemButton, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  onBookClick: () => void;
}

export default function Nav({ onBookClick }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Case Study', href: '#case-study' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`nav ${scrolled ? 'shrink' : ''}`}>
      <div className="container nav__inner">
        <a href="/construction" className="nav__logo">
          <img src="/logo.png" alt="Jenco IT Solutions" className="nav__logo-image" />
        </a>

        {/* Desktop Nav */}
        <nav className="nav__links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={(e) => {
              e.preventDefault();
              handleLinkClick(link.href);
            }}>
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="nav__link-button"
            onClick={onBookClick}
          >
            Contact
          </button>
        </nav>

        {/* Mobile Toggle */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
          <IconButton
            onClick={() => setMenuOpen(true)}
            sx={{ color: 'white', p: 1 }}
            aria-label="menu"
          >
            <MenuIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Box>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          transitionDuration={350}
          slotProps={{
            paper: {
              sx: {
                width: '100%',
                maxWidth: { xs: '100%', sm: '400px' },
                backgroundColor: '#080C10 !important', // Using backgroundColor for better specificity
                backgroundImage: 'none !important',
                color: 'white !important',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
              },
            },
          }}
        >
          {/* Drawer Header */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            px: 3,
            py: 3,
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            backgroundColor: '#080C10'
          }}>
            <img src="/logo.png" alt="Logo" style={{ height: '24px' }} />
            <IconButton onClick={() => setMenuOpen(false)} sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.05)' }}>
              <CloseIcon sx={{ fontSize: 24 }} />
            </IconButton>
          </Box>

          {/* Drawer Links */}
          <Box sx={{ flex: 1, overflowY: 'auto', py: 6 }}>
            <List sx={{ px: 3 }}>
              {navLinks.map((link, index) => (
                <ListItem key={link.label} disablePadding>
                  <ListItemButton
                    onClick={() => handleLinkClick(link.href)}
                    sx={{
                      py: 2.5,
                      px: 2,
                      borderRadius: '12px',
                      mb: 1,
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: '100%' }}>
                      <Typography sx={{ 
                        color: 'var(--accent)', 
                        fontSize: '0.7rem', 
                        fontWeight: 700, 
                        fontFamily: 'monospace',
                        opacity: 0.8 
                      }}>
                        0{index + 1}
                      </Typography>
                      <Typography sx={{ 
                        fontSize: '1.15rem', 
                        fontWeight: 600, 
                        fontFamily: 'var(--font-display)',
                        letterSpacing: '-0.01em',
                        color: 'white'
                      }}>
                        {link.label}
                      </Typography>
                    </Box>
                  </ListItemButton>
                </ListItem>
              ))}
              
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    setMenuOpen(false);
                    onBookClick();
                  }}
                  sx={{
                    py: 2.5,
                    px: 2,
                    borderRadius: '12px',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: '100%' }}>
                    <Typography sx={{ 
                      color: 'var(--accent)', 
                      fontSize: '0.7rem', 
                      fontWeight: 700, 
                      fontFamily: 'monospace',
                      opacity: 0.8 
                    }}>
                      04
                    </Typography>
                    <Typography sx={{ 
                      fontSize: '1.15rem', 
                      fontWeight: 600, 
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '-0.01em',
                      color: 'white'
                    }}>
                      Contact
                    </Typography>
                  </Box>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>

          {/* Drawer Footer */}
          <Box sx={{ p: 3, borderTop: '1px solid rgba(255,255,255,0.06)', bgcolor: 'rgba(255,255,255,0.02)' }}>
            <Typography variant="body2" sx={{ color: 'var(--muted)', mb: 2.5, textAlign: 'center', fontSize: '0.85rem' }}>
              Ready to scale your construction operations?
            </Typography>
            <button
              type="button"
              className="btn-primary"
              style={{ width: '100%', minHeight: '54px', fontSize: '0.95rem' }}
              onClick={() => {
                setMenuOpen(false);
                onBookClick();
              }}
            >
              Book Free IT Assessment
            </button>
            <Typography sx={{ mt: 3, textAlign: 'center', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.02em' }}>
              © 2026 JENCO IT SOLUTIONS
            </Typography>
          </Box>
        </Drawer>

        {/* Desktop CTA */}
        <button type="button" className="btn-primary nav__cta" onClick={onBookClick}>
          Book Free IT Assessment
        </button>
      </div>
    </header>
  );
}

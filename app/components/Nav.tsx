'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#projects', label: 'projects' },
    { href: '#stack', label: 'stack' },
    { href: '#about', label: 'about' },
    { href: '#contact', label: 'contact' },
  ];

  return (
    <nav className="nav-bar" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '56px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: '12px',
      background: scrolled || menuOpen ? 'rgba(10,10,10,0.92)' : 'transparent',
      borderBottom: scrolled || menuOpen ? '1px solid var(--border)' : '1px solid transparent',
      backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
      transition: 'background 0.3s, border-color 0.3s',
    }}>
      <a href="#" style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '13px',
        color: 'var(--accent)',
        textDecoration: 'none',
        letterSpacing: '0.02em',
        flexShrink: 0,
      }}>
        ~/portfolio
      </a>

      <div className="nav-links">
        {links.map(l => (
          <a key={l.href} href={l.href} style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '12px',
            color: 'var(--muted)',
            textDecoration: 'none',
            letterSpacing: '0.02em',
            transition: 'color 0.15s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            {l.label}
          </a>
        ))}
      </div>

      <button
        className="nav-toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen(o => !o)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: 'var(--text)',
          cursor: 'pointer',
          padding: '4px',
        }}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {menuOpen && (
        <div className="nav-mobile-menu">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '14px',
              color: 'var(--text)',
              textDecoration: 'none',
              padding: '14px 24px',
              borderBottom: '1px solid var(--border)',
            }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

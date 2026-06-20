"use client";
import { Mail, GitFork, LinkIcon } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ paddingBottom: '120px' }}>
      <div className="contact-card" style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
      }}>
        <p style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          color: 'var(--accent)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          get in touch
        </p>
        <h2 style={{ fontSize: '28px', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '12px' }}>
          Open to remote opportunities
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '36px', maxWidth: '480px' }}>
          Looking for full-time remote roles or contract projects. 
          If you&apos;re building something and need a backend engineer who can own features end to end, 
          let&apos;s talk.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
          <a href="mailto:asulaiman1411@gmail.com" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '13px',
            color: 'var(--text)',
            textDecoration: 'none',
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
          >
            <Mail size={14} style={{ color: 'var(--accent)' }} />
            asulaiman1411@gmail.com
          </a>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          {[
            { href: 'https://github.com/yourusername', icon: <GitFork size={18} />, label: 'GitHub' },
            { href: 'https://linkedin.com/in/yourusername', icon: <LinkIcon size={18} />, label: 'LinkedIn' },
          ].map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '8px 16px',
              border: '1px solid var(--border2)',
              borderRadius: '4px',
              fontSize: '13px',
              color: 'var(--muted)',
              textDecoration: 'none',
              transition: 'color 0.15s, border-color 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--muted)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border2)'; }}
            >
              {link.icon} {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import Link from 'next/link';
import { ExternalLink, GitFork, ArrowRight } from 'lucide-react';
import { projects } from '@/app/lib/projects';

const statusStyle: Record<string, React.CSSProperties> = {
  live: { background: 'rgba(0,200,150,0.08)', color: 'var(--accent)', border: '1px solid rgba(0,200,150,0.25)' },
  'in progress': { background: 'rgba(254,188,46,0.08)', color: '#FEBC2E', border: '1px solid rgba(254,188,46,0.2)' },
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div style={{ marginBottom: '48px' }}>
        <p style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          color: 'var(--accent)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}>
          selected work
        </p>
        <h2 style={{ fontSize: '28px', fontWeight: 500, letterSpacing: '-0.02em' }}>
          Projects
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
        {projects.map((p, i) => (
          <div key={p.id} className="project-card" style={{
            padding: '28px 28px 24px',
            background: 'var(--surface)',
            borderBottom: i < projects.length - 1 ? '1px solid var(--border)' : 'none',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface2)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--surface)')}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    color: 'var(--muted2)',
                  }}>{p.id}</span>
                  <h3 style={{ fontSize: '17px', fontWeight: 500 }}>{p.name}</h3>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    padding: '2px 7px',
                    borderRadius: '3px',
                    ...statusStyle[p.status],
                  }}>{p.status}</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' }}>{p.tagline}</p>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                  <GitFork size={16} />
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '16px', maxWidth: '580px' }}>
              {p.summary}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {p.stack.map(s => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>

              <Link href={`/projects/${p.slug}`} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                color: 'var(--accent)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}>
                view case study <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

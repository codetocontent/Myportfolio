'use client';
import { useState, useEffect } from 'react';
import { ArrowDownRight } from 'lucide-react';

const LINES = [
  { prompt: '$ whoami', output: 'Abdulhamid Abdullahi Sulaiman — Full-stack Product Engineer' },
  { prompt: '$ cat expertise.txt', output: 'Node.js · TypeScript · AWS · PostgreSQL' },
  { prompt: '$ cat status.txt', output: 'Open to remote roles · Available now' },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typed, setTyped] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (visibleLines >= LINES.length) { setDone(true); return; }
    const line = LINES[visibleLines];
    setTyped('');
    setShowOutput(false);
    let i = 0;
    const typeInterval = setInterval(() => {
      i++;
      setTyped(line.prompt.slice(0, i));
      if (i >= line.prompt.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setShowOutput(true);
          setTimeout(() => setVisibleLines(v => v + 1), 400);
        }, 180);
      }
    }, 38);
    return () => clearInterval(typeInterval);
  }, [visibleLines]);

  return (
    <section className="container" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      {/* Terminal window */}
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '48px',
      }}>
        {/* Title bar */}
        <div style={{
          padding: '10px 16px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--surface2)',
        }}>
          {['#FF5F57','#FEBC2E','#28C840'].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.8 }} />
          ))}
          <span style={{
            marginLeft: '8px',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            color: 'var(--muted)',
          }}>bash — abdulhamid@portfolio</span>
        </div>

        {/* Terminal body */}
        <div style={{ padding: '20px 20px 24px', minHeight: '140px' }}>
          {LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} style={{ marginBottom: '6px' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: 'var(--accent)' }}>
                {line.prompt}
              </div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: 'var(--text)', marginLeft: '2px' }}>
                {line.output}
              </div>
            </div>
          ))}

          {/* Currently typing line */}
          {!done && visibleLines < LINES.length && (
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: 'var(--accent)' }}>
                {typed}{!showOutput && <span className="cursor" />}
              </div>
              {showOutput && (
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: 'var(--text)' }}>
                  {LINES[visibleLines].output}
                </div>
              )}
            </div>
          )}

          {done && <span className="cursor" />}
        </div>
      </div>

      {/* Main headline */}
      <div className="fade-up" style={{ animationDelay: '1.8s' }}>
        <p style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          color: 'var(--accent)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          Full-stack Product Engineer
        </p>
        <h1 style={{
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 500,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          color: 'var(--text)',
          marginBottom: '20px',
        }}>
          I build backend systems<br />
          that <span style={{ color: 'var(--accent)' }}>actually ship.</span>
        </h1>
        <p style={{
          fontSize: '16px',
          color: 'var(--muted)',
          maxWidth: '480px',
          lineHeight: 1.7,
          marginBottom: '36px',
        }}>
          Node.js · TypeScript · AWS · PostgreSQL. I help early-stage SaaS startups
          move fast — from API design to production deployment, end to end.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn-primary">
            View projects <ArrowDownRight size={14} />
          </a>
          <a href="#contact" className="btn-secondary">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

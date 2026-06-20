"use client";
export default function About() {
  return (
    <section id="about" className="section">
      <div style={{ marginBottom: '48px' }}>
        <p style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          color: 'var(--accent)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}>
          background
        </p>
        <h2 style={{ fontSize: '28px', fontWeight: 500, letterSpacing: '-0.02em' }}>
          About
        </h2>
      </div>

      <div className="about-grid">
        <div style={{ gridColumn: '1 / -1' }}>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '16px' }}>
            I&apos;m a full-stack engineer based in Kano, Nigeria, focused on building backend systems and 
            product features for early-stage startups. My work sits at the intersection of clean API 
            design, cloud infrastructure, and shipping things that work in production — not just locally.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '16px' }}>
            I&apos;ve worked across healthtech, AI tooling, and retail SaaS — everything from 
            multi-app healthcare platforms to real-time inventory systems for paying clients. 
            I&apos;m comfortable owning a feature end to end: database schema, API layer, deployment, 
            and the frontend that consumes it.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8 }}>
            Currently open to remote full-time roles and contract projects with international teams.
          </p>
        </div>

        {/* Stats row */}
        {[
          { label: 'years building', value: '2+' },
          { label: 'projects shipped', value: '3+' },
          { label: 'availability', value: 'remote' },
        ].map(stat => (
          <div key={stat.label} style={{
            padding: '20px',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '6px',
          }}>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '28px',
              fontWeight: 500,
              color: 'var(--accent)',
              marginBottom: '4px',
            }}>{stat.value}</p>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              color: 'var(--muted)',
              letterSpacing: '0.05em',
            }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

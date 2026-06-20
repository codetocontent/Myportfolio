"use client";
const categories = [
  {
    label: 'backend',
    items: ['Node.js', 'TypeScript', 'Express', 'REST APIs', 'WebSockets', 'Python'],
  },
  {
    label: 'database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'pgvector', 'Prisma', 'SQL'],
  },
  {
    label: 'cloud & infra',
    items: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'AWS RDS', 'Docker', 'CI/CD'],
  },
  {
    label: 'frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    label: 'ai / llm',
    items: ['OpenAI API', 'Gemini API', 'Anthropic API', 'LLM integration', 'Embeddings'],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div style={{ marginBottom: '48px' }}>
        <p style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          color: 'var(--accent)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}>
          tools of the trade
        </p>
        <h2 style={{ fontSize: '28px', fontWeight: 500, letterSpacing: '-0.02em' }}>
          Stack
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
        {categories.map(cat => (
          <div key={cat.label} className="stack-cell" style={{
            padding: '20px',
            background: 'var(--surface)',
          }}>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}>{cat.label}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {cat.items.map(item => (
                <span key={item} style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '12px',
                  color: 'var(--text)',
                }}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

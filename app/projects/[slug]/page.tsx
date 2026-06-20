import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, GitFork } from 'lucide-react';
import { projects, getProjectBySlug } from '@/app/lib/projects';
import Gallery from '@/app/components/Gallery';

const IMAGE_EXT = /\.(png|jpe?g|webp|avif)$/i;

function getProjectImages(slug: string): string[] {
  const publicDir = path.join(process.cwd(), 'public');
  const files = fs.readdirSync(publicDir);
  return files
    .filter((f) => f.startsWith(`${slug}-`) && IMAGE_EXT.test(f))
    .sort((a, b) => {
      const numA = parseInt(a.replace(`${slug}-`, ''), 10);
      const numB = parseInt(b.replace(`${slug}-`, ''), 10);
      return numA - numB;
    })
    .map((f) => `/${f}`);
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Project Case Study`,
    description: project.summary,
  };
}

const statusStyle: Record<string, React.CSSProperties> = {
  live: { background: 'rgba(0,200,150,0.08)', color: 'var(--accent)', border: '1px solid rgba(0,200,150,0.25)' },
  'in progress': { background: 'rgba(254,188,46,0.08)', color: '#FEBC2E', border: '1px solid rgba(254,188,46,0.2)' },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '10px',
      color: 'var(--muted2)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      marginBottom: '8px',
    }}>
      {children}
    </p>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const images = getProjectImages(slug);

  return (
    <main className="section" style={{ paddingTop: '120px' }}>
      <Link href="/#projects" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '12px',
        color: 'var(--muted)',
        textDecoration: 'none',
        marginBottom: '32px',
      }}>
        <ArrowLeft size={14} />
        back to projects
      </Link>

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginBottom: '8px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--muted2)' }}>{project.id}</span>
            <h1 style={{ fontSize: '26px', fontWeight: 500, letterSpacing: '-0.02em' }}>{project.name}</h1>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              padding: '2px 7px',
              borderRadius: '3px',
              ...statusStyle[project.status],
            }}>{project.status}</span>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace' }}>{project.tagline}</p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <GitFork size={14} /> Code
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalLink size={14} /> Live demo
            </a>
          )}
        </div>
      </div>

      {images.length > 0 && (
        <div style={{ marginTop: '32px', marginBottom: '40px' }}>
          <Gallery images={images} name={project.name} />
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '640px' }}>
        <div>
          <SectionLabel>Overview</SectionLabel>
          <p style={{ fontSize: '15px', color: 'var(--text)', lineHeight: 1.8 }}>{project.detail.overview}</p>
        </div>

        <div>
          <SectionLabel>Problem</SectionLabel>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8 }}>{project.detail.problem}</p>
        </div>

        <div>
          <SectionLabel>Solution</SectionLabel>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8 }}>{project.detail.solution}</p>
        </div>

        <div>
          <SectionLabel>Features</SectionLabel>
          <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {project.detail.features.map((f) => (
              <li key={f} style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7 }}>{f}</li>
            ))}
          </ul>
        </div>

        <div>
          <SectionLabel>My Role</SectionLabel>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8 }}>{project.detail.role}</p>
        </div>

        <div>
          <SectionLabel>Architecture</SectionLabel>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8 }}>{project.detail.architecture}</p>
        </div>

        <div>
          <SectionLabel>Technical Stack</SectionLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {project.stack.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>

        <div>
          <SectionLabel>Engineering Challenges</SectionLabel>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8 }}>{project.detail.challenges}</p>
        </div>

        <div>
          <SectionLabel>Impact</SectionLabel>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8 }}>{project.detail.impact}</p>
        </div>
      </div>
    </main>
  );
}

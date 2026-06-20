"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Gallery({ images, name }: { images: string[]; name: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  const close = () => setOpenIndex(null);
  const prev = () => setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: images.length === 1 ? '1fr' : 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '8px',
      }}>
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpenIndex(i)}
            style={{
              position: 'relative',
              aspectRatio: '16 / 10',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              overflow: 'hidden',
              background: 'var(--surface2)',
              cursor: 'zoom-in',
              padding: 0,
            }}
          >
            <Image
              src={src}
              alt={`${name} screenshot ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          onClick={close}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
            style={{ position: 'absolute', top: '20px', right: '20px', color: 'var(--text)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>

          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
              style={{ position: 'absolute', left: '20px', color: 'var(--text)', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: 'relative', width: '100%', height: '100%', maxWidth: '1100px' }}
          >
            <Image
              src={images[openIndex]}
              alt={`${name} screenshot ${openIndex + 1}`}
              fill
              sizes="100vw"
              style={{ objectFit: 'contain' }}
            />
          </div>

          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
              style={{ position: 'absolute', right: '20px', color: 'var(--text)', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      )}
    </>
  );
}

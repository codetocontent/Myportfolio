import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />
        <Projects />
        <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />
        <Stack />
        <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />
        <About />
        <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />
        <Contact />
      </main>
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '20px 24px',
        textAlign: 'center',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '11px',
        color: 'var(--muted2)',
      }}>
        built with Node.js · deployed on Vercel
      </footer>
    </>
  );
}

import React from 'react';

export default function Footer() {
  return (
    <footer style={{ borderTop:'1px solid var(--border)', padding:'2rem 4rem', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1rem' }}>
      <span style={{ fontFamily:'var(--font-display)', fontSize:'1rem', color:'var(--accent)' }}>Aryan Kumar</span>
      <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:'var(--muted)' }}>© {new Date().getFullYear()} · Designed & Built with passion · Hyderabad, IN</span>
      <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:'var(--muted)' }}>React · Node · PostgreSQL</span>
    </footer>
  );
}

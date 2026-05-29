import React, { useState } from 'react';
import { SectionHeader } from './Skills';
import useProjects from '../hooks/useProjects';

export default function Projects() {
  const { projects, loading } = useProjects();
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" style={{ padding:'6rem 4rem' }}>
      <SectionHeader label="Portfolio" title="Featured Projects" />

      {loading ? (
        <div style={{ color:'var(--muted)', fontFamily:'var(--font-mono)', fontSize:'0.85rem' }}>Loading projects...</div>
      ) : (
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(340px,1fr))', gap:2, background:'var(--border)' }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onClick={() => setSelected(p)} />
          ))}
        </div>
      )}

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function ProjectCard({ project: p, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? 'var(--surface2)' : 'var(--surface)', padding:'2rem', cursor:'pointer', position:'relative', overflow:'hidden', transition:'background .2s' }}>
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:2, background:'var(--accent)', transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transition:'transform .3s', transformOrigin:'left' }}/>
      <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'var(--border)', marginBottom:'1rem' }}>{p.num}</div>
      <StatusBadge status={p.status} />
      <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.3rem', fontWeight:700, margin:'.75rem 0', color:'var(--text)' }}>{p.title}</h3>
      <p style={{ fontSize:'0.88rem', color:'var(--muted)', lineHeight:1.7, marginBottom:'1.5rem' }}>{p.description}</p>
      <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:'1.5rem' }}>
        {(p.tags || []).map(t => <span key={t} style={tagStyle}>{t}</span>)}
      </div>
      <div style={{ display:'flex', gap:'1rem' }}>
        <a href={p.github_url} target="_blank" rel="noreferrer" style={linkStyle} onClick={e => e.stopPropagation()}>↗ GitHub</a>
        <a href={p.live_url}   target="_blank" rel="noreferrer" style={linkStyle} onClick={e => e.stopPropagation()}>↗ Live Demo</a>
        <span style={{ marginLeft:'auto', fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'var(--accent)' }}>View Details →</span>
      </div>
    </div>
  );
}

function Modal({ project: p, onClose }) {
  return (
    <div onClick={e => e.target === e.currentTarget && onClose()}
      style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.85)', zIndex:200, display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem' }}>
      <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderTop:'2px solid var(--accent)', maxWidth:600, width:'100%', maxHeight:'80vh', overflowY:'auto', padding:'2.5rem', position:'relative' }}>
        <button onClick={onClose} style={{ position:'absolute', top:'1rem', right:'1rem', background:'none', border:'none', color:'var(--muted)', cursor:'pointer', fontSize:'1.2rem', fontFamily:'var(--font-mono)' }}>✕</button>
        <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'var(--muted)', marginBottom:'.5rem' }}>Project {p.num}</div>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.8rem', marginBottom:'1rem' }}>{p.title}</h2>
        <StatusBadge status={p.status} />
        <p style={{ color:'var(--muted)', fontSize:'0.9rem', lineHeight:1.8, marginTop:'1rem' }}>{p.detail}</p>
        <div style={{ marginTop:'1.5rem' }}>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'var(--accent)', textTransform:'uppercase', letterSpacing:2, marginBottom:'.75rem' }}>Tech Stack</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {(p.tech || []).map(t => <span key={t} style={tagStyle}>{t}</span>)}
          </div>
        </div>
        <div style={{ display:'flex', gap:'1rem', marginTop:'2rem' }}>
          <a href={p.github_url} target="_blank" rel="noreferrer" style={{ ...btnOutline, fontSize:'.75rem', padding:'.6rem 1.5rem' }}>↗ View Code</a>
          <a href={p.live_url}   target="_blank" rel="noreferrer" style={{ ...btnPrimary, fontSize:'.75rem', padding:'.6rem 1.5rem' }}>↗ Live Demo</a>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const isLive = status === 'live';
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:5, fontFamily:'var(--font-mono)', fontSize:'0.68rem', padding:'3px 10px',
      color: isLive ? 'var(--green)' : 'var(--accent)',
      background: isLive ? 'rgba(76,175,130,0.1)' : 'rgba(201,168,76,0.1)',
      border: isLive ? '1px solid rgba(76,175,130,0.25)' : '1px solid rgba(201,168,76,0.25)',
    }}>● {isLive ? 'Live' : 'In Progress'}</span>
  );
}

const tagStyle = { fontFamily:'var(--font-mono)', fontSize:'0.68rem', color:'var(--accent2)', background:'rgba(124,111,212,0.12)', padding:'3px 10px', border:'1px solid rgba(124,111,212,0.25)' };
const linkStyle = { fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'var(--muted)', transition:'color .2s' };
const btnPrimary = { background:'var(--accent)', color:'#0a0a0f', fontFamily:'var(--font-mono)', letterSpacing:1, textTransform:'uppercase', display:'inline-block' };
const btnOutline = { background:'transparent', color:'var(--text)', border:'1px solid var(--border)', fontFamily:'var(--font-mono)', letterSpacing:1, textTransform:'uppercase', display:'inline-block' };

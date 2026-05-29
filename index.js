import React from 'react';
import { SectionHeader } from './Skills';

const EXPERIENCE = [
  { period:'2023 — Present', role:'Senior Full-Stack Developer', company:'TechFlow Solutions · Hyderabad', desc:'Lead development of client-facing web apps. Architected a microservices platform serving 50,000+ users. Mentored 3 junior developers and established code review practices.' },
  { period:'2021 — 2023',    role:'Full-Stack Developer',        company:'StartupHub · Remote',            desc:'Built and maintained multiple SaaS products from scratch. Introduced CI/CD pipelines reducing deployment time by 60%. Worked directly with product and design teams.' },
  { period:'2020 — 2021',    role:'Frontend Developer',          company:'WebCraft Agency · Hyderabad',    desc:'Developed responsive websites for 20+ clients. Specialized in React.js performance optimization and accessibility compliance.' },
  { period:'2019 — 2020',    role:'Junior Developer (Intern)',   company:'DataNest · Hyderabad',           desc:'Built internal tools with Vue.js and Node.js. Gained hands-on experience with databases, REST APIs, and agile workflows.' },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding:'6rem 4rem', background:'var(--surface)' }}>
      <SectionHeader label="Journey" title="Work Experience" />
      <div style={{ position:'relative', paddingLeft:'2rem' }}>
        <div style={{ position:'absolute', left:0, top:0, bottom:0, width:1, background:'var(--border)' }} />
        {EXPERIENCE.map(({ period, role, company, desc }) => (
          <div key={role} style={{ position:'relative', paddingBottom:'3rem', paddingLeft:'2rem' }}>
            <div style={{ position:'absolute', left:'-2rem', top:6, width:10, height:10, background:'var(--accent)', transform:'rotate(45deg)', marginLeft:-4 }} />
            <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'var(--accent)', letterSpacing:1, marginBottom:'.5rem' }}>{period}</div>
            <div style={{ fontFamily:'var(--font-display)', fontSize:'1.2rem', fontWeight:700, marginBottom:'.25rem' }}>{role}</div>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.8rem', color:'var(--accent2)', marginBottom:'.75rem' }}>{company}</div>
            <p style={{ fontSize:'0.88rem', color:'var(--muted)', lineHeight:1.7 }}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

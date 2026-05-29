import React, { useState } from 'react';
import { SectionHeader } from './Skills';
import { sendMessage } from '../utils/api';

const CONTACTS = [
  { icon:'@',  label:'Email',    val:'aryan@example.com',           href:'mailto:aryan@example.com' },
  { icon:'GH', label:'GitHub',   val:'github.com/aryankumar',        href:'https://github.com/aryankumar' },
  { icon:'in', label:'LinkedIn', val:'linkedin.com/in/aryankumar',   href:'https://linkedin.com/in/aryankumar' },
];

export default function Contact() {
  const [form,    setForm]    = useState({ name:'', email:'', subject:'', message:'' });
  const [status,  setStatus]  = useState('idle'); // idle | loading | success | error
  const [errMsg,  setErrMsg]  = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    try {
      await sendMessage(form);
      setStatus('success');
      setForm({ name:'', email:'', subject:'', message:'' });
    } catch (err) {
      setStatus('error');
      setErrMsg(err.response?.data?.message || 'Something went wrong. Try again.');
    }
  };

  return (
    <section id="contact" style={{ padding:'6rem 4rem' }}>
      <SectionHeader label="Let's Talk" title="Get In Touch" />
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'start' }}>

        {/* Info */}
        <div style={{ paddingRight:'2rem', borderRight:'1px solid var(--border)' }}>
          <h3 style={{ fontFamily:'var(--font-display)', fontSize:'2rem', fontWeight:700, marginBottom:'1rem' }}>Open to new<br/>opportunities.</h3>
          <p style={{ color:'var(--muted)', marginBottom:'2rem', lineHeight:1.8 }}>
            Whether you have a project in mind, want to collaborate, or just want to say hello — my inbox is always open.
          </p>
          <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
            {CONTACTS.map(({ icon, label, val, href }) => (
              <a key={label} href={href} style={{ display:'flex', alignItems:'center', gap:'1rem', padding:'.75rem', border:'1px solid var(--border)', color:'var(--text)', transition:'border-color .2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor='var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}>
                <div style={{ width:36, height:36, background:'var(--surface2)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:'var(--accent)' }}>{icon}</div>
                <div>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.8rem' }}>{label}</div>
                  <div style={{ fontSize:'0.85rem', color:'var(--muted)' }}>{val}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {[
            { name:'name',    label:'Name',    type:'text',  placeholder:'John Doe',             required:true },
            { name:'email',   label:'Email',   type:'email', placeholder:'john@example.com',      required:true },
            { name:'subject', label:'Subject', type:'text',  placeholder:'Project Inquiry',       required:false },
          ].map(f => (
            <div key={f.name} style={{ marginBottom:'1.25rem' }}>
              <label style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'var(--muted)', letterSpacing:1, textTransform:'uppercase', display:'block', marginBottom:6 }}>{f.label}</label>
              <input name={f.name} type={f.type} value={form[f.name]} onChange={handleChange} placeholder={f.placeholder} required={f.required}
                style={{ width:'100%', background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text)', padding:'.75rem 1rem', fontFamily:'var(--font-body)', fontSize:'0.9rem', outline:'none' }}
                onFocus={e => e.target.style.borderColor='var(--accent)'}
                onBlur={e => e.target.style.borderColor='var(--border)'}/>
            </div>
          ))}
          <div style={{ marginBottom:'1.25rem' }}>
            <label style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'var(--muted)', letterSpacing:1, textTransform:'uppercase', display:'block', marginBottom:6 }}>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required rows={5}
              style={{ width:'100%', background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text)', padding:'.75rem 1rem', fontFamily:'var(--font-body)', fontSize:'0.9rem', outline:'none', resize:'none' }}
              onFocus={e => e.target.style.borderColor='var(--accent)'}
              onBlur={e => e.target.style.borderColor='var(--border)'}/>
          </div>

          <button type="submit" disabled={status === 'loading'}
            style={{ width:'100%', background: status==='success' ? '#4caf82' : 'var(--accent)', color:'#0a0a0f', padding:'.9rem', border:'none', fontFamily:'var(--font-mono)', fontSize:'0.8rem', letterSpacing:2, textTransform:'uppercase', cursor:'pointer', transition:'background .2s' }}>
            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent ✓' : 'Send Message →'}
          </button>

          {status === 'success' && (
            <div style={{ marginTop:'1rem', background:'rgba(76,175,130,0.1)', border:'1px solid rgba(76,175,130,0.25)', color:'var(--green)', padding:'1rem', fontFamily:'var(--font-mono)', fontSize:'0.78rem' }}>
              ✓ Message sent! I'll get back to you within 24 hours.
            </div>
          )}
          {status === 'error' && (
            <div style={{ marginTop:'1rem', background:'rgba(255,80,80,0.1)', border:'1px solid rgba(255,80,80,0.25)', color:'#ff8080', padding:'1rem', fontFamily:'var(--font-mono)', fontSize:'0.78rem' }}>
              ✗ {errMsg}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

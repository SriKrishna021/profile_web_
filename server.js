/* ==========================================
   GLOBAL STYLES — Portfolio
   ========================================== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:        #0a0a0f;
  --surface:   #13131a;
  --surface2:  #1c1c27;
  --accent:    #c9a84c;
  --accent2:   #7c6fd4;
  --text:      #f0ede6;
  --muted:     #7a7a8a;
  --border:    #2a2a3a;
  --green:     #4caf82;

  --font-display: 'Playfair Display', serif;
  --font-mono:    'DM Mono', monospace;
  --font-body:    'Lato', sans-serif;
}

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  line-height: 1.6;
  min-height: 100vh;
}

a { color: inherit; text-decoration: none; }

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--accent); }

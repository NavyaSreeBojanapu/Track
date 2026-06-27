<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AlgoTrack — Stop Solving. Start Retaining.</title>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg: #0D1117; --bg2: #10161E; --bg3: #141B25;
      --violet: #7C3AED; --violet-light: #9B5AF5;
      --violet-dim: rgba(124,58,237,0.15); --violet-border: rgba(124,58,237,0.35);
      --text: #E6EDF3; --text-muted: #8B949E; --text-dim: #4A5568;
      --green: #2EA043; --gold: #F0A500;
      --mono: 'JetBrains Mono', monospace; --body: 'Inter', sans-serif;
      --radius: 10px;
    }
    html { scroll-behavior: smooth; }
    body { background: var(--bg); color: var(--text); font-family: var(--body); line-height: 1.6; overflow-x: hidden; }

    /* ── NAV ── */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 200;
      display: flex; align-items: center; justify-content: space-between;
      padding: 1rem 2rem;
      background: rgba(13,17,23,0.9); backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(124,58,237,0.15);
    }
    .nav-logo { font-family: var(--mono); font-weight: 800; font-size: 1.2rem; letter-spacing: -0.02em; color: var(--text); text-decoration: none; }
    .nav-logo span { color: var(--violet); }
    .nav-right { display: flex; align-items: center; gap: 0.75rem; }
    .btn-nav-ghost {
      background: transparent; color: var(--text-muted);
      border: 1px solid rgba(139,148,158,0.2);
      padding: 0.45rem 1.1rem; border-radius: 6px;
      font-family: var(--mono); font-size: 0.78rem; font-weight: 600;
      cursor: pointer; transition: all 0.2s; text-decoration: none;
    }
    .btn-nav-ghost:hover { border-color: var(--violet-border); color: var(--text); }
    .btn-nav-primary {
      background: var(--violet); color: #fff; border: none;
      padding: 0.45rem 1.1rem; border-radius: 6px;
      font-family: var(--mono); font-size: 0.78rem; font-weight: 700;
      cursor: pointer; transition: background 0.2s; text-decoration: none;
    }
    .btn-nav-primary:hover { background: var(--violet-light); }

    /* ── HERO ── */
    .hero {
      min-height: 100vh; display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      text-align: center; padding: 7rem 1.5rem 4rem;
      position: relative; overflow: hidden;
    }
    .hero-glow {
      position: absolute; top: 35%; left: 50%; transform: translate(-50%,-50%);
      width: 720px; height: 420px;
      background: radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 70%);
      pointer-events: none;
    }
    .hero-grid {
      position: absolute; inset: 0;
      background-image: linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px);
      background-size: 48px 48px; pointer-events: none;
    }
    .access-note {
      display: inline-flex; align-items: center; gap: 0.4rem;
      font-family: var(--mono); font-size: 0.68rem; font-weight: 600;
      color: var(--text-dim); margin-bottom: 1.75rem;
      letter-spacing: 0.04em;
    }
    .access-note svg { opacity: 0.5; }
    .hero h1 {
      font-family: var(--mono); font-size: clamp(2.4rem,6vw,4.5rem);
      font-weight: 800; line-height: 1.08; letter-spacing: -0.04em; margin-bottom: 1.25rem;
    }
    .hero h1 .accent { color: var(--violet-light); }
    .hero-sub { max-width: 530px; font-size: 1.05rem; color: var(--text-muted); margin: 0 auto 2.5rem; line-height: 1.75; }
    .hero-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
    .btn-primary {
      background: var(--violet); color: #fff; border: none;
      padding: 0.85rem 2rem; border-radius: 8px;
      font-family: var(--mono); font-size: 0.95rem; font-weight: 700;
      cursor: pointer; transition: all 0.2s; text-decoration: none; display: inline-block;
      box-shadow: 0 0 24px rgba(124,58,237,0.4);
    }
    .btn-primary:hover { background: var(--violet-light); box-shadow: 0 0 32px rgba(124,58,237,0.6); transform: translateY(-1px); }
    .btn-ghost {
      background: transparent; color: var(--text-muted);
      border: 1px solid rgba(139,148,158,0.22);
      padding: 0.85rem 2rem; border-radius: 8px;
      font-family: var(--mono); font-size: 0.95rem; font-weight: 600;
      cursor: pointer; transition: all 0.2s; text-decoration: none; display: inline-block;
    }
    .btn-ghost:hover { border-color: var(--violet-border); color: var(--text); }
    .hero-stat-row { display: flex; gap: 2.5rem; justify-content: center; flex-wrap: wrap; margin-top: 3.5rem; }
    .hero-stat { text-align: center; }
    .hero-stat .num { font-family: var(--mono); font-size: 1.6rem; font-weight: 800; color: var(--violet-light); }
    .hero-stat .lbl { font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 0.1rem; }

    /* ── SHARED SECTION ── */
    section { padding: 6rem 1.5rem; }
    .section-inner { max-width: 1100px; margin: 0 auto; }
    .section-label { font-family: var(--mono); font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--violet); margin-bottom: 0.65rem; }
    .section-title { font-family: var(--mono); font-size: clamp(1.6rem,3.5vw,2.4rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.15; margin-bottom: 0.85rem; }
    .section-sub { font-size: 1rem; color: var(--text-muted); max-width: 520px; line-height: 1.7; }
    .section-header { margin-bottom: 3.5rem; }

    /* ── HOW IT WORKS ── */
    .hiw { background: var(--bg2); }
    .steps { display: grid; grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); gap: 1.5rem; }
    .step {
      background: var(--bg3); border: 1px solid rgba(124,58,237,0.18);
      border-radius: 12px; padding: 2rem;
      transition: border-color 0.2s, transform 0.2s;
    }
    .step:hover { border-color: var(--violet-border); transform: translateY(-3px); }
    .step-num { font-family: var(--mono); font-size: 0.62rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--violet); margin-bottom: 0.75rem; }
    .step-icon { font-size: 2rem; margin-bottom: 1rem; display: block; }
    .step h3 { font-family: var(--mono); font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; letter-spacing: -0.02em; }
    .step p { font-size: 0.88rem; color: var(--text-muted); line-height: 1.65; }
    .confidence-pills { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 1rem; }
    .pill { font-family: var(--mono); font-size: 0.7rem; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: 6px; }
    .pill.again  { background: rgba(239,68,68,0.15);  color: #F87171; border: 1px solid rgba(239,68,68,0.3); }
    .pill.hard   { background: rgba(245,158,11,0.15); color: #FBBF24; border: 1px solid rgba(245,158,11,0.3); }
    .pill.good   { background: rgba(59,130,246,0.15); color: #60A5FA; border: 1px solid rgba(59,130,246,0.3); }
    .pill.master { background: rgba(46,160,67,0.15);  color: #4ADE80; border: 1px solid rgba(46,160,67,0.3); }

    /* ── FEATURES ── */
    .features-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(300px,1fr)); gap: 1.25rem; }
    .feat {
      background: var(--bg2); border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px; padding: 1.75rem; transition: border-color 0.2s;
    }
    .feat:hover { border-color: var(--violet-border); }
    .feat-icon { font-size: 1.5rem; margin-bottom: 0.8rem; display: block; }
    .feat h3 { font-family: var(--mono); font-size: 0.92rem; font-weight: 700; margin-bottom: 0.4rem; }
    .feat p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; }

    /* ── LEADERBOARD ── */
    .leaderboard-section { background: var(--bg2); }
    .lb-card {
      background: var(--bg3); border: 1px solid var(--violet-border);
      border-radius: 14px; overflow: hidden; max-width: 680px; margin: 0 auto;
      box-shadow: 0 0 48px rgba(124,58,237,0.1);
    }
    .lb-header { padding: 1.2rem 1.5rem; border-bottom: 1px solid rgba(124,58,237,0.18); display: flex; align-items: center; justify-content: space-between; }
    .lb-title { font-family: var(--mono); font-size: 0.82rem; font-weight: 700; }
    .lb-title span { color: var(--violet-light); }
    .lb-live { font-family: var(--mono); font-size: 0.62rem; font-weight: 700; letter-spacing: 0.06em; color: var(--green); background: rgba(46,160,67,0.12); border: 1px solid rgba(46,160,67,0.3); padding: 0.2rem 0.6rem; border-radius: 999px; }
    .lb-row { display: grid; grid-template-columns: 40px 1fr auto auto; align-items: center; gap: 1rem; padding: 0.9rem 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.04); transition: background 0.15s; }
    .lb-row:last-child { border-bottom: none; }
    .lb-row:hover { background: rgba(124,58,237,0.05); }
    .lb-rank { font-family: var(--mono); font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-align: center; }
    .lb-rank.gold { color: #F0A500; } .lb-rank.silver { color: #9CA3AF; } .lb-rank.bronze { color: #B45309; }
    .lb-user { display: flex; align-items: center; gap: 0.65rem; }
    .lb-avatar { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: var(--mono); font-size: 0.7rem; font-weight: 700; flex-shrink: 0; }
    .lb-name { font-family: var(--mono); font-size: 0.82rem; font-weight: 600; }
    .lb-dept { font-size: 0.7rem; color: var(--text-muted); }
    .lb-xp { font-family: var(--mono); font-size: 0.78rem; font-weight: 700; color: var(--violet-light); text-align: right; }
    .lb-streak { font-family: var(--mono); font-size: 0.72rem; color: var(--gold); text-align: right; white-space: nowrap; }
    .lb-footer { padding: 1rem 1.5rem; text-align: center; border-top: 1px solid rgba(124,58,237,0.18); }
    .lb-footer p { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.75rem; }

    /* ── CTA BAND ── */
    .cta-band { text-align: center; padding: 6rem 1.5rem; position: relative; overflow: hidden; }
    .cta-band::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(124,58,237,0.16) 0%, transparent 65%); pointer-events: none; }
    .cta-band h2 { font-family: var(--mono); font-size: clamp(1.8rem,4vw,2.8rem); font-weight: 800; letter-spacing: -0.03em; margin-bottom: 1rem; }
    .cta-band p { font-size: 1rem; color: var(--text-muted); margin-bottom: 2rem; }
    .cta-btn-row { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

    /* ── FOOTER ── */
    footer { border-top: 1px solid rgba(255,255,255,0.06); padding: 2rem 1.5rem; text-align: center; }
    .footer-logo { font-family: var(--mono); font-size: 1rem; font-weight: 800; margin-bottom: 0.4rem; }
    .footer-logo span { color: var(--violet); }
    .footer-tagline { font-size: 0.78rem; color: var(--text-dim); margin-bottom: 0.5rem; }
    .footer-copy { font-size: 0.72rem; color: var(--text-dim); }

    /* ── MODAL OVERLAY ── */
    .modal-overlay {
      display: none; position: fixed; inset: 0; z-index: 500;
      background: rgba(0,0,0,0.7); backdrop-filter: blur(6px);
      align-items: center; justify-content: center; padding: 1rem;
    }
    .modal-overlay.open { display: flex; }
    .modal {
      background: var(--bg2); border: 1px solid var(--violet-border);
      border-radius: 16px; width: 100%; max-width: 420px;
      padding: 2.25rem; position: relative;
      box-shadow: 0 0 60px rgba(124,58,237,0.2);
      animation: modalIn 0.22s ease;
    }
    @keyframes modalIn { from { opacity:0; transform: scale(0.96) translateY(8px); } to { opacity:1; transform: none; } }
    .modal-close {
      position: absolute; top: 1.1rem; right: 1.1rem;
      background: transparent; border: none; color: var(--text-dim);
      font-size: 1.2rem; cursor: pointer; line-height: 1;
      transition: color 0.15s;
    }
    .modal-close:hover { color: var(--text); }
    .modal-logo { font-family: var(--mono); font-size: 1rem; font-weight: 800; margin-bottom: 0.3rem; }
    .modal-logo span { color: var(--violet); }
    .modal h2 { font-family: var(--mono); font-size: 1.3rem; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 0.35rem; }
    .modal-sub { font-size: 0.83rem; color: var(--text-muted); margin-bottom: 1.75rem; }
    .modal-sub a { color: var(--violet-light); text-decoration: none; cursor: pointer; }
    .modal-sub a:hover { text-decoration: underline; }

    /* access note in modal */
    .modal-access {
      display: flex; align-items: center; gap: 0.5rem;
      background: rgba(124,58,237,0.08); border: 1px solid rgba(124,58,237,0.2);
      border-radius: 8px; padding: 0.6rem 0.9rem;
      margin-bottom: 1.5rem;
      font-size: 0.76rem; color: var(--text-muted);
    }
    .modal-access svg { flex-shrink: 0; color: var(--violet); }

    .field-group { margin-bottom: 1.1rem; }
    .field-group label { display: block; font-family: var(--mono); font-size: 0.72rem; font-weight: 600; color: var(--text-muted); margin-bottom: 0.4rem; letter-spacing: 0.04em; text-transform: uppercase; }
    .field-group input, .field-group select {
      width: 100%; background: var(--bg3); border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px; padding: 0.7rem 0.9rem;
      color: var(--text); font-family: var(--body); font-size: 0.88rem;
      outline: none; transition: border-color 0.2s;
      appearance: none;
    }
    .field-group input::placeholder { color: var(--text-dim); }
    .field-group input:focus, .field-group select:focus { border-color: var(--violet-border); }
    .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.9rem; }
    .btn-full {
      width: 100%; background: var(--violet); color: #fff; border: none;
      padding: 0.85rem; border-radius: 8px;
      font-family: var(--mono); font-size: 0.92rem; font-weight: 700;
      cursor: pointer; transition: background 0.2s; margin-top: 0.5rem;
      box-shadow: 0 0 20px rgba(124,58,237,0.35);
    }
    .btn-full:hover { background: var(--violet-light); }
    .modal-divider { display: flex; align-items: center; gap: 0.75rem; margin: 1.25rem 0; }
    .modal-divider hr { flex: 1; border: none; border-top: 1px solid rgba(255,255,255,0.08); }
    .modal-divider span { font-size: 0.72rem; color: var(--text-dim); white-space: nowrap; }

    /* toast */
    .toast {
      position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%);
      background: var(--bg3); border: 1px solid var(--violet-border);
      border-radius: 10px; padding: 0.75rem 1.25rem;
      font-family: var(--mono); font-size: 0.8rem; color: var(--text);
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
      z-index: 999; opacity: 0; transition: opacity 0.25s;
      pointer-events: none; white-space: nowrap;
    }
    .toast.show { opacity: 1; }

    /* ── FIELD ERROR / SUCCESS STATES ── */
    .field-group { position: relative; }
    .field-group input.err, .field-group select.err {
      border-color: rgba(239,68,68,0.6) !important;
      background: rgba(239,68,68,0.04);
    }
    .field-group input.ok, .field-group select.ok {
      border-color: rgba(46,160,67,0.5) !important;
    }
    .field-err {
      font-size: 0.7rem; color: #F87171;
      margin-top: 0.3rem; display: none;
      font-family: var(--mono);
    }
    .field-err.visible { display: block; }
    .field-hint {
      font-size: 0.68rem; color: var(--text-dim);
      margin-top: 0.28rem; font-family: var(--mono);
    }
    /* password strength bar */
    .pwd-strength { margin-top: 0.45rem; }
    .pwd-bar-track {
      height: 3px; background: rgba(255,255,255,0.08);
      border-radius: 2px; overflow: hidden;
    }
    .pwd-bar-fill {
      height: 100%; width: 0%; border-radius: 2px;
      transition: width 0.3s, background 0.3s;
    }
    .pwd-label {
      font-size: 0.65rem; color: var(--text-dim);
      font-family: var(--mono); margin-top: 0.2rem;
    }
    /* password toggle eye */
    .pwd-wrap { position: relative; }
    .pwd-wrap input { padding-right: 2.5rem; }
    .pwd-eye {
      position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%);
      background: none; border: none; color: var(--text-dim);
      cursor: pointer; padding: 0; line-height: 1;
      transition: color 0.15s;
    }
    .pwd-eye:hover { color: var(--text-muted); }
    /* match indicator */
    .match-row {
      display: flex; align-items: center; gap: 0.4rem;
      font-size: 0.68rem; font-family: var(--mono);
      margin-top: 0.3rem; color: var(--text-dim);
      min-height: 1rem;
    }
    .match-dot {
      width: 7px; height: 7px; border-radius: 50%;
      background: var(--text-dim); flex-shrink: 0;
      transition: background 0.2s;
    }
    .match-dot.ok  { background: #4ADE80; }
    .match-dot.err { background: #F87171; }
    .match-row.ok  { color: #4ADE80; }
    .match-row.err { color: #F87171; }

    /* scrollbar */
    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--violet-dim); border-radius: 3px; }

    /* ── WORKSPACE PREVIEW SECTION ── */
    .ws-section { background: var(--bg); overflow: hidden; }
    .ws-browser {
      border: 1px solid rgba(124,58,237,0.3);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 0 80px rgba(124,58,237,0.15), 0 24px 64px rgba(0,0,0,0.5);
      max-width: 1060px;
      margin: 0 auto;
    }
    /* browser chrome bar */
    .ws-chrome {
      background: #1A2332;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      padding: 0.55rem 0.9rem;
      display: flex; align-items: center; gap: 0.65rem;
    }
    .ws-dots { display: flex; gap: 0.35rem; }
    .ws-dot { width: 10px; height: 10px; border-radius: 50%; }
    .ws-dot.r { background: #FF5F57; }
    .ws-dot.y { background: #FFBD2E; }
    .ws-dot.g { background: #28CA42; }
    .ws-url {
      flex: 1; background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 5px; padding: 0.28rem 0.7rem;
      font-family: var(--mono); font-size: 0.68rem;
      color: var(--text-muted); text-align: center;
    }
    .ws-url span { color: var(--violet-light); }
    /* workspace inner layout */
    .ws-inner {
      display: grid;
      grid-template-columns: 1fr 260px;
      height: 480px;
      background: #0D1117;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
    }
    /* top nav strip */
    .ws-topbar {
      grid-column: 1 / -1;
      background: #10161E;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      display: flex; align-items: center; gap: 0.6rem;
      padding: 0 0.9rem; height: 38px; flex-shrink: 0;
    }
    .ws-logo { font-weight: 800; font-size: 0.85rem; color: #E6EDF3; }
    .ws-logo span { color: #7C3AED; }
    .ws-prob-pill {
      background: #141B25; border: 1px solid rgba(255,255,255,0.1);
      border-radius: 5px; padding: 0.2rem 0.6rem;
      font-size: 0.68rem; color: #8B949E;
    }
    .ws-diff { font-size: 0.62rem; font-weight: 700; padding: 0.18rem 0.5rem; border-radius: 999px; background: rgba(74,222,128,0.12); color: #4ADE80; border: 1px solid rgba(74,222,128,0.3); }
    .ws-spacer { flex: 1; }
    .ws-run { background: #1A2332; border: 1px solid rgba(255,255,255,0.1); color: #8B949E; padding: 0.22rem 0.65rem; border-radius: 5px; font-size: 0.68rem; font-family: var(--mono); }
    .ws-submit { background: #7C3AED; color: #fff; border: none; padding: 0.22rem 0.65rem; border-radius: 5px; font-size: 0.68rem; font-family: var(--mono); font-weight: 700; }
    /* left col */
    .ws-left {
      display: flex; flex-direction: column;
      border-right: 1px solid rgba(255,255,255,0.06);
      overflow: hidden;
    }
    /* problem pane */
    .ws-prob {
      padding: 0.8rem 1rem;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      flex: 0 0 auto;
    }
    .ws-ptitle { font-weight: 800; font-size: 0.82rem; color: #E6EDF3; margin-bottom: 0.4rem; }
    .ws-topics { display: flex; gap: 0.3rem; margin-bottom: 0.5rem; }
    .ws-topic { background: rgba(124,58,237,0.15); border: 1px solid rgba(124,58,237,0.3); color: #9B5AF5; padding: 0.12rem 0.45rem; border-radius: 4px; font-size: 0.6rem; font-weight: 600; }
    .ws-pdesc { color: #8B949E; font-family: 'Inter', sans-serif; font-size: 0.72rem; line-height: 1.55; }
    .ws-pdesc strong { color: #E6EDF3; }
    .ws-example {
      background: #141B25; border: 1px solid rgba(255,255,255,0.07);
      border-radius: 5px; padding: 0.45rem 0.65rem; margin-top: 0.5rem;
      font-size: 0.68rem; color: #8B949E; line-height: 1.55;
    }
    .ws-example .ex-lbl { color: #7C3AED; font-weight: 700; font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.2rem; }
    /* editor pane */
    .ws-editor { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
    .ws-edbar {
      background: #10161E; border-bottom: 1px solid rgba(255,255,255,0.06);
      padding: 0 0.75rem; display: flex; align-items: center; gap: 2px; height: 30px;
    }
    .ws-ltab {
      font-size: 0.65rem; font-weight: 600; font-family: var(--mono);
      padding: 0.2rem 0.6rem; border-radius: 4px; border: none;
      cursor: pointer; transition: all .15s; color: #8B949E; background: transparent;
    }
    .ws-ltab.active { background: rgba(124,58,237,0.15); color: #9B5AF5; border: 1px solid rgba(124,58,237,0.3); }
    .ws-code-area {
      flex: 1; display: flex; overflow: hidden;
      background: #10161E;
    }
    .ws-lnums {
      width: 32px; padding: 0.6rem 0; text-align: right; padding-right: 0.45rem;
      color: #4A5568; font-size: 0.68rem; line-height: 1.65;
      border-right: 1px solid rgba(255,255,255,0.04);
      user-select: none;
    }
    .ws-code {
      flex: 1; padding: 0.6rem 0.75rem; font-size: 0.72rem; line-height: 1.65;
      color: #E6EDF3; white-space: pre; overflow: auto;
    }
    .ws-code::-webkit-scrollbar { width: 3px; }
    .ws-code::-webkit-scrollbar-thumb { background: rgba(124,58,237,0.2); }
    /* syntax highlight colours */
    .kw  { color: #c792ea; } /* keyword */
    .fn  { color: #82aaff; } /* function */
    .st  { color: #c3e88d; } /* string */
    .cm  { color: #546e7a; font-style: italic; } /* comment */
    .nm  { color: #f78c6c; } /* number/variable */
    .op  { color: #89ddff; } /* operator/punct */
    /* bottom strip */
    .ws-bottom {
      border-top: 1px solid rgba(255,255,255,0.06);
      flex-shrink: 0; height: 80px; background: #0D1117;
    }
    .ws-btabs {
      background: #10161E; border-bottom: 1px solid rgba(255,255,255,0.06);
      display: flex; height: 26px; align-items: center;
    }
    .ws-btab {
      font-size: 0.62rem; font-family: var(--mono); font-weight: 600;
      padding: 0 0.7rem; height: 100%; display: flex; align-items: center;
      color: #8B949E; border-bottom: 2px solid transparent;
    }
    .ws-btab.active { color: #9B5AF5; border-bottom-color: #7C3AED; }
    .ws-tcrow {
      padding: 0.35rem 0.8rem; display: flex; align-items: center; gap: 0.5rem;
    }
    .ws-tcn { color: #7C3AED; font-size: 0.62rem; font-weight: 700; }
    .ws-tctxt { color: #8B949E; font-size: 0.65rem; flex: 1; }
    .ws-tcpass { color: #4ADE80; font-size: 0.62rem; font-weight: 700; }
    /* right notes col */
    .ws-right {
      display: flex; flex-direction: column; overflow: hidden;
      background: #10161E;
    }
    .ws-nhdr {
      padding: 0.5rem 0.75rem;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      display: flex; align-items: center; justify-content: space-between;
    }
    .ws-ntitle { font-weight: 700; font-size: 0.72rem; color: #E6EDF3; }
    .ws-nsave {
      background: rgba(124,58,237,0.15); border: 1px solid rgba(124,58,237,0.3);
      color: #9B5AF5; font-size: 0.6rem; font-weight: 700;
      padding: 0.15rem 0.45rem; border-radius: 4px;
    }
    .ws-ntabs {
      display: flex; border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .ws-ntab {
      font-size: 0.6rem; font-family: var(--mono); font-weight: 600;
      padding: 0.3rem 0.6rem; color: #8B949E;
      border-bottom: 2px solid transparent;
    }
    .ws-ntab.active { color: #9B5AF5; border-bottom-color: #7C3AED; }
    .ws-notes-body { flex: 1; overflow-y: auto; padding: 0.6rem 0.75rem; display: flex; flex-direction: column; gap: 0.6rem; }
    .ws-notes-body::-webkit-scrollbar { width: 3px; }
    .ws-notes-body::-webkit-scrollbar-thumb { background: rgba(124,58,237,0.2); }
    .ws-nlabel { font-size: 0.58rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #7C3AED; margin-bottom: 0.25rem; }
    .ws-ntext {
      background: #141B25; border: 1px solid rgba(255,255,255,0.07);
      border-radius: 5px; padding: 0.45rem 0.55rem;
      font-family: 'Inter', sans-serif; font-size: 0.68rem;
      color: #8B949E; line-height: 1.55;
    }
    .ws-cx-row { display: flex; gap: 0.35rem; }
    .ws-cx {
      flex: 1; background: #141B25; border: 1px solid rgba(255,255,255,0.07);
      border-radius: 5px; padding: 0.35rem 0.5rem; text-align: center;
    }
    .ws-cx-lbl { font-size: 0.55rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #8B949E; margin-bottom: 0.15rem; }
    .ws-cx-val { font-size: 0.78rem; font-weight: 700; color: #9B5AF5; }
    /* confidence */
    .ws-conf { padding: 0.5rem 0.75rem; border-top: 1px solid rgba(255,255,255,0.06); }
    .ws-conf-lbl { font-size: 0.58rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #8B949E; margin-bottom: 0.35rem; }
    .ws-conf-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.3rem; }
    .ws-cb {
      font-size: 0.65rem; font-weight: 700; font-family: var(--mono);
      padding: 0.28rem 0.3rem; border-radius: 5px; text-align: center;
      border: 1px solid transparent;
    }
    .ws-cb.low    { color: #F87171; border-color: rgba(248,113,113,0.25); background: rgba(248,113,113,0.08); }
    .ws-cb.med    { color: #FBBF24; border-color: rgba(251,191,36,0.25); background: rgba(251,191,36,0.08); }
    .ws-cb.high   { color: #60A5FA; border-color: rgba(96,165,250,0.25); background: rgba(96,165,250,0.08); }
    .ws-cb.master { color: #4ADE80; border-color: rgba(74,222,128,0.25); background: rgba(74,222,128,0.15); border-width: 1.5px; }
    .ws-rev { padding: 0.45rem 0.75rem; border-top: 1px solid rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: space-between; }
    .ws-rev-info { font-size: 0.62rem; color: #8B949E; }
    .ws-rev-info strong { color: #9B5AF5; }
    .ws-rev-btn { background: #7C3AED; color: #fff; border: none; padding: 0.25rem 0.6rem; border-radius: 4px; font-size: 0.62rem; font-weight: 700; font-family: var(--mono); }
    /* interactive tab switching */
    .ws-ltab-panel { display: none; }
    .ws-ltab-panel.active { display: flex; flex: 1; overflow: hidden; flex-direction: column; }
    /* CTA below preview */
    .ws-cta {
      text-align: center; margin-top: 2.5rem;
    }
    .ws-cta p { font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem; }

    @media (max-width: 640px) {
      nav { padding: 0.85rem 1rem; }
      .lb-row { grid-template-columns: 32px 1fr auto; }
      .lb-streak { display: none; }
      .field-row { grid-template-columns: 1fr; }
      .ws-inner { grid-template-columns: 1fr; height: auto; }
      .ws-right { display: none; }
      .ws-inner { height: 520px; }
    }
  </style>
</head>
<body>

<!-- ── NAV ── -->
<nav>
  <a class="nav-logo" href="#">Algo<span>Track</span></a>
  <div class="nav-right">
    <a class="btn-nav-ghost" href="#" onclick="openModal('signin');return false;">Sign In</a>
    <a class="btn-nav-primary" href="#" onclick="openModal('signup');return false;">Create Account</a>
  </div>
</nav>

<!-- ── HERO ── -->
<section class="hero">
  <div class="hero-grid"></div>
  <div class="hero-glow"></div>

  <div class="access-note">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    Requires an Amrita Chennai student email to register
  </div>

  <h1>Algo<span class="accent">Track</span></h1>

  <p class="hero-sub">
    AlgoTrack uses spaced repetition to turn every problem you solve into a problem you <em>actually remember</em>.
    Log it. Rate it. Review it exactly when you're about to forget.
  </p>

  <div class="hero-actions">
    <a href="#" class="btn-primary" onclick="openModal('signup');return false;">Create Free Account</a>
    <a href="#how" class="btn-ghost">See how it works</a>
  </div>

  <div class="hero-stat-row">
    <div class="hero-stat"><div class="num">3×</div><div class="lbl">Retention boost</div></div>
    <div class="hero-stat"><div class="num">4</div><div class="lbl">Confidence levels</div></div>
    <div class="hero-stat"><div class="num">∞</div><div class="lbl">Problems tracked</div></div>
  </div>
</section>

<!-- ── HOW IT WORKS ── -->
<section class="hiw" id="how">
  <div class="section-inner">
    <div class="section-header">
      <div class="section-label">// How It Works</div>
      <h2 class="section-title">Three steps to never forgetting a problem again.</h2>
      <p class="section-sub">No new habits to build. Log, rate, and show up when AlgoTrack tells you to.</p>
    </div>
    <div class="steps">
      <div class="step">
        <div class="step-num">Step 01</div>
        <span class="step-icon">📝</span>
        <h3>Log a problem after solving it</h3>
        <p>Add the problem, topic, and a quick note on your approach. Takes under 30 seconds. Works for LeetCode, textbook exercises, contest problems — anything.</p>
      </div>
      <div class="step">
        <div class="step-num">Step 02</div>
        <span class="step-icon">🎯</span>
        <h3>Rate your confidence honestly</h3>
        <p>Be real with yourself. Pick how it felt:</p>
        <div class="confidence-pills">
          <span class="pill again">Again</span>
          <span class="pill hard">Hard</span>
          <span class="pill good">Good</span>
          <span class="pill master">Master</span>
        </div>
      </div>
      <div class="step">
        <div class="step-num">Step 03</div>
        <span class="step-icon">📅</span>
        <h3>AlgoTrack schedules your review</h3>
        <p>The SM-2 spaced repetition algorithm calculates exactly when you need to see each problem again — right before your memory fades.</p>
      </div>
    </div>
  </div>
</section>

<!-- ── FEATURES ── -->
<section id="features">
  <div class="section-inner">
    <div class="section-header">
      <div class="section-label">// Features</div>
      <h2 class="section-title">Everything you need to actually retain what you learn.</h2>
    </div>
    <div class="features-grid">
      <div class="feat"><span class="feat-icon">🧠</span><h3>Spaced Repetition Engine</h3><p>SM-2 algorithm schedules each problem at the optimal interval. More reps where you're weak, fewer where you're strong.</p></div>
      <div class="feat"><span class="feat-icon">🗂️</span><h3>Custom Topics</h3><p>Organize by subject, chapter, or your own tags. Filter your review queue by topic or due date. Your structure, your rules.</p></div>
      <div class="feat"><span class="feat-icon">⚡</span><h3>XP + Rank System</h3><p>Earn XP for every review. Level up from Beginner → Adept → Expert → Legend. Watch your rank climb in real time.</p></div>
      <div class="feat"><span class="feat-icon">🔥</span><h3>Streaks + Achievements</h3><p>Daily streaks keep you consistent. Unlock badges for milestones — 30-day streak, first 100 problems, mastering a full topic.</p></div>
      <div class="feat"><span class="feat-icon">🏆</span><h3>Peer Leaderboard</h3><p>See where you stand among your batchmates. Weekly rankings reset — consistency beats short bursts, no shortcuts to the top.</p></div>
      <div class="feat"><span class="feat-icon">📖</span><h3>Master Notebook</h3><p>Problems rated <em>Master</em> live here — your proof of mastery. Perfect for last-minute revision before exams or placements.</p></div>
    </div>
  </div>
</section>

<!-- ── WORKSPACE PREVIEW ── -->
<section class="ws-section" id="workspace">
  <div class="section-inner">
    <div class="section-header" style="text-align:center;max-width:600px;margin:0 auto 2.75rem;">
      <div class="section-label">// Live Preview</div>
      <h2 class="section-title">Your coding workspace, all in one place.</h2>
      <p class="section-sub" style="margin:0 auto;">Problem statement, code editor, smart notes, and revision scheduling — side by side. Here's exactly what you'll see inside AlgoTrack.</p>
    </div>

    <!-- Browser frame -->
    <div class="ws-browser">
      <!-- chrome bar -->
      <div class="ws-chrome">
        <div class="ws-dots">
          <div class="ws-dot r"></div>
          <div class="ws-dot y"></div>
          <div class="ws-dot g"></div>
        </div>
        <div class="ws-url">algotrack.app/<span>workspace</span></div>
      </div>

      <!-- workspace grid: topbar + left + right -->
      <div style="display:flex;flex-direction:column;height:480px;background:#0D1117;font-family:'JetBrains Mono',monospace;">

        <!-- top nav strip -->
        <div class="ws-topbar" style="grid-column:1/-1">
          <span class="ws-logo">Algo<span>Track</span></span>
          <div class="ws-prob-pill">1. Two Sum</div>
          <span class="ws-diff">Easy</span>
          <div class="ws-spacer"></div>
          <!-- lang tabs in nav -->
          <div style="display:flex;gap:2px;margin-right:0.5rem;">
            <button class="ws-ltab active" onclick="wsSwitchLang('python',this)" style="cursor:pointer;">Python</button>
            <button class="ws-ltab"        onclick="wsSwitchLang('java',this)"   style="cursor:pointer;">Java</button>
            <button class="ws-ltab"        onclick="wsSwitchLang('c',this)"      style="cursor:pointer;">C</button>
          </div>
          <button class="ws-run">▶ Run</button>
          <button class="ws-submit" style="cursor:pointer;" onclick="wsRunCode()">✓ Submit</button>
        </div>

        <!-- main two-col body -->
        <div class="ws-inner" style="flex:1;overflow:hidden;">

          <!-- LEFT -->
          <div class="ws-left">
            <!-- problem pane -->
            <div class="ws-prob">
              <div class="ws-ptitle">Two Sum</div>
              <div class="ws-topics">
                <span class="ws-topic">Arrays</span>
                <span class="ws-topic">HashMap</span>
              </div>
              <div class="ws-pdesc">
                Given an array of integers <strong>nums</strong> and an integer <strong>target</strong>, return <em>indices of the two numbers</em> that add up to target.
                <div class="ws-example">
                  <div class="ex-lbl">Example</div>
                  <code>Input:  nums = [2,7,11,15], target = 9</code><br>
                  <code>Output: [0,1]</code>
                </div>
              </div>
            </div>

            <!-- code editor -->
            <div class="ws-editor">
              <div class="ws-code-area" style="flex:1;">
                <div class="ws-lnums" id="ws-lnums">1
2
3
4
5
6
7
8
9
10
11</div>
                <!-- Python panel -->
                <div class="ws-ltab-panel active" id="wsp-python">
                  <div class="ws-code" id="ws-code-python"><span class="kw">def</span> <span class="fn">twoSum</span><span class="op">(</span>nums<span class="op">,</span> target<span class="op">):</span>
    seen <span class="op">=</span> <span class="op">{}</span>
    <span class="kw">for</span> i<span class="op">,</span> num <span class="kw">in</span> <span class="fn">enumerate</span><span class="op">(</span>nums<span class="op">):</span>
        diff <span class="op">=</span> target <span class="op">-</span> num
        <span class="kw">if</span> diff <span class="kw">in</span> seen<span class="op">:</span>
            <span class="kw">return</span> <span class="op">[</span>seen<span class="op">[</span>diff<span class="op">],</span> i<span class="op">]</span>
        seen<span class="op">[</span>num<span class="op">]</span> <span class="op">=</span> i

<span class="cm"># Test</span>
<span class="fn">print</span><span class="op">(</span><span class="fn">twoSum</span><span class="op">([</span><span class="nm">2</span><span class="op">,</span><span class="nm">7</span><span class="op">,</span><span class="nm">11</span><span class="op">,</span><span class="nm">15</span><span class="op">],</span> <span class="nm">9</span><span class="op">))</span>   <span class="cm"># [0, 1]</span>
<span class="fn">print</span><span class="op">(</span><span class="fn">twoSum</span><span class="op">([</span><span class="nm">3</span><span class="op">,</span><span class="nm">2</span><span class="op">,</span><span class="nm">4</span><span class="op">],</span> <span class="nm">6</span><span class="op">))</span>       <span class="cm"># [1, 2]</span></div>
                </div>
                <!-- Java panel -->
                <div class="ws-ltab-panel" id="wsp-java">
                  <div class="ws-code" id="ws-code-java"><span class="kw">import</span> java<span class="op">.</span>util<span class="op">.*;</span>

<span class="kw">class</span> <span class="fn">Solution</span> <span class="op">{</span>
    <span class="kw">public int</span><span class="op">[]</span> <span class="fn">twoSum</span><span class="op">(</span><span class="kw">int</span><span class="op">[]</span> nums<span class="op">,</span> <span class="kw">int</span> target<span class="op">) {</span>
        HashMap<span class="op">&lt;</span>Integer<span class="op">,</span> Integer<span class="op">&gt;</span> map <span class="op">=</span> <span class="kw">new</span> <span class="fn">HashMap</span><span class="op">&lt;&gt;();</span>
        <span class="kw">for</span> <span class="op">(</span><span class="kw">int</span> i <span class="op">=</span> <span class="nm">0</span><span class="op">;</span> i <span class="op">&lt;</span> nums<span class="op">.</span>length<span class="op">;</span> i<span class="op">++) {</span>
            <span class="kw">int</span> diff <span class="op">=</span> target <span class="op">-</span> nums<span class="op">[</span>i<span class="op">];</span>
            <span class="kw">if</span> <span class="op">(</span>map<span class="op">.</span><span class="fn">containsKey</span><span class="op">(</span>diff<span class="op">)) {</span>
                <span class="kw">return new int</span><span class="op">[]{</span>map<span class="op">.</span><span class="fn">get</span><span class="op">(</span>diff<span class="op">),</span> i<span class="op">};</span>
            <span class="op">}</span>
            map<span class="op">.</span><span class="fn">put</span><span class="op">(</span>nums<span class="op">[</span>i<span class="op">],</span> i<span class="op">);</span>
        <span class="op">}</span>
        <span class="kw">return new int</span><span class="op">[]{};</span>
    <span class="op">}</span>
<span class="op">}</span></div>
                </div>
                <!-- C panel -->
                <div class="ws-ltab-panel" id="wsp-c">
                  <div class="ws-code" id="ws-code-c"><span class="kw">#include</span> <span class="st">&lt;stdio.h&gt;</span>

<span class="kw">void</span> <span class="fn">twoSum</span><span class="op">(</span><span class="kw">int</span> arr<span class="op">[],</span> <span class="kw">int</span> n<span class="op">,</span> <span class="kw">int</span> target<span class="op">) {</span>
    <span class="kw">for</span> <span class="op">(</span><span class="kw">int</span> i <span class="op">=</span> <span class="nm">0</span><span class="op">;</span> i <span class="op">&lt;</span> n<span class="op">;</span> i<span class="op">++) {</span>
        <span class="kw">for</span> <span class="op">(</span><span class="kw">int</span> j <span class="op">=</span> i<span class="op">+</span><span class="nm">1</span><span class="op">;</span> j <span class="op">&lt;</span> n<span class="op">;</span> j<span class="op">++) {</span>
            <span class="kw">if</span> <span class="op">(</span>arr<span class="op">[</span>i<span class="op">] +</span> arr<span class="op">[</span>j<span class="op">] ==</span> target<span class="op">) {</span>
                <span class="fn">printf</span><span class="op">(</span><span class="st">"[%d, %d]\n"</span><span class="op">,</span> i<span class="op">,</span> j<span class="op">);</span>
                <span class="kw">return</span><span class="op">;</span>
            <span class="op">}</span>
        <span class="op">}</span>
    <span class="op">}</span>
<span class="op">}</span></div>
                </div>
              </div>

              <!-- bottom test cases / output strip -->
              <div class="ws-bottom">
                <div class="ws-btabs">
                  <div class="ws-btab active" id="ws-btab-tc"   onclick="wsShowBTab('tc')">  Test Cases</div>
                  <div class="ws-btab"         id="ws-btab-out" onclick="wsShowBTab('out')">Output</div>
                </div>
                <div id="ws-panel-tc">
                  <div class="ws-tcrow"><span class="ws-tcn">Case 1</span><span class="ws-tctxt">nums=[2,7,11,15], target=9 · Expected: [0,1]</span><span class="ws-tcpass" id="wstc1">—</span></div>
                  <div class="ws-tcrow"><span class="ws-tcn">Case 2</span><span class="ws-tctxt">nums=[3,2,4], target=6 · Expected: [1,2]</span><span class="ws-tcpass" id="wstc2">—</span></div>
                </div>
                <div id="ws-panel-out" style="display:none;padding:0.4rem 0.8rem;font-size:0.7rem;">
                  <span id="ws-out-txt" style="color:#546e7a;font-style:italic;">// Press Submit to run</span>
                </div>
              </div>
            </div>
          </div><!-- /ws-left -->

          <!-- RIGHT notes -->
          <div class="ws-right">
            <div class="ws-nhdr">
              <span class="ws-ntitle">📝 Notes</span>
              <span class="ws-nsave">Save</span>
            </div>
            <div class="ws-ntabs">
              <div class="ws-ntab active">Approach</div>
              <div class="ws-ntab">Concepts</div>
              <div class="ws-ntab">Mistakes</div>
            </div>
            <div class="ws-notes-body">
              <div>
                <div class="ws-nlabel">Logic / Approach</div>
                <div class="ws-ntext">Traverse array once. Calculate complement = target − current. Check if complement exists in hashmap. If yes, return indices.</div>
              </div>
              <div>
                <div class="ws-nlabel">Complexity</div>
                <div class="ws-cx-row">
                  <div class="ws-cx"><div class="ws-cx-lbl">Time</div><div class="ws-cx-val">O(n)</div></div>
                  <div class="ws-cx"><div class="ws-cx-lbl">Space</div><div class="ws-cx-val">O(n)</div></div>
                </div>
              </div>
              <div>
                <div class="ws-nlabel">Key Concept</div>
                <div class="ws-ntext">HashMap gives O(1) lookup. Store each number as we scan, check complement on the fly.</div>
              </div>
            </div>
            <!-- confidence -->
            <div class="ws-conf">
              <div class="ws-conf-lbl">Confidence after solving</div>
              <div class="ws-conf-grid">
                <div class="ws-cb low">🔴 Low</div>
                <div class="ws-cb med">🟡 Medium</div>
                <div class="ws-cb high">🔵 High</div>
                <div class="ws-cb master" id="ws-master-btn">🟢 Master</div>
              </div>
            </div>
            <!-- revision -->
            <div class="ws-rev">
              <div class="ws-rev-info" id="ws-rev-info">Next review: <strong>14 days</strong></div>
              <button class="ws-rev-btn" onclick="wsSchedule()">Save &amp; Schedule</button>
            </div>
          </div><!-- /ws-right -->

        </div><!-- /ws-inner grid -->
      </div><!-- /flex column -->
    </div><!-- /ws-browser -->

    <div class="ws-cta">
      <p>Everything above is interactive — try switching the language tabs and hitting Submit.</p>
      <a href="#" class="btn-primary" onclick="openModal('signup');return false;">Start Solving for Free →</a>
    </div>
  </div>
</section>

<!-- ── LEADERBOARD PREVIEW ── -->
<section class="leaderboard-section">
  <div class="section-inner">
    <div class="section-header" style="text-align:center;max-width:480px;margin:0 auto 3rem;">
      <div class="section-label">// Leaderboard</div>
      <h2 class="section-title">Your batchmates are already grinding.</h2>
      <p class="section-sub">Rankings reset every week. Consistency wins — not cramming.</p>
    </div>
    <div class="lb-card">
      <div class="lb-header">
        <div class="lb-title">Weekly Leaderboard — <span>Amrita Chennai</span></div>
        <div class="lb-live">LIVE</div>
      </div>
      <div class="lb-row">
        <div class="lb-rank gold">🥇</div>
        <div class="lb-user"><div class="lb-avatar" style="background:rgba(240,165,0,.15);color:#F0A500;">RA</div><div><div class="lb-name">Riya Anand</div><div class="lb-dept">CSE · 3rd Year</div></div></div>
        <div class="lb-xp">4,820 XP</div><div class="lb-streak">🔥 41d</div>
      </div>
      <div class="lb-row">
        <div class="lb-rank silver">🥈</div>
        <div class="lb-user"><div class="lb-avatar" style="background:rgba(99,102,241,.15);color:#818CF8;">VK</div><div><div class="lb-name">Vetri Kumar</div><div class="lb-dept">CSE · 2nd Year</div></div></div>
        <div class="lb-xp">4,310 XP</div><div class="lb-streak">🔥 29d</div>
      </div>
      <div class="lb-row">
        <div class="lb-rank bronze">🥉</div>
        <div class="lb-user"><div class="lb-avatar" style="background:rgba(236,72,153,.15);color:#F472B6;">NS</div><div><div class="lb-name">Navyasree S</div><div class="lb-dept">IT · 2nd Year</div></div></div>
        <div class="lb-xp">3,980 XP</div><div class="lb-streak">🔥 22d</div>
      </div>
      <div class="lb-row">
        <div class="lb-rank">4</div>
        <div class="lb-user"><div class="lb-avatar" style="background:rgba(52,211,153,.15);color:#34D399;">AP</div><div><div class="lb-name">Arjun Prasad</div><div class="lb-dept">ECE · 3rd Year</div></div></div>
        <div class="lb-xp">3,450 XP</div><div class="lb-streak">🔥 15d</div>
      </div>
      <div class="lb-row">
        <div class="lb-rank">5</div>
        <div class="lb-user"><div class="lb-avatar" style="background:rgba(251,191,36,.15);color:#FBBF24;">ML</div><div><div class="lb-name">Meera Lakshmi</div><div class="lb-dept">CSE · 2nd Year</div></div></div>
        <div class="lb-xp">3,110 XP</div><div class="lb-streak">🔥 11d</div>
      </div>
      <div class="lb-footer">
        <p>This could be your name at the top. Rankings update in real time.</p>
        <a href="#" class="btn-primary" style="padding:.65rem 1.5rem;font-size:.82rem;" onclick="openModal('signup');return false;">Join and Compete →</a>
      </div>
    </div>
  </div>
</section>

<!-- ── CTA BAND ── -->
<section class="cta-band" id="cta">
  <div class="section-inner" style="position:relative;z-index:1;">
    <h2>Your future self will thank you.</h2>
    <p>The problems you skip reviewing today become the gaps in your placement test tomorrow.</p>
    <div class="cta-btn-row">
      <a href="#" class="btn-primary" style="font-size:1rem;padding:1rem 2.25rem;" onclick="openModal('signup');return false;">Create Free Account</a>
      <a href="#" class="btn-ghost" style="font-size:1rem;padding:1rem 2.25rem;" onclick="openModal('signin');return false;">Sign In</a>
    </div>
    <p style="margin-top:1.1rem;font-size:0.76rem;color:var(--text-dim);">Requires a valid Amrita Chennai student email · No credit card needed</p>
  </div>
</section>

<!-- ── FOOTER ── -->
<footer>
  <div class="footer-logo">Algo<span>Track</span></div>
  <p class="footer-tagline">Built by Amrita Chennai students, for Amrita Chennai students.</p>
  <p class="footer-copy">© 2025 AlgoTrack · All rights reserved</p>
</footer>

<!-- ════════════════════════════════════
     SIGN UP MODAL  (AlgoTrack)
════════════════════════════════════ -->
<div class="modal-overlay" id="modal-signup" onclick="handleOverlayClick(event,'signup')">
  <div class="modal" style="max-width:460px;max-height:92vh;overflow-y:auto;">
    <button class="modal-close" onclick="closeModal('signup')">✕</button>

    <!-- branding -->
    <div style="margin-bottom:0.2rem;">
      <div class="modal-logo" style="font-size:1.15rem;">Algo<span>Track</span></div>
      <p style="font-size:0.72rem;color:var(--text-dim);font-family:var(--mono);margin-top:0.15rem;">
        Smart coding prep · track · revise · retain
      </p>
    </div>

    <h2 style="margin-top:0.9rem;">Create your account</h2>
    <p class="modal-sub">Already have one? <a onclick="switchModal('signup','signin')">Sign in instead</a></p>

    <div class="modal-access">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      Requires a valid Amrita institutional email address
    </div>

    <!-- name row -->
    <div class="field-row">
      <div class="field-group">
        <label>First Name <span style="color:#F87171">*</span></label>
        <input type="text" placeholder="Navya" id="su-fname" oninput="clearErr('su-fname')" />
        <div class="field-err" id="err-fname">First name is required.</div>
      </div>
      <div class="field-group">
        <label>Last Name <span style="color:var(--text-dim);font-size:0.62rem;">(optional)</span></label>
        <input type="text" placeholder="Sree" id="su-lname" />
      </div>
    </div>

    <!-- email -->
    <div class="field-group">
      <label>Amrita Email <span style="color:#F87171">*</span></label>
      <input type="email" placeholder="ch.sc.u4xxxxxxxx@ch.students.amrita.edu" id="su-email"
             oninput="liveEmailCheck()" />
      <div class="field-err" id="err-email">Only valid Amrita email addresses are allowed.</div>
      <div class="field-hint">e.g. example@amrita.edu · example@students.amrita.edu · example@ch.students.amrita.edu</div>
    </div>

    <!-- dept + year -->
    <div class="field-row">
      <div class="field-group">
        <label>Department <span style="color:#F87171">*</span></label>
        <select id="su-dept" style="color:var(--text);" onchange="clearErr('su-dept')">
          <option value="" disabled selected style="color:var(--text-dim);">Department</option>
          <option>CSE</option><option>IT</option><option>ECE</option><option>EEE</option>
          <option>MECH</option><option>CIVIL</option><option>AIDS</option><option>AIML</option>
        </select>
        <div class="field-err" id="err-dept">Please select your department.</div>
      </div>
      <div class="field-group">
        <label>Year <span style="color:#F87171">*</span></label>
        <select id="su-year" style="color:var(--text);" onchange="clearErr('su-year')">
          <option value="" disabled selected style="color:var(--text-dim);">Year</option>
          <option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option>
        </select>
        <div class="field-err" id="err-year">Please select your year.</div>
      </div>
    </div>

    <!-- password -->
    <div class="field-group">
      <label>Password <span style="color:#F87171">*</span></label>
      <div class="pwd-wrap">
        <input type="password" placeholder="Min. 8 characters" id="su-pwd"
               oninput="updateStrength();liveMatchCheck()" />
        <button class="pwd-eye" type="button" onclick="togglePwd('su-pwd',this)" tabindex="-1">
          <svg id="eye-pwd" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
      <div class="pwd-strength">
        <div class="pwd-bar-track"><div class="pwd-bar-fill" id="pwd-bar"></div></div>
        <div class="pwd-label" id="pwd-label"></div>
      </div>
      <div class="field-err" id="err-pwd">Password must be at least 8 characters.</div>
    </div>

    <!-- confirm password -->
    <div class="field-group">
      <label>Confirm Password <span style="color:#F87171">*</span></label>
      <div class="pwd-wrap">
        <input type="password" placeholder="Re-enter your password" id="su-cpwd"
               oninput="liveMatchCheck()" />
        <button class="pwd-eye" type="button" onclick="togglePwd('su-cpwd',this)" tabindex="-1">
          <svg id="eye-cpwd" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
      <div class="match-row" id="match-row"></div>
      <div class="field-err" id="err-cpwd">Passwords do not match.</div>
    </div>

    <button class="btn-full" onclick="handleSignup()">Create Account →</button>
    <div class="modal-divider"><hr/><span>Free forever · no card needed</span><hr/></div>
  </div>
</div>

<!-- ════════════════════════════════════
     SIGN IN MODAL
════════════════════════════════════ -->
<div class="modal-overlay" id="modal-signin" onclick="handleOverlayClick(event,'signin')">
  <div class="modal">
    <button class="modal-close" onclick="closeModal('signin')">✕</button>
    <div class="modal-logo">Track<span>-It</span></div>
    <h2>Welcome back</h2>
    <p class="modal-sub">New here? <a onclick="switchModal('signin','signup')">Create an account</a></p>

    <div class="modal-access">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      Access is limited to Amrita Chennai student accounts
    </div>

    <div class="field-group"><label>Email</label><input type="email" placeholder="ch.sc.u4xxxxxxxx@ch.students.amrita.edu" id="si-email"/></div>
    <div class="field-group"><label>Password</label><input type="password" placeholder="Your password" id="si-pwd"/></div>

    <button class="btn-full" onclick="handleSignin()">Sign In →</button>

    <div class="modal-divider"><hr/><span>Forgot password? Contact your admin</span><hr/></div>
  </div>
</div>

<!-- ── TOAST ── -->
<div class="toast" id="toast"></div>

<script>
  /* ── modal open/close ── */
  function openModal(id) {
    document.getElementById('modal-' + id).classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(id) {
    document.getElementById('modal-' + id).classList.remove('open');
    document.body.style.overflow = '';
  }
  function switchModal(from, to) { closeModal(from); setTimeout(() => openModal(to), 120); }
  function handleOverlayClick(e, id) { if (e.target === e.currentTarget) closeModal(id); }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal('signup'); closeModal('signin'); }
  });

  /* ── toast ── */
  function showToast(msg, duration = 3500) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), duration);
  }

  /* ── email validation: accept amrita.edu / students.amrita.edu / *.students.amrita.edu ── */
  function isAmritaEmail(email) {
    return /^[^\s@]+@(([a-z0-9-]+\.)?students\.amrita\.edu|amrita\.edu)$/i.test(email.trim());
  }

  /* ── live email check ── */
  function liveEmailCheck() {
    const val = document.getElementById('su-email').value.trim();
    if (!val) { clearErr('su-email'); return; }
    if (isAmritaEmail(val)) {
      setOk('su-email'); hideErr('err-email');
    } else {
      setErr('su-email'); showErr('err-email', 'Only valid Amrita email addresses are allowed.');
    }
  }

  /* ── password strength ── */
  function updateStrength() {
    const pwd = document.getElementById('su-pwd').value;
    const bar = document.getElementById('pwd-bar');
    const lbl = document.getElementById('pwd-label');
    let score = 0;
    if (pwd.length >= 8)  score++;
    if (pwd.length >= 12) score++;
    if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    const levels = [
      { w:'0%',   c:'transparent',  t:'' },
      { w:'25%',  c:'#F87171',      t:'Weak' },
      { w:'50%',  c:'#FBBF24',      t:'Fair' },
      { w:'75%',  c:'#60A5FA',      t:'Good' },
      { w:'100%', c:'#4ADE80',      t:'Strong' },
    ];
    const lvl = levels[Math.min(score, 4)];
    bar.style.width = lvl.w; bar.style.background = lvl.c;
    lbl.textContent = lvl.t; lbl.style.color = lvl.c;
    clearErr('su-pwd');
  }

  /* ── live password match ── */
  function liveMatchCheck() {
    const p1 = document.getElementById('su-pwd').value;
    const p2 = document.getElementById('su-cpwd').value;
    const row = document.getElementById('match-row');
    if (!p2) { row.innerHTML = ''; return; }
    if (p1 === p2) {
      row.className = 'match-row ok';
      row.innerHTML = '<span class="match-dot ok"></span> Passwords match';
      hideErr('err-cpwd');
    } else {
      row.className = 'match-row err';
      row.innerHTML = '<span class="match-dot err"></span> Passwords do not match';
    }
  }

  /* ── toggle password visibility ── */
  function togglePwd(inputId, btn) {
    const inp = document.getElementById(inputId);
    const isHidden = inp.type === 'password';
    inp.type = isHidden ? 'text' : 'password';
    btn.querySelector('svg').style.opacity = isHidden ? '1' : '0.45';
  }

  /* ── field state helpers ── */
  function setErr(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.add('err'); el.classList.remove('ok'); }
  }
  function setOk(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.add('ok'); el.classList.remove('err'); }
  }
  function clearErr(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.remove('err','ok'); }
  }
  function showErr(errId, msg) {
    const el = document.getElementById(errId);
    if (el) { el.textContent = msg; el.classList.add('visible'); }
  }
  function hideErr(errId) {
    const el = document.getElementById(errId);
    if (el) el.classList.remove('visible');
  }
  function fieldErr(inputId, errId, msg) {
    setErr(inputId); showErr(errId, msg);
  }
  function fieldOk(inputId, errId) {
    setOk(inputId); hideErr(errId);
  }

  /* ── SIGN UP handler ── */
  function handleSignup() {
    let valid = true;

    const fname = document.getElementById('su-fname').value.trim();
    const email = document.getElementById('su-email').value.trim();
    const dept  = document.getElementById('su-dept').value;
    const year  = document.getElementById('su-year').value;
    const pwd   = document.getElementById('su-pwd').value;
    const cpwd  = document.getElementById('su-cpwd').value;

    // first name (required)
    if (!fname) {
      fieldErr('su-fname','err-fname','First name is required.'); valid = false;
    } else { fieldOk('su-fname','err-fname'); }

    // email (required + amrita domain)
    if (!email) {
      fieldErr('su-email','err-email','Email is required.'); valid = false;
    } else if (!isAmritaEmail(email)) {
      fieldErr('su-email','err-email','Only valid Amrita email addresses are allowed.'); valid = false;
    } else { fieldOk('su-email','err-email'); }

    // dept
    if (!dept) {
      fieldErr('su-dept','err-dept','Please select your department.'); valid = false;
    } else { fieldOk('su-dept','err-dept'); }

    // year
    if (!year) {
      fieldErr('su-year','err-year','Please select your year.'); valid = false;
    } else { fieldOk('su-year','err-year'); }

    // password length
    if (pwd.length < 8) {
      fieldErr('su-pwd','err-pwd','Password must be at least 8 characters.'); valid = false;
    } else { fieldOk('su-pwd','err-pwd'); }

    // confirm password match
    if (!cpwd) {
      fieldErr('su-cpwd','err-cpwd','Please confirm your password.'); valid = false;
    } else if (pwd !== cpwd) {
      fieldErr('su-cpwd','err-cpwd','Passwords do not match.'); valid = false;
    } else { fieldOk('su-cpwd','err-cpwd'); }

    if (!valid) return;

    closeModal('signup');
    showToast(`✅ Account created! Welcome to AlgoTrack, ${fname}.`, 4000);
  }

  /* ── WORKSPACE PREVIEW INTERACTIONS ── */
  function wsSwitchLang(lang, btn) {
    document.querySelectorAll('.ws-ltab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.ws-ltab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('wsp-' + lang).classList.add('active');
    // update line numbers to match content
    const lineMap = { python: 11, java: 15, c: 13 };
    document.getElementById('ws-lnums').textContent =
      Array.from({ length: lineMap[lang] || 11 }, (_, i) => i + 1).join('\n');
    // reset tc status
    ['wstc1','wstc2'].forEach(id => {
      const el = document.getElementById(id);
      if (el) { el.textContent = '—'; el.style.color = '#4A5568'; }
    });
    document.getElementById('ws-out-txt').textContent = '// Press Submit to run';
    document.getElementById('ws-out-txt').style.color = '#546e7a';
  }

  function wsShowBTab(id) {
    document.getElementById('ws-panel-tc').style.display  = id === 'tc'  ? 'block' : 'none';
    document.getElementById('ws-panel-out').style.display = id === 'out' ? 'block' : 'none';
    document.getElementById('ws-btab-tc').classList.toggle('active',  id === 'tc');
    document.getElementById('ws-btab-out').classList.toggle('active', id === 'out');
  }

  function wsRunCode() {
    // animate → show results
    const outTxt = document.getElementById('ws-out-txt');
    outTxt.style.color = '#8B949E';
    outTxt.textContent = '// Running…';
    wsShowBTab('out');
    setTimeout(() => {
      ['wstc1','wstc2'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.textContent = '✓ Pass'; el.style.color = '#4ADE80'; }
      });
      outTxt.innerHTML = '<span style="color:#4ADE80">▶ [0, 1]</span>\n<span style="color:#4ADE80">▶ [1, 2]</span>\n<span style="color:#9B5AF5">// 2/2 passed · 24ms</span>';
      outTxt.style.color = '';
    }, 550);
  }

  function wsSchedule() {
    document.getElementById('ws-rev-info').innerHTML = 'Next review: <strong style="color:#4ADE80">scheduled ✓</strong>';
  }

  /* ── SIGN IN handler ── */
  function handleSignin() {
    const email = document.getElementById('si-email').value.trim();
    const pwd   = document.getElementById('si-pwd').value;
    if (!email) { showToast('⚠️ Please enter your email.'); return; }
    if (!isAmritaEmail(email)) { showToast('⚠️ Only Amrita student accounts can sign in.'); return; }
    if (!pwd) { showToast('⚠️ Please enter your password.'); return; }
    closeModal('signin');
    showToast('✅ Signed in! Redirecting to your dashboard…', 3500);
  }
</script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Track-It — Stop Solving. Start Retaining.</title>
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

    /* scrollbar */
    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--violet-dim); border-radius: 3px; }

    @media (max-width: 640px) {
      nav { padding: 0.85rem 1rem; }
      .lb-row { grid-template-columns: 32px 1fr auto; }
      .lb-streak { display: none; }
      .field-row { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

<!-- ── NAV ── -->
<nav>
  <a class="nav-logo" href="#">Track<span>-It</span></a>
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

  <h1>Stop solving.<br><span class="accent">Start retaining.</span></h1>

  <p class="hero-sub">
    Track-It uses spaced repetition to turn every problem you solve into a problem you <em>actually remember</em>.
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
      <p class="section-sub">No new habits to build. Log, rate, and show up when Track-It tells you to.</p>
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
        <h3>Track-It schedules your review</h3>
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
  <div class="footer-logo">Track<span>-It</span></div>
  <p class="footer-tagline">Built by Amrita Chennai students, for Amrita Chennai students.</p>
  <p class="footer-copy">© 2025 Track-It · All rights reserved</p>
</footer>

<!-- ════════════════════════════════════
     SIGN UP MODAL
════════════════════════════════════ -->
<div class="modal-overlay" id="modal-signup" onclick="handleOverlayClick(event,'signup')">
  <div class="modal">
    <button class="modal-close" onclick="closeModal('signup')">✕</button>
    <div class="modal-logo">Track<span>-It</span></div>
    <h2>Create your account</h2>
    <p class="modal-sub">Already have one? <a onclick="switchModal('signup','signin')">Sign in instead</a></p>

    <div class="modal-access">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      Use your Amrita Chennai student email to register
    </div>

    <div class="field-row">
      <div class="field-group"><label>First Name</label><input type="text" placeholder="Navya" id="su-fname"/></div>
      <div class="field-group"><label>Last Name</label><input type="text" placeholder="Sree" id="su-lname"/></div>
    </div>
    <div class="field-group"><label>Email</label><input type="email" placeholder="cb.en.u4cse22xxx@cb.students.amrita.edu" id="su-email"/></div>
    <div class="field-group">
      <label>Department</label>
      <select id="su-dept" style="color:var(--text);">
        <option value="" disabled selected style="color:var(--text-dim);">Select your department</option>
        <option>CSE</option><option>IT</option><option>ECE</option><option>EEE</option><option>MECH</option><option>CIVIL</option><option>AIDS</option><option>AIML</option>
      </select>
    </div>
    <div class="field-row">
      <div class="field-group">
        <label>Year</label>
        <select id="su-year" style="color:var(--text);">
          <option value="" disabled selected style="color:var(--text-dim);">Year</option>
          <option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option>
        </select>
      </div>
      <div class="field-group"><label>Password</label><input type="password" placeholder="Min. 8 characters" id="su-pwd"/></div>
    </div>

    <button class="btn-full" onclick="handleSignup()">Create Account →</button>

    <div class="modal-divider"><hr/><span>Free forever, no card needed</span><hr/></div>
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

    <div class="field-group"><label>Email</label><input type="email" placeholder="cb.en.u4cse22xxx@cb.students.amrita.edu" id="si-email"/></div>
    <div class="field-group"><label>Password</label><input type="password" placeholder="Your password" id="si-pwd"/></div>

    <button class="btn-full" onclick="handleSignin()">Sign In →</button>

    <div class="modal-divider"><hr/><span>Forgot password? Contact your admin</span><hr/></div>
  </div>
</div>

<!-- ── TOAST ── -->
<div class="toast" id="toast"></div>

<script>
  function openModal(id) {
    document.getElementById('modal-' + id).classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(id) {
    document.getElementById('modal-' + id).classList.remove('open');
    document.body.style.overflow = '';
  }
  function switchModal(from, to) {
    closeModal(from);
    setTimeout(() => openModal(to), 120);
  }
  function handleOverlayClick(e, id) {
    if (e.target === e.currentTarget) closeModal(id);
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal('signup'); closeModal('signin');
    }
  });

  function showToast(msg, duration = 3000) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), duration);
  }

  function isAmritaEmail(email) {
    return email.toLowerCase().includes('@cb.students.amrita.edu') ||
           email.toLowerCase().includes('@amrita.edu');
  }

  function handleSignup() {
    const fname = document.getElementById('su-fname').value.trim();
    const lname = document.getElementById('su-lname').value.trim();
    const email = document.getElementById('su-email').value.trim();
    const dept  = document.getElementById('su-dept').value;
    const year  = document.getElementById('su-year').value;
    const pwd   = document.getElementById('su-pwd').value;

    if (!fname || !lname) { showToast('⚠️ Please enter your full name.'); return; }
    if (!email) { showToast('⚠️ Please enter your email.'); return; }
    if (!isAmritaEmail(email)) { showToast('⚠️ Use your Amrita student email to register.'); return; }
    if (!dept) { showToast('⚠️ Please select your department.'); return; }
    if (!year) { showToast('⚠️ Please select your year.'); return; }
    if (pwd.length < 8) { showToast('⚠️ Password must be at least 8 characters.'); return; }

    closeModal('signup');
    showToast(`✅ Account created! Welcome to Track-It, ${fname}.`, 4000);
  }

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
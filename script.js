/* ══════════════════════════════════════════════════
   script.js — Bhushan Patil Portfolio
   All data, rendering, animations, and interactions
══════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────
   1. DATA
────────────────────────────────────────────────── */

const DATA = {

  skills: [
    { name: 'AWS Cloud Infrastructure',          pct: 95 },
    { name: 'Terraform / CloudFormation (IaC)',   pct: 90 },
    { name: 'Vulnerability & Patch Management',   pct: 92 },
    { name: 'CI/CD — Jenkins / GitHub',           pct: 82 },
    { name: 'Docker & Kubernetes',                pct: 78 },
    { name: 'PowerShell / Bash Scripting',        pct: 85 },
    { name: 'ITIL Service Management',            pct: 88 },
    { name: 'Azure Cloud',                        pct: 75 },
  ],

  chips: [
    'EC2', 'S3', 'VPC', 'IAM', 'RDS', 'Auto Scaling', 'ELB',
    'CloudWatch', 'CloudTrail', 'GuardDuty', 'Secrets Manager',
    'EKS', 'Lambda', 'Transit Gateway', 'ALB/NLB', 'Terraform',
    'CloudFormation', 'Ansible', 'Jenkins', 'GitHub', 'Docker',
    'Kubernetes', 'ServiceNow', 'Qualys', 'AWS Inspector', 'SIEM',
    'SentinelOne', 'SCCM', 'WSUS', 'Nagios', 'PowerShell', 'Bash',
    'Azure', 'AWS SSM', 'JIRA',
  ],

  experiences: [
    {
      title:   'Implementation Consultant — Cloud Operations & Vulnerability Management',
      company: 'Siemens Digital Industries Software',
      dates:   'Aug 2022 – Present',
      points: [
        'Architect & manage scalable AWS infrastructure (EC2, Auto Scaling, S3, RDS, VPC, Transit Gateway) ensuring 99.9%+ uptime',
        'Automate infrastructure provisioning with Terraform & CloudFormation, standardizing environments and accelerating delivery',
        'Led vulnerability management program with GuardDuty & Qualys — achieved 95% reduction in critical/high-risk findings',
        'Engineered automated patch management for 1,000+ Linux/Windows servers via AWS SSM & PowerShell — 80% compliance uplift',
        'Reduced MTTR for L2/L3 incidents by 30% through monitoring automation and documented resolution procedures',
        'Served as SME during successful ISO 27001 & SOC 2 audits — optimized cloud spend by 15%',
      ],
      badges: [
        { label: 'AWS Architect', cls: 'badge-pink'   },
        { label: 'Terraform IaC', cls: 'badge-indigo' },
        { label: 'ISO 27001',     cls: 'badge-cyan'   },
        { label: 'SOC 2',         cls: 'badge-amber'  },
        { label: 'GuardDuty',     cls: 'badge-pink'   },
        { label: 'ITIL',          cls: 'badge-indigo' },
      ],
    },
    {
      title:   'NOC Engineer / SecOps Engineer',
      company: 'ConnectWise',
      dates:   'Feb 2020 – Aug 2022',
      points: [
        '24/7 monitoring and support for network, Windows, and Linux systems in a hybrid cloud environment',
        'Security operations: triaged alerts from SIEM and EDR platforms (SentinelOne), performed initial threat mitigation',
        'Managed deployment of OS security patches and third-party updates using SCCM/WSUS across thousands of endpoints',
        'Contributed to a 25% reduction in system downtime by proactively identifying infrastructure issues',
        'Identified and assisted remediation of 500+ endpoint vulnerabilities per quarter',
      ],
      badges: [
        { label: 'SentinelOne EDR', cls: 'badge-pink'   },
        { label: 'SCCM/WSUS',       cls: 'badge-indigo' },
        { label: 'NOC 24/7',         cls: 'badge-cyan'   },
        { label: 'SecOps',           cls: 'badge-amber'  },
      ],
    },
  ],

  projects: [
    {
      emoji: '☁️',
      name:  'Cloud Migration & Infrastructure Optimization',
      desc:  'Executed migration of on-premise workloads to AWS. Designed secure VPC architecture with appropriate subnets, routing, and security groups for a seamless transition with minimal business disruption.',
      tech:  ['EC2', 'RDS', 'S3', 'VPC', 'Terraform', 'PowerShell'],
    },
    {
      emoji: '🔒',
      name:  'Automated Vulnerability Management in AWS',
      desc:  'Implemented cloud-native vulnerability scanning using AWS Inspector and GuardDuty across EC2 instances and container workloads. Integrated with JIRA for a proactive remediation pipeline.',
      tech:  ['AWS Inspector', 'GuardDuty', 'CloudWatch', 'JIRA', 'Lambda'],
    },
    {
      emoji: '🤖',
      name:  'Automated Patch Management at Scale',
      desc:  'Engineered an automated patch management strategy for 1,000+ Linux and Windows servers using AWS Systems Manager and PowerShell, improving patch compliance by 80%.',
      tech:  ['AWS SSM', 'PowerShell', 'CloudWatch', 'EC2'],
    },
  ],

  education: [
    { degree: 'ME / MTech — Cloud Computing',  inst: 'Sandip University, Nashik',   year: '2019', score: '7.6 GPA'  },
    { degree: 'BE — Computer Engineering',      inst: 'D.N. Patel COE, Shahada',     year: '2017', score: '7.71 GPA' },
    { degree: 'Diploma',                        inst: 'GMC Polytechnique, Shahada',  year: '2014', score: '80.39%'  },
  ],

  languages: [
    { name: 'English', level: 'Proficient' },
    { name: 'Hindi',   level: 'Proficient' },
    { name: 'Marathi', level: 'Proficient' },
  ],

  certifications: [
    { icon: '☁️', name: 'AWS Solutions Architect – Associate',          issuer: 'Amazon Web Services'  },
    { icon: '🔷', name: 'Microsoft Certified: Azure Fundamentals',       issuer: 'Microsoft · Jun 2021' },
    { icon: '🛡️', name: 'ITNC Cybersecurity Fundamentals for Engineers', issuer: 'ITNC · Sep 2021'     },
    { icon: '🔐', name: 'NSE 1 Network Security Associate',              issuer: 'Fortinet'             },
    { icon: '🔑', name: 'NSE 2 Network Security Associate',              issuer: 'Fortinet'             },
  ],

  marqueeItems: [
    'Siemens Digital Industries', 'ConnectWise', 'AWS Infrastructure', 'Terraform IaC',
    'Cloud Security', 'Kubernetes', 'ISO 27001', 'SOC 2 Compliance',
    'GuardDuty', 'Qualys', 'ServiceNow', 'ITIL Best Practices',
  ],

};


/* ──────────────────────────────────────────────────
   2. DOM RENDERING
────────────────────────────────────────────────── */

function renderAll() {
  renderMarquee();
  renderSkillBars();
  renderChips();
  renderTimeline();
  renderProjects();
  renderEducation();
  renderLanguages();
  renderCertifications();
}

/** Infinite marquee strip */
function renderMarquee() {
  const track = document.getElementById('marquee-track');
  if (!track) return;
  // Quadruple items to guarantee seamless loop at any viewport
  const repeated = [...DATA.marqueeItems, ...DATA.marqueeItems,
                    ...DATA.marqueeItems, ...DATA.marqueeItems];
  track.innerHTML = repeated
    .map(t => `<span class="marquee-item">${t}</span>`)
    .join('');
}

/** Animated skill progress bars */
function renderSkillBars() {
  const container = document.getElementById('skill-bars');
  if (!container) return;
  container.innerHTML = DATA.skills.map(s => `
    <div class="skill-item">
      <div class="skill-header">
        <span>${s.name}</span>
        <span class="skill-pct">${s.pct}%</span>
      </div>
      <div class="bar-bg">
        <div class="bar-fill" data-pct="${s.pct}"></div>
      </div>
    </div>
  `).join('');
}

/** Technology chip cloud */
function renderChips() {
  const cloud = document.getElementById('chip-cloud');
  if (!cloud) return;
  cloud.innerHTML = DATA.chips
    .map(c => `<span class="chip">${c}</span>`)
    .join('');
}

/** Experience timeline */
function renderTimeline() {
  const tl = document.getElementById('timeline');
  if (!tl) return;
  tl.innerHTML = DATA.experiences.map(e => `
    <div class="tl-item reveal">
      <div class="tl-dot"></div>
      <div class="tl-card">
        <div class="tl-header">
          <div class="tl-title">${e.title}</div>
          <div class="tl-dates">${e.dates}</div>
        </div>
        <div class="tl-company">${e.company}</div>
        <ul class="tl-desc">
          ${e.points.map(p => `<li>${p}</li>`).join('')}
        </ul>
        <div class="badge-chips">
          ${e.badges.map(b => `<span class="badge ${b.cls}">${b.label}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/** Project cards grid */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = DATA.projects.map(p => `
    <div class="project-card reveal">
      <div class="project-emoji">${p.emoji}</div>
      <div class="project-name">${p.name}</div>
      <p class="project-desc">${p.desc}</p>
      <div class="tech-tags">
        ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/** Education cards */
function renderEducation() {
  const cards = document.getElementById('edu-cards');
  if (!cards) return;
  cards.innerHTML = DATA.education.map(e => `
    <div class="edu-card reveal">
      <div>
        <div class="edu-degree">${e.degree}</div>
        <div class="edu-inst">${e.inst}</div>
        <div class="edu-year">${e.year}</div>
      </div>
      <div class="edu-score">${e.score}</div>
    </div>
  `).join('');
}

/** Language badges */
function renderLanguages() {
  const lc = document.getElementById('lang-cards');
  if (!lc) return;
  lc.innerHTML = DATA.languages.map(l => `
    <div class="lang-card reveal">
      <span class="lang-name">${l.name}</span>
      <span class="lang-badge">${l.level}</span>
    </div>
  `).join('');
}

/** Certification cards */
function renderCertifications() {
  const cg = document.getElementById('cert-grid');
  if (!cg) return;
  cg.innerHTML = DATA.certifications.map(c => `
    <div class="cert-card reveal">
      <div class="cert-icon">${c.icon}</div>
      <div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-issuer">${c.issuer}</div>
      </div>
    </div>
  `).join('');
}


/* ──────────────────────────────────────────────────
   3. LOADING SCREEN
────────────────────────────────────────────────── */

function initLoader() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) loader.classList.add('fade');
    }, 2200);
  });
}


/* ──────────────────────────────────────────────────
   4. CUSTOM CURSOR
────────────────────────────────────────────────── */

function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  // Dot tracks instantly
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  // Ring lags behind for trailing effect
  (function animateRing() {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  // Scale & recolor ring on interactive elements
  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, .btn-primary, .btn-ghost, .chip, .project-card')) {
      ring.style.transform   = 'translate(-50%, -50%) scale(1.5)';
      ring.style.borderColor = 'var(--pink)';
    }
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest('a, button, .btn-primary, .btn-ghost, .chip, .project-card')) {
      ring.style.transform   = 'translate(-50%, -50%) scale(1)';
      ring.style.borderColor = 'rgba(0, 212, 255, 0.5)';
    }
  });
}


/* ──────────────────────────────────────────────────
   5. PARTICLE CANVAS
────────────────────────────────────────────────── */

function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const COLORS = ['#f72585', '#00d4ff', '#ffbe0b', '#5b4fcf'];
  const N      = 80;
  const DIST   = 130;

  let W, H, pts = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function init() {
    pts = [];
    for (let i = 0; i < N; i++) {
      pts.push({
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r:  Math.random() * 2 + 1,
        c:  COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];

      // Move
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      // Draw dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c + 'cc';
      ctx.fill();

      // Draw connecting lines
      for (let j = i + 1; j < pts.length; j++) {
        const q  = pts[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const d  = Math.sqrt(dx * dx + dy * dy);

        if (d < DIST) {
          const alpha = Math.floor((1 - d / DIST) * 50)
            .toString(16)
            .padStart(2, '0');
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = p.c + alpha;
          ctx.lineWidth   = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  init();
  draw();

  window.addEventListener('resize', () => { resize(); init(); });
}


/* ──────────────────────────────────────────────────
   6. SCROLL REVEAL + SKILL BAR TRIGGER
────────────────────────────────────────────────── */

function initScrollReveal() {
  // General reveal observer
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      // Animate any skill bars inside this element
      entry.target.querySelectorAll('.bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.pct + '%';
        setTimeout(() => bar.classList.add('shimmer'), 1200);
      });
      revealObs.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  // Observe all .reveal elements (including dynamically rendered ones)
  function observeReveal() {
    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
  }

  // Run once after initial render, then re-run after dynamic content populates
  observeReveal();
  setTimeout(observeReveal, 100); // picks up JS-rendered .reveal nodes

  // Dedicated skill-bar observer for the bar group container
  const skillObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.pct + '%';
        setTimeout(() => bar.classList.add('shimmer'), 1200);
      });
      skillObs.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.skill-bar-group').forEach(el => skillObs.observe(el));
}


/* ──────────────────────────────────────────────────
   7. SMOOTH SCROLL  (fixes "View Experience" & "Get in Touch")
   ─────────────────────────────────────────────────
   Intercepts every internal anchor click and manually
   scrolls to the target with a 68 px navbar offset.
   This bypasses the browser's default anchor behaviour
   which can silently fail when `cursor:none` is set on
   <body>, and also ensures sections are never hidden
   behind the fixed navbar.
────────────────────────────────────────────────── */

function initSmoothScroll() {
  const NAV_HEIGHT = 68; // px — must match nav height in CSS

  function scrollToSection(targetId) {
    // Strip leading '#' if present
    const id  = targetId.replace(/^#/, '');
    const el  = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  // Capture ALL anchor clicks that point to an on-page section
  document.addEventListener('click', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;

    e.preventDefault();           // stop default jump
    scrollToSection(href);
  });
}


/* ──────────────────────────────────────────────────
   8. MOBILE MENU
────────────────────────────────────────────────── */

function initMobileMenu() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  // Close menu when any link is tapped
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}


/* ──────────────────────────────────────────────────
   9. HERO RESPONSIVE LAYOUT FIX
────────────────────────────────────────────────── */

function initHeroLayout() {
  const inner = document.querySelector('.hero-inner');
  if (!inner) return;

  function update() {
    inner.style.gridTemplateColumns = window.innerWidth <= 900 ? '1fr' : '1fr 1fr';
  }

  update();
  window.addEventListener('resize', update);
}


/* ──────────────────────────────────────────────────
   10. BOOTSTRAP — run everything
────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  renderAll();          // Populate dynamic content first
  initLoader();         // Loading screen fade-out
  initCursor();         // Custom cursor
  initParticles();      // Particle canvas
  initScrollReveal();   // Scroll-triggered reveals & skill bars
  initSmoothScroll();   // Smooth anchor scroll with navbar offset ← NEW
  initMobileMenu();     // Hamburger toggle
  initHeroLayout();     // Hero grid responsive fix
});

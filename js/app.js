/* ============================================================
   CODEACADEMY_GAME — Main Application Logic
   State management, routing, progress, XP, Export/Import
   ============================================================ */

class CodeAcademyApp {
  constructor() {
    this.currentRoute = null;
    this.currentLevel = null;
    this.editor       = null;
    this.hintUsed     = false;
    this.attempts     = 0;
    this._outputTimer = null;
    this.state        = this._loadState();
    try {
      this._init();
    } catch (e) {
      console.error('[CodeAcademy] Init error:', e);
    }
  }

  /* ================================================================
     INITIALIZATION
  ================================================================ */

  _init() {
    this.editor = new CodeEditor();
    this.editor.onCodeChange = (code) => this._onEditorChange(code);
    this.layoutMode = localStorage.getItem('codeacademy_layout_mode') || 'side';
    this._initParticles();
    this._initExportImport();
    this._updateDashboard();
    this._showScreen('dashboard');
    this._createTaskFile(); // task tracking for current session
  }

  /* ================================================================
     STATE MANAGEMENT
  ================================================================ */

  _loadState() {
    try {
      const saved = localStorage.getItem('codeacademy_v1_state');
      if (saved) return JSON.parse(saved);
    } catch (e) { /* corrupted, start fresh */ }
    return this._defaultState();
  }

  _defaultState() {
    return {
      version: '1.0',
      totalXP: 0,
      completedLevels: {} // { 'r1l1': { stars: 3, xp: 50, completedAt: 1234567890 } }
    };
  }

  _saveState() {
    localStorage.setItem('codeacademy_v1_state', JSON.stringify(this.state));
  }

  isCompleted(levelId) {
    return !!this.state.completedLevels[levelId];
  }

  getStars(levelId) {
    return (this.state.completedLevels[levelId] || {}).stars || 0;
  }

  _routeCompletedCount(routeNum) {
    let count = 0;
    for (let i = 1; i <= 15; i++) {
      if (this.isCompleted(`r${routeNum}l${i}`)) count++;
    }
    return count;
  }

  /* ================================================================
     EXPORT / IMPORT
  ================================================================ */

  _initExportImport() {
    document.getElementById('btn-export').addEventListener('click', () => this._exportProgress());
    document.getElementById('btn-import').addEventListener('click', () => {
      document.getElementById('import-file-input').click();
    });
    document.getElementById('import-file-input').addEventListener('change', (e) => {
      if (e.target.files[0]) this._importProgress(e.target.files[0]);
      e.target.value = '';
    });
  }

  _exportProgress() {
    const payload = {
      appName: 'CodeAcademy_Game',
      exportedAt: new Date().toISOString(),
      ...this.state
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    const date = new Date().toLocaleDateString('es-MX').replace(/\//g, '-');
    a.href     = url;
    a.download = `codeacademy_progreso_${date}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this._toast('💾 Progreso exportado exitosamente!', 'success');
  }

  _importProgress(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (!data.completedLevels) throw new Error('Formato inválido');
        this.state = {
          version: data.version || '1.0',
          totalXP: Number(data.totalXP) || 0,
          completedLevels: data.completedLevels || {}
        };
        this._saveState();
        this._updateDashboard();
        this._toast('📂 Progreso importado exitosamente!', 'success');
      } catch (err) {
        this._toast('❌ Archivo inválido o corrupto', 'error');
      }
    };
    reader.readAsText(file);
  }

  /* ================================================================
     SCREEN NAVIGATION
  ================================================================ */

  _showScreen(name) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(`screen-${name}`);
    if (screen) {
      screen.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToDashboard() {
    this.currentRoute = null;
    this.currentLevel = null;
    this._updateDashboard();
    this._showScreen('dashboard');
  }

  goToRoute(routeNum) {
    if (typeof LEVELS_DATA === 'undefined') {
      this._toast('⚠️ Error de carga: levels.js no disponible. Recarga la página.', 'error');
      console.error('[CodeAcademy] LEVELS_DATA is undefined — check levels.js for syntax errors');
      return;
    }
    this.currentRoute = routeNum;
    this._renderRoute(routeNum);
    this._showScreen('route');
  }

  backToRoute() {
    document.getElementById('level-complete-overlay').classList.add('hidden');
    if (this.currentRoute) {
      this.goToRoute(this.currentRoute);
    } else {
      this.goToDashboard();
    }
  }

  goToLevel(routeNum, levelNum) {
    const routeKey = `route${routeNum}`;
    const levels   = LEVELS_DATA[routeKey];
    if (!levels) return;
    const level = levels.find(l => l.number === levelNum);
    if (!level) return;

    // Check lock
    if (levelNum > 1 && !this.isCompleted(`r${routeNum}l${levelNum - 1}`)) {
      this._toast('🔒 Completa el nivel anterior primero', 'info');
      return;
    }

    this.currentLevel = level;
    this.hintUsed     = false;
    this.attempts     = 0;
    this._renderLevel(level);
    this._showScreen('level');
  }

  nextLevel() {
    if (!this.currentLevel) return;
    const next = this.currentLevel.number + 1;
    document.getElementById('level-complete-overlay').classList.add('hidden');
    if (next <= 15) {
      this.goToLevel(this.currentLevel.route, next);
    } else {
      this._toast('🏆 ¡Ruta completada! Eres un campeón!', 'success');
      this.backToRoute();
    }
  }

  reviewLevel() {
    document.getElementById('level-complete-overlay').classList.add('hidden');
    this.switchTab('theory');
    this._toast('📖 Modo repaso: Revisa la teoría y tu código resuelto', 'info');
  }

  setLayoutMode(mode) {
    this.layoutMode = mode;
    try {
      localStorage.setItem('codeacademy_layout_mode', mode);
    } catch (e) {}

    const split = document.getElementById('workspace-split');
    if (split) {
      split.classList.remove('layout-side', 'layout-stacked', 'output-maximized');
      split.classList.add(`layout-${mode}`);
    }

    const btnSide = document.getElementById('btn-layout-side');
    const btnStacked = document.getElementById('btn-layout-stacked');
    if (btnSide) btnSide.classList.toggle('active', mode === 'side');
    if (btnStacked) btnStacked.classList.toggle('active', mode === 'stacked');

    const maxBtn = document.getElementById('btn-maximize-output');
    if (maxBtn) maxBtn.innerHTML = '&#x26F6; Maximizar';

    if (this.editor) {
      setTimeout(() => {
        this.editor._syncScroll();
        this.editor._updateLineNumbers();
      }, 60);
    }
  }

  toggleMaximizeOutput() {
    const split = document.getElementById('workspace-split');
    const maxBtn = document.getElementById('btn-maximize-output');
    if (!split) return;

    const isMax = split.classList.contains('output-maximized');
    if (isMax) {
      split.classList.remove('output-maximized');
      split.classList.add(`layout-${this.layoutMode || 'side'}`);
      if (maxBtn) maxBtn.innerHTML = '&#x26F6; Maximizar';
    } else {
      split.classList.remove('layout-side', 'layout-stacked');
      split.classList.add('output-maximized');
      if (maxBtn) maxBtn.innerHTML = '&#x21F3; Restaurar';
    }
  }

  switchTab(tab) {
    const isTheory = tab === 'theory';
    document.getElementById('content-theory').classList.toggle('hidden', !isTheory);
    document.getElementById('content-challenge').classList.toggle('hidden', isTheory);
    document.getElementById('tab-theory').classList.toggle('active', isTheory);
    document.getElementById('tab-challenge').classList.toggle('active', !isTheory);
  }

  showHint(manual = true) {
    if (!this.currentLevel) return;
    if (manual) {
      this.hintUsed = true;
    }
    document.getElementById('hint-content').innerHTML = this.currentLevel.hint;
    document.getElementById('hint-card').classList.remove('hidden');
  }

  resetCode() {
    if (!this.currentLevel) return;
    this.editor.setValue(this.currentLevel.starterCode);
    this._updateOutputPanel(this.currentLevel.starterCode);
    this._hideResult();
    this._toast('🔄 Código reseteado', 'info');
  }

  /* ================================================================
     DASHBOARD RENDERING
  ================================================================ */

  _updateDashboard() {
    const completed  = Object.keys(this.state.completedLevels).length;
    const totalStars = Object.values(this.state.completedLevels)
                             .reduce((s, l) => s + (l.stars || 0), 0);

    this._setText('stat-completed', completed);
    this._setText('stat-xp',        this.state.totalXP);
    this._setText('stat-stars',     totalStars);
    this._setText('global-xp-text', `${this.state.totalXP} XP`);

    const xpPct = Math.min(((this.state.totalXP % 1000) / 1000) * 100, 100);
    document.getElementById('global-xp-bar').style.width = xpPct + '%';

    [1, 2, 3].forEach(r => {
      const done = this._routeCompletedCount(r);
      const pct  = (done / 15) * 100;
      document.getElementById(`route${r}-progress`).style.width = pct + '%';
      document.getElementById(`route${r}-completed`).textContent = done;
    });
  }

  /* ================================================================
     ROUTE SCREEN RENDERING
  ================================================================ */

  _renderRoute(routeNum) {
    const NAMES = {
      1: 'Ruta 1: Web & UI',
      2: 'Ruta 2: Juegos & Lógica',
      3: 'Ruta 3: Servidores & Datos'
    };
    const done = this._routeCompletedCount(routeNum);
    this._setText('route-screen-title',    NAMES[routeNum]);
    this._setText('route-screen-progress', `${done}/15`);

    const grid   = document.getElementById('levels-grid');
    const levels = LEVELS_DATA[`route${routeNum}`];
    grid.innerHTML = '';

    levels.forEach((level) => {
      const isCompleted = this.isCompleted(level.id);
      const stars       = this.getStars(level.id);
      const isLocked    = level.number > 1 && !this.isCompleted(`r${routeNum}l${level.number - 1}`);

      const DIFF = { easy:'Fácil', medium:'Medio', hard:'Avanzado' };
      const CLS  = { easy:'diff-easy', medium:'diff-medium', hard:'diff-hard' };
      const EMO  = { easy:'🟢', medium:'🟡', hard:'🔴' };

      const card = document.createElement('article');
      card.className = `level-card${isLocked ? ' locked' : ''}${isCompleted ? ' completed' : ''}`;
      card.style.animationDelay = `${(level.number - 1) * 0.045}s`;

      card.innerHTML = `
        <div class="level-num">NIVEL ${level.number}</div>
        <div class="level-card-title">${level.title}</div>
        <div class="level-card-lang">${level.language}</div>
        <span class="level-card-difficulty ${CLS[level.difficulty]}">${EMO[level.difficulty]} ${DIFF[level.difficulty]}</span>
        <div class="level-card-xp">+${level.xp} XP</div>
        ${isCompleted ? `<div class="level-card-stars">${'⭐'.repeat(stars)}${'☆'.repeat(3-stars)}</div>` : ''}
      `;

      if (!isLocked) {
        card.addEventListener('click', () => this.goToLevel(routeNum, level.number));
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') this.goToLevel(routeNum, level.number);
        });
      }

      grid.appendChild(card);
    });
  }

  /* ================================================================
     LEVEL SCREEN RENDERING
  ================================================================ */

  _renderLevel(level) {
    const DIFF_LABEL = { easy:'Fácil', medium:'Medio', hard:'Avanzado' };
    const DIFF_CLASS = { easy:'diff-easy', medium:'diff-medium', hard:'diff-hard' };
    const ROUTE_BTN  = { 1:'btn-route-1', 2:'btn-route-2', 3:'btn-route-3' };
    const ROUTE_NAME = { 1:'Web & UI', 2:'Juegos & Lógica', 3:'Servidores' };

    this._setText('level-badge',  `Nivel ${level.number}`);
    this._setText('level-title',   level.title);
    this._setText('level-xp',     `+${level.xp} XP`);
    this._setText('editor-lang-badge', level.language);

    const diffEl  = document.getElementById('level-difficulty');
    diffEl.textContent = DIFF_LABEL[level.difficulty];
    diffEl.className   = `level-difficulty level-card-difficulty ${DIFF_CLASS[level.difficulty]}`;

    document.getElementById('content-theory').innerHTML    = level.theory;
    document.getElementById('content-challenge').innerHTML  = level.challenge;
    document.getElementById('btn-back-to-route').innerHTML  = `&#x2190; ${ROUTE_NAME[level.route]}`;

    document.getElementById('btn-next-level').className =
      `btn btn-route ${ROUTE_BTN[level.route]}`;

    this.editor.setLanguage(level.editorLang || 'bash');
    this.setLayoutMode(this.layoutMode || 'side');
    this._initOutputPanel(level);
    this.editor.setValue(level.starterCode);

    this._hideResult();
    document.getElementById('hint-card').classList.add('hidden');
    this.switchTab('theory');
    this.editor.focus();
  }

  /* ================================================================
     CODE VALIDATION & DYNAMIC STARS
  ================================================================ */

  validateCode() {
    if (!this.currentLevel) return;

    const rawCode = this.editor.getValue();
    const code = rawCode.trim();
    const starter = (this.currentLevel.starterCode || '').trim();

    this._updateOutputPanel(rawCode);
    this.attempts++;

    // 1. Código por defecto (vacío o sin cambios): Recibe 0 estrellas pero puede avanzar
    const isUnmodified = !code ||
      code === starter ||
      code.replace(/\r\n/g, '\n') === starter.replace(/\r\n/g, '\n');

    if (isUnmodified) {
      const msg = 'Código inicial sin resolver: Nivel registrado con 0 estrellas. ¡Puedes avanzar o repasar para ganar estrellas!';
      this._showResult('warning', '⚠️', msg);
      this._onLevelComplete(false, 'Enviaste el código sin cambios respecto a la plantilla inicial.', 0);
      return;
    }

    let result;
    try {
      result = this.currentLevel.validate(code);
    } catch (err) {
      result = { success: false, message: 'Se detectó una inconsistencia de sintaxis o estructura.' };
    }

    if (result.success) {
      // Código correcto y completo: Debe otorgar 3 estrellas obligatoriamente
      const stars = 3;
      this._showResult('success', '✅', result.message);
      this._onLevelComplete(true, result.message, stars);
    } else {
      // Código incompleto o con errores (pero avanzado): Debe otorgar 1 o 2 estrellas
      let stars = 2;
      if (this.attempts > 1 || this.hintUsed) {
        stars = 1;
      }
      this._showResult('warning', '⚠️', `¡Nivel superado con observaciones! ${result.message}`);
      this._onLevelComplete(false, result.message, stars);
    }
  }

  _onLevelComplete(isPerfect = true, feedbackMessage = '', currentStars = 3) {
    const level = this.currentLevel;
    const existing = this.state.completedLevels[level.id];
    const prevStars = existing ? (existing.stars !== undefined ? existing.stars : 0) : -1;
    const prevXP    = existing ? (existing.xp || 0) : 0;

    currentStars = Math.max(0, Math.min(3, currentStars));

    // Guardar y actualizar siempre el récord histórico más alto en localStorage
    const bestStars = existing ? Math.max(prevStars, currentStars) : currentStars;
    const maxLevelXP = Math.round(level.xp * (bestStars / 3));

    let xpEarned = 0;
    let isNewBest = false;

    if (!existing) {
      // Primera vez que completa o registra el nivel
      xpEarned = maxLevelXP;
      this.state.totalXP += xpEarned;
      this.state.completedLevels[level.id] = {
        stars: bestStars,
        xp: maxLevelXP,
        completedAt: Date.now()
      };
      this._saveState();
      this._updateDashboard();
      if (xpEarned > 0) {
        this._spawnXPPopup(xpEarned);
      }
    } else if (currentStars > prevStars) {
      // Superó su récord anterior al repetir el nivel (ej: de 0 o 1 o 2 a 3 estrellas)
      isNewBest = true;
      xpEarned = Math.max(0, maxLevelXP - prevXP);
      this.state.totalXP += xpEarned;
      this.state.completedLevels[level.id] = {
        stars: bestStars,
        xp: maxLevelXP,
        completedAt: Date.now()
      };
      this._saveState();
      this._updateDashboard();
      if (xpEarned > 0) {
        this._spawnXPPopup(xpEarned);
      }
      this._toast('🌟 ¡Nuevo récord de estrellas conseguido!', 'success');
    }

    setTimeout(() => this._showCompleteOverlay(bestStars, xpEarned, isNewBest, !!existing, isPerfect, feedbackMessage, currentStars), 700);
  }

  _showCompleteOverlay(bestStars, xpEarned, isNewBest = false, wasAlreadyCompleted = false, isPerfect = true, feedbackMessage = '', currentStars = 0) {
    // 1. Mostrar ÚNICAMENTE las estrellas del intento actual en el modal inmediato
    const starsHtml = Array.from({ length: 3 }, (_, i) =>
      `<span class="star-anim" style="animation-delay:${0.1 + i * 0.17}s">${i < currentStars ? '⭐' : '☆'}</span>`
    ).join('');

    document.getElementById('stars-display').innerHTML = starsHtml;

    // Subtítulo con desglose explícito: Intento actual vs Récord histórico
    const subtextEl = document.getElementById('stars-subtext');
    if (subtextEl) {
      if (wasAlreadyCompleted && bestStars > currentStars) {
        subtextEl.innerHTML = `Intento actual: <strong>${currentStars} ${currentStars === 1 ? 'estrella' : 'estrellas'}</strong> &bull; Récord guardado: <strong>${bestStars} ⭐</strong>`;
      } else if (isNewBest) {
        subtextEl.innerHTML = `Intento actual: <strong>${currentStars} ${currentStars === 1 ? 'estrella' : 'estrellas'}</strong> &bull; <span style="color:var(--green);font-weight:700;">🌟 ¡Nuevo récord!</span>`;
      } else {
        subtextEl.innerHTML = `Intento actual: <strong>${currentStars} ${currentStars === 1 ? 'estrella' : 'estrellas'}</strong>`;
      }
    }

    const titleEl = document.getElementById('complete-title');
    if (titleEl) {
      if (currentStars === 0) {
        titleEl.textContent = '¡Nivel Registrado (0 Estrellas)!';
      } else if (currentStars === 3) {
        titleEl.textContent = '¡Nivel Completado!';
      } else {
        titleEl.textContent = `¡Nivel Superado (${currentStars} ${currentStars === 1 ? 'Estrella' : 'Estrellas'})!`;
      }
    }

    const animEl = document.getElementById('complete-animation');
    if (animEl) {
      if (currentStars === 0) {
        animEl.textContent = '📝';
      } else if (currentStars === 3) {
        animEl.textContent = '🎉';
      } else {
        animEl.textContent = '✨';
      }
    }

    const feedbackEl = document.getElementById('complete-feedback');
    if (feedbackEl) {
      if (currentStars === 0) {
        let text = `💡 <strong>Código sin cambios:</strong> Avanzas al siguiente nivel, pero obtienes <strong>0 estrellas</strong> en este intento porque no resolviste el reto.`;
        if (wasAlreadyCompleted && bestStars > 0) {
          text += `<br><small style="opacity:0.85;">Tu récord anterior de ${bestStars} ⭐ se mantiene a salvo en tu mapa de niveles.</small>`;
        } else {
          text += `<br><small style="opacity:0.85;">Pulsa 'Repasar Nivel' cuando quieras resolverlo y conseguir tus 3 estrellas.</small>`;
        }
        feedbackEl.innerHTML = text;
        feedbackEl.classList.remove('hidden');
      } else if (currentStars < 3 && feedbackMessage) {
        let text = `💡 <strong>Observación constructiva:</strong> ${this._escapeHTML(feedbackMessage)}`;
        if (wasAlreadyCompleted && bestStars > currentStars) {
          text += `<br><small style="opacity:0.85;">Tu récord guardado de ${bestStars} ⭐ se mantiene intacto.</small>`;
        } else {
          text += `<br><small style="opacity:0.85;">Puedes usar 'Repasar Nivel' para perfeccionarlo y ganar 3 estrellas.</small>`;
        }
        feedbackEl.innerHTML = text;
        feedbackEl.classList.remove('hidden');
      } else {
        feedbackEl.classList.add('hidden');
      }
    }

    let xpText = '';
    if (xpEarned > 0) {
      xpText = `+${xpEarned} XP`;
    } else if (wasAlreadyCompleted) {
      xpText = `Récord mantenido (${bestStars} ⭐)`;
    } else {
      xpText = '+0 XP';
    }

    document.getElementById('xp-earned').textContent = xpText;
    document.getElementById('level-complete-overlay').classList.remove('hidden');

    if (this.currentLevel.number >= 15) {
      document.getElementById('btn-next-level').textContent = '🏆 Completar Ruta';
    } else {
      document.getElementById('btn-next-level').textContent = 'Siguiente Nivel →';
    }
  }

  _showResult(type, icon, message) {
    const panel = document.getElementById('result-panel');
    panel.className = `result-panel ${type}`;
    panel.classList.remove('hidden');
    document.getElementById('result-icon').textContent    = icon;
    document.getElementById('result-message').textContent = message;
  }

  _hideResult() {
    document.getElementById('result-panel').classList.add('hidden');
  }

  /* ================================================================
     XP POPUP
  ================================================================ */

  _spawnXPPopup(amount) {
    const el   = document.createElement('div');
    el.className = 'xp-popup';
    el.textContent = `+${amount} XP`;
    el.style.left  = `${30 + Math.random() * 40}%`;
    el.style.top   = `${40 + Math.random() * 20}%`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1300);
  }

  /* ================================================================
     TOAST NOTIFICATIONS
  ================================================================ */

  _toast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className   = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = 'toastOut 0.3s ease forwards';
      setTimeout(() => toast.remove(), 320);
    }, 3200);
  }

  /* ================================================================
     PARTICLE SYSTEM
  ================================================================ */

  _initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const particles = [];
    const COLORS = ['#00d4ff', '#7c3aed', '#10b981', '#a855f7', '#00a8cc'];
    const COUNT   = 75;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x     = Math.random() * canvas.width;
        this.y     = Math.random() * canvas.height;
        this.vx    = (Math.random() - 0.5) * 0.45;
        this.vy    = (Math.random() - 0.5) * 0.45;
        this.size  = Math.random() * 1.6 + 0.5;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.alpha = Math.random() * 0.45 + 0.1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width)  this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height)  this.vy *= -1;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle   = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur  = 8;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < COUNT; i++) particles.push(new Particle());

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 115) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 115) * 0.08;
            ctx.strokeStyle = particles[i].color;
            ctx.lineWidth   = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      requestAnimationFrame(animate);
    };
    animate();
  }

  /* ================================================================
     REAL-TIME VISUAL OUTPUT PANEL
  ================================================================ */

  _initOutputPanel(level) {
    const outputPanel = document.getElementById('output-panel');
    if (!outputPanel) return;

    outputPanel.classList.remove('hidden');

    ['output-section-web', 'output-section-games', 'output-section-terminal', 'output-section-sql'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add('hidden');
    });

    const headingEl = document.getElementById('output-panel-heading');
    const badgeEl   = document.getElementById('output-badge');
    const clearBtn  = document.getElementById('btn-clear-console');

    const route = level.route;
    const lang  = level.editorLang || '';

    if (route === 1) {
      if (headingEl) headingEl.textContent = '🌐 Vista Previa en Vivo';
      if (badgeEl)   badgeEl.textContent   = 'HTML / CSS';
      if (clearBtn)  clearBtn.style.display = 'none';
      const webSec = document.getElementById('output-section-web');
      if (webSec) webSec.classList.remove('hidden');
    } else if (route === 2) {
      if (headingEl) headingEl.textContent = '💻 Consola de Salida';
      if (badgeEl)   badgeEl.textContent   = `${level.language} Runtime`;
      if (clearBtn)  clearBtn.style.display = 'inline-flex';
      const gameSec = document.getElementById('output-section-games');
      if (gameSec) gameSec.classList.remove('hidden');

      const cmdEl = document.getElementById('games-console-cmd');
      if (cmdEl) {
        if (lang === 'python') cmdEl.textContent = 'python3 main.py';
        else if (lang === 'csharp') cmdEl.textContent = 'dotnet run';
        else if (lang === 'cpp') cmdEl.textContent = 'g++ -O3 main.cpp && ./game';
        else if (lang === 'lua') cmdEl.textContent = 'lua main.lua';
        else cmdEl.textContent = 'run';
      }
    } else if (route === 3) {
      if (lang === 'sql') {
        if (headingEl) headingEl.textContent = '📊 Resultados de Consulta SQL';
        if (badgeEl)   badgeEl.textContent   = 'PostgreSQL 16';
        if (clearBtn)  clearBtn.style.display = 'none';
        const sqlSec = document.getElementById('output-section-sql');
        if (sqlSec) sqlSec.classList.remove('hidden');
      } else {
        if (headingEl) headingEl.textContent = '🖥️ Terminal Bash Interactiva';
        if (badgeEl)   badgeEl.textContent   = 'bash 5.2';
        if (clearBtn)  clearBtn.style.display = 'inline-flex';
        const termSec = document.getElementById('output-section-terminal');
        if (termSec) termSec.classList.remove('hidden');
      }
    }

    this._updateOutputPanel(level.starterCode);
  }

  _onEditorChange(code) {
    if (this._outputTimer) clearTimeout(this._outputTimer);
    this._outputTimer = setTimeout(() => {
      this._updateOutputPanel(code);
    }, 200);
  }

  _updateOutputPanel(code) {
    if (!this.currentLevel) return;
    const route = this.currentLevel.route;
    const lang  = this.currentLevel.editorLang || '';

    if (route === 1) {
      this._updateWebPreview(code, this.currentLevel);
    } else if (route === 2) {
      this._updateGamesConsole(code, this.currentLevel);
    } else if (route === 3) {
      if (lang === 'sql') {
        this._updateSqlOutput(code, this.currentLevel);
      } else {
        this._updateTerminalOutput(code, this.currentLevel);
      }
    }
  }

  refreshOutput() {
    if (!this.editor) return;
    this._updateOutputPanel(this.editor.getValue());
    this._toast('⚡ Resultado actualizado', 'info');
  }

  clearConsole() {
    if (!this.currentLevel) return;
    if (this.currentLevel.route === 2) {
      const out = document.getElementById('games-console-output');
      if (out) out.innerHTML = '<span style="color:var(--text-muted);font-style:italic;">(Consola limpia)</span>';
    } else if (this.currentLevel.route === 3 && this.currentLevel.editorLang !== 'sql') {
      const body = document.getElementById('linux-terminal-body');
      if (body) body.innerHTML = '<div><span class="term-prompt">user@codeacademy:~$</span> <span class="term-cmd">clear</span></div>';
    }
  }

  _updateWebPreview(code, level) {
    const iframe = document.getElementById('web-preview-iframe');
    if (!iframe) return;

    let html = '';
    const lang = level.editorLang;

    if (lang === 'html') {
      if (/<!DOCTYPE|<html/i.test(code)) {
        html = code;
      } else {
        html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      padding: 16px;
      margin: 0;
      color: #1e293b;
      background: #ffffff;
      line-height: 1.5;
    }
  </style>
</head>
<body>
${code}
</body>
</html>`;
      }
    } else if (lang === 'css') {
      html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      padding: 16px;
      margin: 0;
      background: #f8fafc;
      color: #1e293b;
    }
    /* Estilos del usuario */
    ${code}
  </style>
</head>
<body>
  <div class="card container demo-box box">
    <h1 class="title heading">Encabezado Demo</h1>
    <p class="description text">Este texto de muestra refleja en tiempo real tus clases, colores, bordes y propiedades CSS.</p>
    <button class="btn button primary">Botón Interactivo</button>
  </div>
</body>
</html>`;
    } else {
      // TypeScript / JavaScript
      html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; padding: 12px; background: #fff; color: #111; font-size: 13px; }
    #log { border-top: 1px solid #ddd; margin-top: 10px; padding-top: 8px; }
  </style>
</head>
<body>
  <div id="app"></div>
  <div id="log"></div>
  <script>
    const logEl = document.getElementById('log');
    const orig = console.log;
    console.log = function(...args) {
      orig.apply(console, args);
      const d = document.createElement('div');
      d.textContent = '▶ ' + args.join(' ');
      logEl.appendChild(d);
    };
    try {
      ${code.replace(/:\s*[A-Z][\w<>|&[\]]*/g, '')}
    } catch(e) {
      console.log('Error: ' + e.message);
    }
  </script>
</body>
</html>`;
    }

    iframe.srcdoc = html;
  }

  _updateGamesConsole(code, level) {
    const outEl = document.getElementById('games-console-output');
    if (!outEl) return;

    const outputs = this._simulateGameOutput(code, level.editorLang);
    if (outputs.length === 0) {
      outEl.innerHTML = '<span style="color: var(--text-muted); font-style: italic;">Esperando instrucciones print() / Console.WriteLine()...</span>';
    } else {
      outEl.textContent = outputs.join('\n');
    }
  }

  _simulateGameOutput(code, lang) {
    const lines = code.split('\n');
    const outputs = [];
    const vars = {};

    for (let line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith('--')) continue;

      const assignMatch = trimmed.match(/^(?:let|const|var|int|float|double|string|auto\s+)?([a-zA-Z_]\w*)\s*=\s*(.+?);?$/);
      if (assignMatch && !trimmed.startsWith('if') && !trimmed.startsWith('while') && !trimmed.startsWith('for') && !trimmed.startsWith('return')) {
        const varName = assignMatch[1];
        let valExpr = assignMatch[2].trim();
        if (/^["'].*["']$/.test(valExpr)) {
          vars[varName] = valExpr.slice(1, -1);
        } else if (/^\d+(?:\.\d+)?$/.test(valExpr)) {
          vars[varName] = Number(valExpr);
        } else if (valExpr === 'True' || valExpr === 'true') {
          vars[varName] = true;
        } else if (valExpr === 'False' || valExpr === 'false') {
          vars[varName] = false;
        } else {
          vars[varName] = valExpr;
        }
      }

      let printArg = null;
      const pyMatch = trimmed.match(/^print\s*\((.+)\)$/);
      const csMatch = trimmed.match(/^Console\.WriteLine\s*\((.+)\);?$/);
      const cppMatch = trimmed.match(/^(?:std::)?cout\s*<<\s*(.+?)(?:\s*<<\s*(?:std::)?endl)?\s*;?$/);
      const jsMatch = trimmed.match(/^console\.log\s*\((.+)\);?$/);

      if (pyMatch) printArg = pyMatch[1];
      else if (csMatch) printArg = csMatch[1];
      else if (cppMatch) printArg = cppMatch[1];
      else if (jsMatch) printArg = jsMatch[1];

      if (printArg !== null) {
        let outStr = printArg.trim();
        if (/^f["']/.test(outStr)) {
          outStr = outStr.replace(/^f["']|["']$/g, '');
          outStr = outStr.replace(/\{([a-zA-Z_]\w*)\}/g, (_, k) => vars[k] !== undefined ? vars[k] : `{${k}}`);
        } else if (/^["'].*["']$/.test(outStr)) {
          outStr = outStr.slice(1, -1);
        } else if (vars[outStr] !== undefined) {
          outStr = vars[outStr];
        } else {
          outStr = outStr.replace(/["']\s*\+\s*([a-zA-Z_]\w*)/g, (_, k) => (vars[k] !== undefined ? vars[k] : k));
          outStr = outStr.replace(/^["']|["']$/g, '');
        }
        outputs.push(String(outStr));
      }
    }

    return outputs;
  }

  _updateTerminalOutput(code, level) {
    const bodyEl = document.getElementById('linux-terminal-body');
    if (!bodyEl) return;

    const history = this._simulateBashOutput(code);
    if (history.length === 0) {
      bodyEl.innerHTML = '<div><span class="term-prompt">user@codeacademy:~$</span> <span class="term-cmd"># Escribe comandos en el editor...</span></div>';
      return;
    }

    let html = '';
    history.forEach(item => {
      html += `<div><span class="term-prompt">user@codeacademy:${item.dir}$</span> <span class="term-cmd">${this._escapeHTML(item.cmd)}</span></div>`;
      if (item.output) {
        html += `<div class="term-res">${this._escapeHTML(item.output)}</div>`;
      }
    });

    bodyEl.innerHTML = html;
    bodyEl.scrollTop = bodyEl.scrollHeight;
  }

  _simulateBashOutput(code) {
    const lines = code.split('\n');
    const terminalHistory = [];
    let currentDir = '~';

    const MOCK_FS = {
      '~': ['proyectos', 'notas.txt', 'script.sh', '.bashrc', '.config'],
      '/': ['bin', 'etc', 'home', 'var', 'usr', 'tmp', 'opt'],
      '/var/log': ['syslog', 'auth.log', 'nginx', 'dpkg.log'],
      '/home': ['usuario'],
      'proyectos': ['game', 'api', 'website']
    };

    for (let line of lines) {
      let trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;

      trimmed = trimmed.split('#')[0].trim();
      if (!trimmed) continue;

      const subCommands = trimmed.split(';').map(c => c.trim()).filter(Boolean);
      for (let sub of subCommands) {
        let output = '';
        if (sub === 'pwd') {
          output = currentDir === '~' ? '/home/usuario' : currentDir;
        } else if (sub.startsWith('cd')) {
          const target = sub.replace(/^cd\s*/, '').trim() || '~';
          if (target === '~' || target === '') currentDir = '~';
          else if (target === '..') currentDir = currentDir === '~' ? '/home' : '/';
          else if (target === '-') currentDir = '~';
          else currentDir = target;
          output = '';
        } else if (sub.startsWith('ls')) {
          const isLa = sub.includes('-l') || sub.includes('-a');
          const dirContent = MOCK_FS[currentDir] || ['archivo1.txt', 'archivo2.log', 'app.py'];
          if (isLa) {
            output = 'total ' + (dirContent.length * 4) + '\n' +
              'drwxr-xr-x 2 usuario usuario 4096 sep 20 10:00 .\n' +
              'drwxr-xr-x 4 usuario usuario 4096 sep 20 09:50 ..\n' +
              dirContent.map(f => `-rw-r--r-- 1 usuario usuario  ${f.length * 128} sep 20 10:15 ${f}`).join('\n');
          } else {
            output = dirContent.join('   ');
          }
        } else if (sub.startsWith('echo')) {
          let msg = sub.replace(/^echo\s+/, '');
          msg = msg.replace(/^["']|["']$/g, '');
          output = msg;
        } else if (sub.startsWith('mkdir')) {
          const dirName = sub.replace(/^mkdir\s+(-p\s+)?/, '').trim();
          output = `✓ Directorio '${dirName}' creado`;
        } else if (sub.startsWith('touch')) {
          const fileName = sub.replace(/^touch\s+/, '').trim();
          output = `✓ Archivo '${fileName}' creado`;
        } else if (sub.startsWith('chmod')) {
          output = '✓ Permisos actualizados';
        } else if (sub === 'whoami') {
          output = 'usuario';
        } else if (sub === 'uname -a' || sub === 'uname') {
          output = 'Linux codeacademy 6.8.0-generic x86_64 GNU/Linux';
        } else if (sub.startsWith('cat')) {
          output = 'Contenido del archivo simulado...';
        } else if (sub.startsWith('grep')) {
          output = 'línea coincidente encontrada en el archivo';
        } else {
          output = `Comando '${sub.split(' ')[0]}' ejecutado`;
        }

        terminalHistory.push({ cmd: sub, dir: currentDir, output });
      }
    }

    return terminalHistory;
  }

  _updateSqlOutput(code, level) {
    const container = document.getElementById('sql-table-container');
    const statusMsg = document.getElementById('sql-status-msg');
    if (!container) return;

    const res = this._queryMockSQL(code);
    if (res.error) {
      if (statusMsg) statusMsg.textContent = res.error;
      container.innerHTML = `<div style="color: var(--text-muted); padding: 0.8rem; font-family: var(--font-code); font-size: 0.82rem; font-style: italic;">${this._escapeHTML(res.error)}</div>`;
      return;
    }

    if (statusMsg) {
      statusMsg.textContent = `✓ ${res.rows.length} fila(s) retornada(s) (0.02s)`;
    }

    let tableHtml = '<table class="sql-table"><thead><tr>';
    res.cols.forEach(c => {
      tableHtml += `<th>${this._escapeHTML(c)}</th>`;
    });
    tableHtml += '</tr></thead><tbody>';

    if (res.rows.length === 0) {
      tableHtml += `<tr><td colspan="${res.cols.length}" style="text-align: center; color: var(--text-muted); font-style: italic;">Sin resultados que coincidan</td></tr>`;
    } else {
      res.rows.forEach(row => {
        tableHtml += '<tr>';
        row.forEach(val => {
          tableHtml += `<td>${this._escapeHTML(String(val))}</td>`;
        });
        tableHtml += '</tr>';
      });
    }
    tableHtml += '</tbody></table>';

    container.innerHTML = tableHtml;
  }

  _queryMockSQL(sql) {
    const MOCK_DB = {
      usuarios: [
        { id: 1, nombre: 'Ana Gómez', email: 'ana@tech.com', rol: 'admin', activo: true, edad: 28 },
        { id: 2, nombre: 'Carlos Ruiz', email: 'carlos@dev.io', rol: 'editor', activo: true, edad: 34 },
        { id: 3, nombre: 'Lucía Fernández', email: 'lucia@cloud.net', rol: 'user', activo: false, edad: 22 },
        { id: 4, nombre: 'Marcos Soto', email: 'marcos@corp.com', rol: 'admin', activo: true, edad: 41 },
        { id: 5, nombre: 'Elena Vega', email: 'elena@cyber.io', rol: 'user', activo: true, edad: 29 },
      ],
      servidores: [
        { id: 101, hostname: 'web-prod-01', ip: '192.168.1.10', cpu_pct: 45, ram_pct: 72, estado: 'online' },
        { id: 102, hostname: 'web-prod-02', ip: '192.168.1.11', cpu_pct: 88, ram_pct: 91, estado: 'alert' },
        { id: 103, hostname: 'db-master', ip: '192.168.2.5', cpu_pct: 60, ram_pct: 85, estado: 'online' },
        { id: 104, hostname: 'backup-01', ip: '192.168.2.20', cpu_pct: 12, ram_pct: 35, estado: 'idle' },
        { id: 105, hostname: 'api-gateway', ip: '192.168.1.1', cpu_pct: 94, ram_pct: 96, estado: 'alert' },
      ],
      pedidos: [
        { id: 1001, cliente_id: 1, total: 159.99, estado: 'completado', fecha: '2024-09-10' },
        { id: 1002, cliente_id: 2, total: 49.50, estado: 'pendiente', fecha: '2024-09-12' },
        { id: 1003, cliente_id: 1, total: 320.00, estado: 'completado', fecha: '2024-09-15' },
        { id: 1004, cliente_id: 4, total: 850.25, estado: 'enviado', fecha: '2024-09-18' },
      ]
    };

    const clean = sql.replace(/--[^\n]*/g, '').trim();
    const selectMatch = clean.match(/SELECT\s+(.+?)\s+FROM\s+([a-zA-Z_]\w*)/i);
    if (!selectMatch) return { error: 'Escribe una consulta SELECT válida (ej: SELECT * FROM usuarios)' };

    const colsRaw = selectMatch[1].trim();
    const table = selectMatch[2].toLowerCase();
    const data = MOCK_DB[table] || MOCK_DB['usuarios'];

    let filtered = [...data];
    const whereMatch = clean.match(/WHERE\s+([a-zA-Z_]\w*)\s*(=|!=|>|<|>=|<=|LIKE|ILIKE)\s*('[^']*'|\d+|\w+)/i);
    if (whereMatch) {
      const field = whereMatch[1];
      const op = whereMatch[2].toUpperCase();
      let val = whereMatch[3].replace(/^['"]|['"]$/g, '');
      filtered = filtered.filter(row => {
        const rowVal = row[field];
        if (rowVal === undefined) return true;
        if (op === '=' || op === 'LIKE' || op === 'ILIKE') return String(rowVal).toLowerCase() === val.toLowerCase();
        if (op === '!=') return String(rowVal).toLowerCase() !== val.toLowerCase();
        if (op === '>') return Number(rowVal) > Number(val);
        if (op === '<') return Number(rowVal) < Number(val);
        if (op === '>=') return Number(rowVal) >= Number(val);
        if (op === '<=') return Number(rowVal) <= Number(val);
        return true;
      });
    }

    let cols;
    if (colsRaw === '*') {
      cols = Object.keys(filtered[0] || {});
    } else {
      cols = colsRaw.split(',').map(c => c.trim().split(/\s+AS\s+/i)[0].trim().replace(/^[a-z]+\./i, ''));
    }

    return { cols, rows: filtered.map(r => cols.map(c => r[c] !== undefined ? r[c] : 'NULL')) };
  }

  _escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ================================================================
     HELPERS
  ================================================================ */

  _setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  _createTaskFile() {
    // Session tracking (stored in state metadata only)
    if (!this.state._sessionStart) {
      this.state._sessionStart = Date.now();
    }
    this.state._lastActive = Date.now();
    this._saveState();
  }
}

/* ================================================================
   BOOTSTRAP — Start the App
   Use var (not const/let) so onclick="app.goToRoute()" in HTML
   can always access `app` from the global scope.
================================================================ */
var app;
try {
  app = new CodeAcademyApp();
} catch (e) {
  console.error('[CodeAcademy] Failed to create app:', e);
}

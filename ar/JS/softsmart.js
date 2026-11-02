$(function () {
  const $header = $('#header');
  const $menu = $('#menu');
  const navItems = $('.nav-links').clone().addClass('mobile-nav').hide();

  $menu.on('click', function () {
    const open = $menu.data('open') === true;
    $menu.data('open', !open).attr('aria-expanded', String(!open));
    if (!open) {
      navItems.css({display:'flex', position:'absolute', top:'76px', right:'16px', left:'16px', padding:'18px', 'flex-direction':'column', gap:'16px', background:'#fff', border:'1px solid rgba(70,40,130,.13)', 'border-radius':'18px', 'box-shadow':'0 18px 40px rgba(48,27,105,.12)', 'z-index':30});
      $header.append(navItems);
    } else navItems.remove();
  });
  $(document).on('click', '.mobile-nav a', function () { navItems.remove(); $menu.data('open', false).attr('aria-expanded', 'false'); });
  $(window).on('scroll', function () { $header.toggleClass('scrolled', window.scrollY > 12); });

  const canvas = document.getElementById('circuit');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const resize = () => { canvas.width = innerWidth * devicePixelRatio; canvas.height = canvas.parentElement.offsetHeight * devicePixelRatio; ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0); };
  const draw = () => {
    const w = innerWidth, h = canvas.parentElement.offsetHeight;
    ctx.clearRect(0,0,w,h); ctx.lineWidth = 1;
    for (let i=0;i<7;i++) {
      const x = w * (.1 + i*.13), y = h * (.23 + (i%3)*.18);
      ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x+55,y); ctx.lineTo(x+80,y+28); ctx.lineTo(x+145,y+28);
      ctx.strokeStyle = i%2 ? 'rgba(220,61,85,.18)' : 'rgba(96,70,216,.2)'; ctx.stroke();
      ctx.beginPath(); ctx.arc(x+145,y+28,3.5,0,Math.PI*2); ctx.fillStyle = i%3===0 ? '#f4b51f' : '#8a5cf6'; ctx.fill();
    }
    requestAnimationFrame(() => {});
  };
  resize(); draw(); addEventListener('resize', () => { resize(); draw(); }, {passive:true});
});

/* Persistent White / Dark mode */
(function () {
  const key = 'softsmart-theme';
  const body = document.body;
  const button = document.getElementById('theme-toggle');
  if (!button) return;
  const label = button.querySelector('.theme-label');
  const isArabic = document.documentElement.lang === 'ar';
  function apply(mode) {
    const dark = mode === 'dark';
    body.classList.toggle('dark-mode', dark);
    button.setAttribute('aria-pressed', String(dark));
    if (label) label.textContent = isArabic ? (dark ? 'الوضع الأبيض' : 'الوضع الداكن') : (dark ? 'White mode' : 'Dark mode');
    button.querySelector('.theme-icon').textContent = dark ? '☀' : '◐';
  }
  let mode = 'light';
  try { mode = localStorage.getItem(key) || 'light'; } catch (_) {}
  apply(mode);
  button.addEventListener('click', function () {
    const next = body.classList.contains('dark-mode') ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem(key, next); } catch (_) {}
  });
})();

(function () {
  const button = document.getElementById('back-to-top');
  if (!button) return;
  const toggle = () => button.classList.toggle('show', window.scrollY > 260);
  window.addEventListener('scroll', toggle, {passive:true}); toggle();
  button.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
})();

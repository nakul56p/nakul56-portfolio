// 1. Mobile menu
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

// 2. Light / dark theme (remembered in the browser)
const themeBtn = document.getElementById('themeBtn');
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  themeBtn.textContent = t === 'dark' ? '☀️' : '🌙';
  themeBtn.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  try { localStorage.setItem('theme', t); } catch (e) {}
}
let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
setTheme(saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
themeBtn.addEventListener('click', () =>
  setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

// 3. Greeting based on visitor choice
const messages = {
  recruiter: 'Welcome! Check my projects to see what I can build.',
  teacher: 'Hello! Thank you for reviewing my portfolio.',
  friend: 'Hey! Glad you stopped by.'
};
document.querySelectorAll('[data-greet]').forEach(b => b.addEventListener('click', () => {
  document.getElementById('greeting').textContent = messages[b.dataset.greet];
}));

// 4. Project filter
const filterBtns = document.querySelectorAll('[data-filter]');
filterBtns.forEach(btn => btn.addEventListener('click', () => {
  filterBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
  btn.classList.add('active');
  btn.setAttribute('aria-pressed', 'true');
  document.querySelectorAll('.card').forEach(card => {
    card.hidden = !(btn.dataset.filter === 'all' || card.dataset.cat === btn.dataset.filter);
  });
}));

// 5. Expand / collapse project details
document.querySelectorAll('.more-btn').forEach(btn => btn.addEventListener('click', () => {
  const panel = document.getElementById(btn.getAttribute('aria-controls'));
  const open = panel.hidden;
  panel.hidden = !open;
  btn.setAttribute('aria-expanded', open);
  btn.textContent = open ? 'Hide details' : 'Show details';
}));

// 6. Contact form validation (does not send anything)
const form = document.getElementById('form');
const checks = [
  { id: 'name', err: 'nameErr', test: v => v.trim().length >= 2, msg: 'Enter your name (at least 2 characters).' },
  { id: 'email', err: 'emailErr', test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: 'Enter a valid email, like name@example.com.' },
  { id: 'msg', err: 'msgErr', test: v => v.trim().length >= 10, msg: 'Write a message of at least 10 characters.' }
];
form.addEventListener('submit', e => {
  e.preventDefault();
  let firstBad = null;
  checks.forEach(c => {
    const field = document.getElementById(c.id);
    const ok = c.test(field.value);
    document.getElementById(c.err).textContent = ok ? '' : c.msg;
    field.setAttribute('aria-invalid', ok ? 'false' : 'true');
    if (!ok && !firstBad) firstBad = field;
  });
  const status = document.getElementById('status');
  if (firstBad) { firstBad.focus(); status.textContent = ''; return; }
  status.textContent = 'Thanks! Your details look good. (This demo form does not send messages. Please use the email link above.)';
  form.reset();
});

// 7. Back-to-top button + current section highlight
const topBtn = document.getElementById('topBtn');
topBtn.addEventListener('click', () => window.scrollTo({ top: 0 }));
const sections = [...document.querySelectorAll('main section')];
const links = [...nav.querySelectorAll('a')];
function onScroll() {
  topBtn.hidden = window.scrollY < 400;
  let current = sections[0].id;
  sections.forEach(s => { if (s.getBoundingClientRect().top <= 120) current = s.id; });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// 8. Footer year
document.getElementById('year').textContent = new Date().getFullYear();

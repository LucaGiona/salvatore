// ── Drawer ──
const backdrop = document.getElementById('drawer-backdrop');
const moduls = document.querySelectorAll('.modul');

function openDrawer(drawerId) {
  const drawer = document.getElementById(drawerId);
  if (!drawer) return;
  const isOpen = drawer.classList.contains('open');
  document.querySelectorAll('.drawer').forEach(d => d.classList.remove('open'));
  backdrop.classList.remove('open');
  if (!isOpen) {
    drawer.classList.add('open');
    backdrop.classList.add('open');
  }
}

// Klick auf Modul-Button → Drawer öffnen (alle Größen)
document.querySelectorAll('.modul-btn[data-drawer]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    openDrawer(btn.getAttribute('data-drawer'));
  });
});

// Klick aufs Modul selbst (z.B. auf den Pfeil) → Drawer öffnen
moduls.forEach(modul => {
  modul.addEventListener('click', () => {
    const btn = modul.querySelector('.modul-btn[data-drawer]');
    if (btn) openDrawer(btn.getAttribute('data-drawer'));
  });
});

// Drawer schliessen
document.querySelectorAll('.drawer-close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.drawer').classList.remove('open');
    backdrop.classList.remove('open');
  });
});

backdrop.addEventListener('click', () => {
  document.querySelectorAll('.drawer').forEach(d => d.classList.remove('open'));
  backdrop.classList.remove('open');
});

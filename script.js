// Accordion: nur aktiv auf Mobile (Touch)
const moduls = document.querySelectorAll('.modul');

function isMobile() {
  return window.innerWidth <= 768;
}

moduls.forEach(modul => {
  modul.addEventListener('click', (e) => {
    if (!isMobile()) return;
    e.stopPropagation(); // verhindert dass document-click sofort feuert
    moduls.forEach(m => m.classList.remove('active'));
    modul.classList.add('active');
  });
});

// Klick ausserhalb → alle zurücksetzen
document.addEventListener('click', () => {
  if (!isMobile()) return;
  moduls.forEach(m => m.classList.remove('active'));
});

// Bei Resize: Desktop → active-Klassen entfernen
window.addEventListener('resize', () => {
  if (!isMobile()) {
    moduls.forEach(m => m.classList.remove('active'));
  }
});

// ── Drawer ──
// ── Drawer ──
const backdrop = document.getElementById('drawer-backdrop');

document.querySelectorAll('.modul-btn[data-drawer]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const drawerId = btn.getAttribute('data-drawer');
    const drawer = document.getElementById(drawerId);
    const isOpen = drawer.classList.contains('open');

    // Alle Drawer schließen
    document.querySelectorAll('.drawer').forEach(d => d.classList.remove('open'));
    backdrop.classList.remove('open');

    // Diesen öffnen wenn er zu war
    if (!isOpen) {
      drawer.classList.add('open');
      backdrop.classList.add('open');
    }
  });
});

document.querySelectorAll('.drawer-close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.drawer').classList.remove('open');
    backdrop.classList.remove('open');
  });
});

// Backdrop-Klick schließt Modal
backdrop.addEventListener('click', () => {
  document.querySelectorAll('.drawer').forEach(d => d.classList.remove('open'));
  backdrop.classList.remove('open');
});

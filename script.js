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

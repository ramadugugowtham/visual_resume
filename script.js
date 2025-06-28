const header = document.getElementById('main-header');
const originalText = "Gowtham";
const revealedText = "Gowtham Ramadugu";

header.addEventListener('mouseenter', () => {
  header.textContent = revealedText;
  header.classList.add('revealed');
});

header.addEventListener('mouseleave', () => {
  header.textContent = originalText;
  header.classList.remove('revealed');
});

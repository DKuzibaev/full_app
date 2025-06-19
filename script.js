document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const modal = document.querySelector('.modal');
  const modalBackdrop = document.querySelector('.modal-backdrop');

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      modal.classList.toggle('open');
    });
  });

  modalBackdrop.addEventListener('click', () => {
    modal.classList.remove('open');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      modal.classList.remove('open');
    }
  });
});

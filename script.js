const cart = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');

cart.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (modal.style.display === 'none') {
      modal.style.display = 'block';
    } else {
      modal.style.display = 'none';
    }
  });
});

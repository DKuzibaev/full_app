const cards = document.querySelectorAll('.card');
// TODO: Проверяйте, найдены ли элементы .card, так как querySelectorAll вернет пустой NodeList, если их нет.

const modal = document.querySelector('.modal');
const button = document.querySelector('.btn');
const cartRow = document.querySelector('.row');
const title = document.getElementById('title');
const description = document.getElementById('description');
const modalBackdrop = document.querySelector('.modal-backdrop');

button.addEventListener('click', (e) => {
  e.preventDefault();

  const cartTitle = title.value.lenght !== 0 ? title.value : 'none';
  const cartDescription = description.value ?? 'ERROR';
  // TODO: Валидируйте значения title.value и description.value (например, не пустые).
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${cartTitle}</h3>
  `;
  // TODO: Новые карточки создаются, но на них не навешиваются обработчики событий для открытия модального окна.
  cartRow.appendChild(card);
  // TODO: Проверьте, успешно ли добавляется карточка в cartRow.
  const modalWindow = document.createElement('div');
  modalWindow.className = 'modal';
  modalWindow.innerHTML = `<h2>${cartTitle}</h2>
    <hr />
    <p>
      ${cartDescription}
    </p>
    <hr />
    <div>
      <input type="checkbox" id="done" />
      <label for="done">Learn</label>
    </div>`;
});

cards.forEach((card) => {
  card.addEventListener('click', () => {
    modal.classList.toggle('open');
    // TODO: Проверьте, правильно ли применяется класс .open и связанный с ним CSS-стиль.
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

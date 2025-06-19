const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');
const button = document.querySelector('.btn');
const cartRow = document.querySelector('.row');
const title = document.getElementById('title');
const description = document.getElementById('description');
const modalBackdrop = document.querySelector('.modal-backdrop');

function setupCardEventListeners(card) {
  card.addEventListener('click', () => {
    const titleText = card.querySelector('h3').textContent;
    const descText = card.dataset.description || 'Описание отсутствует';

    modal.innerHTML = `
      <h2>${titleText}</h2>
      <hr />
      <p>${descText}</p>
      <hr />
      <div>
        <input type="checkbox" id="done" />
        <label for="done">Learn</label>
      </div>
    `;
    modal.classList.add('open');
  });
}

// Обработчик для новых карточек
button.addEventListener('click', (e) => {
  e.preventDefault();

  const cartTitle = title.value.trim();
  const cartDescription = description.value.trim();

  if (!cartTitle) {
    alert('Введите заголовок!');
    return;
  }

  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.description = cartDescription; // Сохраняем описание
  card.innerHTML = `<h3>${cartTitle}</h3>`;

  cartRow.appendChild(card);
  setupCardEventListeners(card);

  // Очищаем форму
  title.value = '';
  description.value = '';
});

// Инициализация существующих карточек
cards.forEach((card) => {
  if (!card.dataset.description) {
    card.dataset.description = 'Описание отсутствует';
  }
  setupCardEventListeners(card);
});

// Закрытие модального окна
modalBackdrop.addEventListener('click', () => {
  modal.classList.remove('open');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    modal.classList.remove('open');
  }
});

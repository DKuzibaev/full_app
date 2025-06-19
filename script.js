const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');
const button = document.querySelector('.btn');
const cartRow = document.querySelector('.row');
const title = document.getElementById('title');
const description = document.getElementById('description');
const modalBackdrop = document.querySelector('.modal-backdrop');

function setupCardEventListeners(card, titleText, descText) {
  card.addEventListener('click', () => {
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

// Вешаем обработчики на существующие карточки
cards.forEach((card) => {
  setupCardEventListeners(
    card,
    card.querySelector('h3').textContent,
    'Описание отсутствует'
  );
});

// Добавление новой карточки
button.addEventListener('click', (e) => {
  e.preventDefault();

  const cartTitle = title.value.trim();
  const cartDescription = description.value.trim();

  if (!cartTitle || !cartDescription) {
    alert("Oops! You can't add something that doesn't exist.");
    return;
  }

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h3>${cartTitle}</h3>`;
  cartRow.appendChild(card);

  setupCardEventListeners(card, cartTitle, cartDescription);

  title.value = '';
  description.value = '';
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

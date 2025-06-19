const cards = document.querySelectorAll('.card');
// TODO: Проверяйте, найдены ли элементы .card, так как querySelectorAll вернет пустой NodeList, если их нет.

const modal = document.querySelector('.modal');
// TODO: Убедитесь, что элемент .modal существует в HTML, иначе будет null.

const form = document.querySelector('.form');
// TODO: Проверьте, существует ли форма в DOM, чтобы избежать ошибок.

const button = document.querySelector('.btn');
// TODO: Подтвердите, что кнопка .btn присутствует в HTML.

const cartRow = document.querySelector('.row');
// TODO: Убедитесь, что элемент .row существует для добавления новых карточек.

const title = document.getElementById('title');
// TODO: Проверьте, существует ли элемент с id="title" и имеет ли он значение.

const description = document.getElementById('description');
// TODO: Убедитесь, что элемент с id="description" присутствует.

const modalBackdrop = document.querySelector('.modal-backdrop');
// TODO: Подтвердите, что .modal-backdrop существует, иначе обработчик не сработает.

const progressValue = document.querySelector('.progress-value');
// TODO: Элемент не используется в коде. Уточните его назначение или удалите.

button.addEventListener('click', (e) => {
  e.preventDefault();
  // TODO: Проверяйте, что e.preventDefault() действительно необходимо для формы.
  const cartTitle = title.value;
  const cartDescription = description.value;
  // TODO: Валидируйте значения title.value и description.value (например, не пустые).
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${cartTitle}</h3>
  `;
  // TODO: Новые карточки создаются, но на них не навешиваются обработчики событий для открытия модального окна.
  cartRow.appendChild(card);
  // TODO: Проверьте, успешно ли добавляется карточка в cartRow.
  modal.querySelector('p').innerHTML = cartDescription;
  // TODO: Убедитесь, что внутри .modal есть элемент <p>, иначе будет ошибка.
  // TODO: После добавления карточки модальное окно не открывается автоматически. Возможно, нужно добавить modal.classList.add('open').
});

cards.forEach((card) => {
  card.addEventListener('click', () => {
    modal.classList.toggle('open');
    // TODO: Проверьте, правильно ли применяется класс .open и связанный с ним CSS-стиль.
  });
});
// TODO: Закрывающая скобка forEach отсутствует в правильной позиции, что вызывает синтаксическую ошибку.

modalBackdrop.addEventListener('click', () => {
  modal.classList.remove('open');
  // TODO: Убедитесь, что класс .open удаляется корректно и модальное окно скрывается.
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    modal.classList.remove('open');
    // TODO: Проверьте, что модальное окно закрывается при нажатии Escape.
  }
});

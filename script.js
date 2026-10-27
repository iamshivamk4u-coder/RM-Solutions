const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#contact-form');
const toast = document.querySelector('.toast');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  const phone = data.get('phone');
  const service = data.get('service');
  const message = `Hello RM Solutions, I am ${name}. I need help with ${service}. You can contact me on ${phone}.`;
  window.open(`https://wa.me/message/FUPKQZ435AMQG1?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  toast.classList.add('show');
  form.reset();
  window.setTimeout(() => toast.classList.remove('show'), 3800);
});

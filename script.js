document.addEventListener('DOMContentLoaded', () => {
  // Atualiza ano no rodapé
  document.getElementById('year').textContent = new Date().getFullYear();

  // Menu mobile
  const toggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const opened = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!opened));
      mobileNav.hidden = opened;
      toggle.textContent = opened ? '☰' : '✕';
    });
  }

  // Formulário de contato
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name')?.trim();
      const email = data.get('email')?.trim();
      const message = data.get('message')?.trim();

      if (!name || !email || !message) {
        status.textContent = 'Preencha todos os campos.';
        status.style.color = 'crimson';
        return;
      }

      status.textContent = 'Enviando...';
      status.style.color = '';

      setTimeout(() => {
        status.textContent = 'Mensagem enviada com sucesso! 🍩';
        status.style.color = 'green';
        form.reset();
      }, 900);
    });
  }
});

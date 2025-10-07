document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const storageKey = 'feedback-form-state';

  const savedData = localStorage.getItem(storageKey);
  if (savedData) {
    const formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }

  form.addEventListener('input', () => {
    const data = {
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };
    localStorage.setItem(storageKey, JSON.stringify(data));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!email || !message) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }

    console.log({ email, message });
    localStorage.removeItem(storageKey);
    form.reset();
  });
});
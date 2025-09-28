document.querySelector('.form').addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  const formData = {
    email,
    message,
    };
 
  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  form.reset();
}

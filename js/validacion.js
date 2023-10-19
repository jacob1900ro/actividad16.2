document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password1');
    const confirmPasswordInput = document.getElementById('password2');
    const checkbox = document.getElementById('terminos');
    const modalCheckbox = document.getElementById('modalTerminos').querySelector('.form-check-input');
    const modalText = document.getElementById('modalTerminos').querySelector('.form-check-label');
    const modalButton = document.querySelector('[data-bs-target="#modalTerminos"]');
    const inputs = [document.getElementById('nombre'), document.getElementById('apellido'), emailInput, passwordInput, confirmPasswordInput];
  
    form.addEventListener('submit', function (event) {
      let valid = true;
  
      inputs.forEach(function (input) {
        if (input.value.trim() === '') {
          input.style.borderColor = 'red';
          valid = false;
        } else {
          input.style.borderColor = '';
        }
      });
  
      if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailInput.style.borderColor = 'red';
        valid = false;
      }

      
  
      if (passwordInput.value.length < 6) {
        passwordInput.style.borderColor = 'red';
        valid = false;
      }
  
      if (passwordInput.value !== confirmPasswordInput.value && passwordInput.value !== '') {
        confirmPasswordInput.style.borderColor = 'red';
        valid = false;
      }
  
      if (!checkbox.checked) {
        modalCheckbox.style.borderColor = 'red';
        modalText.style.color = 'red';
        modalButton.style.borderColor = 'red';
        valid = false;
      }
  
      if (!valid) {
        event.preventDefault();
      }else{
        alert("bien");
      }
    });
  
    inputs.forEach(function (input) {
      input.addEventListener('input', function () {
        if (input.value.trim() !== '') {
          input.style.borderColor = '';
        }
      });
    });
  
    passwordInput.addEventListener('input', function () {
      if (passwordInput.value === confirmPasswordInput.value) {
        confirmPasswordInput.style.borderColor = '';
      }
    });
  
    checkbox.addEventListener('change', function () {
      modalCheckbox.style.borderColor = '';
      modalText.style.color = '';
      modalButton.style.borderColor = '';
    });
  });
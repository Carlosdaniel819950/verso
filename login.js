const email = document.getElementById('email');
const senha = document.getElementById('senha');
const entrar = document.getElementById('entrar');

function validarCampos() {
  if (email.value.trim() !== '' && senha.value.trim() !== '') {
    entrar.disabled = false;
  } else {
    entrar.disabled = true;
  }
}

email.addEventListener('input', validarCampos);
senha.addEventListener('input', validarCampos);

entrar.addEventListener('click', (e) => {
  if (entrar.disabled) {
    entrar.classList.add('shake');
    setTimeout(() => entrar.classList.remove('shake'), 300);
  } else {
    alert('Login enviado!');
    // Aqui você pode chamar o login do Firebase
  }
});
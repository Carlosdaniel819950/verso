// Importando as funções necessárias do Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBE8Em_AmKMn4xeg7TrvUVXsWBlaLVNWME",
  authDomain: "blog-web-128a5.firebaseapp.com",
  projectId: "blog-web-128a5",
  storageBucket: "blog-web-128a5.appspot.com",
  messagingSenderId: "341225800245",
  appId: "1:341225800245:web:f1e1b6b98493e73f79a77c",
  measurementId: "G-M88JMW8E42"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Código para validação e evento de clique no botão
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
    const emailValue = email.value.trim();
    const senhaValue = senha.value.trim();

    // Tente fazer o login com o Firebase
    signInWithEmailAndPassword(auth, emailValue, senhaValue)
      .then((userCredential) => {
        // Login bem-sucedido
        const user = userCredential.user;
        alert('Login bem-sucedido!');
        // Redirecionar para outra página ou fazer algo mais
      })
      .catch((error) => {
        // Erro no login
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Erro no login: ' + errorMessage);
      });
  }
});

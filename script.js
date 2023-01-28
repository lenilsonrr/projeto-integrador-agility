var loginIn;
var senhaIn;
function logar() {
    loginIn = document.getElementById('login').value;
    senhaIn = document.getElementById('senha').value;

    if (loginIn == 'adm' && senhaIn == 'adm') {
        sairTela();
        login.value = '';
        senhaIn.value = '';
    }else{
        alert('Login ou Senha errada')
        loginIn.value = "";
        senhaIn.value = "";
    }
}
var login;
var entrar;
var sair;
window.onload = function () {
    login = document.getElementById('Login');

    entrar = document.getElementById('btn');
    entrar.onclick = mostar;

    login.classList.add('escondido');

}

function mostar() {
    login.classList.remove('escondido')

}

 function sairTela() {
    login = document.getElementById('Login');
    login.classList.add('escondido')
    

}
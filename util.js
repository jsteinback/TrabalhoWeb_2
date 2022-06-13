function getCookie(pCookie) {
    var vetCookies = document.cookie.split(';');
    for (var i = 0; i < vetCookies.length; i++) {
        linhaCookie = vetCookies[i].trim();
        if (linhaCookie.indexOf(pCookie) == 0) {
            return linhaCookie.substring((pCookie.length+1),linhaCookie.length);
        }
    }
}

function setaCookie(pNome,pValor) {
    document.cookie = pNome+"="+pValor;
}

function login() {
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;
    if (login && password) {
        setaCookie('usuarioAutenticado', login);
        window.location = "paginaPrincipal.html";
    } else {
        alert('Informe todos os campos');
    }
}

function verificaLogin() {
    var login = document.getElementById('login').value;
    if (getCookie('usuarioAutenticado')) {
        document.getElementsByTagName('header')[0].innerHTML += '<a style="float: right;" href="cadastroUsuario.html"><img src="img/login.png"></a>';
    }
    var tema = getCookie('tema');
    if (tema == 'custom') {
        document.body.classList.add('custom');
    }
    document.getElementById('custom').checked = tema == 'custom';
    document.getElementById('normal').checked = tema != 'custom';
}

function gravarTema() {
    if (document.getElementById('custom').checked) {
        setaCookie('tema', 'custom');
    } else {
        setaCookie('tema', 'normal');
    }
    window.location.reload();
}
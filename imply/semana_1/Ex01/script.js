function abrePopup(){
    document.getElementById('popup').style.width = "100%";
}

function fechaPopup(){
    document.getElementById('popup').style.width = "0%";
}

function teste(){
    window.alert("Essa mensagem não deverá ser visível após o popup");
}

function getEmail(){
    let email = document.querySelector('#email').value;
    const regemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email != "" && regemail.test(email)){
        document.querySelector('#emailusuario').innerHTML = `O e-mail informado pelo usuário foi ${email}`;
    }
    else{
        window.alert("Erro: E-mail inválido!");
        document.querySelector('#emailusuario').innerHTML = ""
    }
}


//Trocar Cores
function btnRed(){
    document.querySelector(':root').style.setProperty('--cor-botao', 'rgb(216, 76, 33)');
}

function btnBlue(){
    document.querySelector(':root').style.setProperty('--cor-botao', 'rgb(35, 139, 187)');
}

function darkMode(){
    document.querySelector('body').style.background = 'rgb(80, 80, 80)';
    document.querySelector('body').style.color = 'rgb(230, 230, 230)';
    document.querySelector('.container').style.background = 'rgb(90,90,90)';
}
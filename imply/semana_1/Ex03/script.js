const mostraCidade = (endereco) => {
    if ((endereco.localidade) == undefined){
        alert("Erro: O CEP informado não possui uma localidade correspondente")
        return;
    }
    document.getElementById("overlay").style.visibility = "visible"; 
    let cidadevalor = endereco.localidade;
    document.querySelector('#cidade').innerHTML = `A cidade correspondente ao CEP informado é ${cidadevalor}.`;
}

function fechaPopup(){
    document.getElementById("overlay").style.visibility = "hidden";
}

const buscar = async() =>{
    var cep = document.querySelector('#cep').value;
    cep = cep.replace(/\D/g, ''); //remove letras do input
    const regcep = /^[0-9]{8}$/;

    if(regcep.test(cep)){
        const url = `http://viacep.com.br/ws/${cep}/json/`; //chamada da api
        // fetch(url).then(dados => dados.json().then(console.log));
        const dados = await fetch(url);
        const endereco = await dados.json();
        mostraCidade(endereco);
    }
    else{
        document.querySelector('#cidade').innerHTML = "";
        document.querySelector('#cep').value = "";
        document.getElementById('overlay').style.visibility = "hidden";
        alert("Erro: O formato do CEP informado é inválido!");
    }
}
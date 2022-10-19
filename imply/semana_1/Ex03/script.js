const mostraCidade = (endereco) => {
    let cidadevalor = endereco.localidade;
    // alert(cidadevalor);
    document.querySelector('#cidade').innerHTML = `A cidade do CEP informado é de ${cidadevalor}.`;
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
        alert("Erro: O CEP informado é inválido!");
    }
}
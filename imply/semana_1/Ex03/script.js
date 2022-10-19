const mostraCidade = (endereco) => {
    let cidadevalor = endereco.localidade;
    // alert(cidadevalor);
    document.querySelector('#cidade').innerHTML = `A cidade do CEP informado é de ${cidadevalor}.`;
}

const buscar = async() =>{
    const regcep = /^[0-9]{8}$/;
    var cep = document.querySelector('#cep').value;
    cep = cep.replace(/\D/g, ''); //remove letras do input

    if(regcep.test(cep)){
        const url = `http://viacep.com.br/ws/${cep}/json/`; //chamada da api
        // fetch(url).then(dados => dados.json().then(console.log));
        const dados = await fetch(url);
        const endereco = await dados.json();
        console.log(endereco);
        mostraCidade(endereco);
    }
    else{
        alert("Erro: O CEP informado é inválido!");
        document.querySelector('#cidade').innerHTML = null;
        let cepvalor = document.querySelector('#cep');
        cepvalor.value = "";
    }



    const url = `http://viacep.com.br/ws/${cep}/json/`; //chamada da api
    // fetch(url).then(dados => dados.json().then(console.log));
    const dados = await fetch(url);
    const endereco = await dados.json();
    console.log(endereco);
    mostraCidade(endereco);
}
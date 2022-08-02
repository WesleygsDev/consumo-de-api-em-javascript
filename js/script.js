
//Aqui estamos selecionando o formulário
let formulario = document.querySelector('form');
let urlLogo = "https://upload.wikimedia.org/wikipedia/pt/f/f6/Pok%C3%A9mon_GO_logo.png";

let imgLogo = logo.innerHTML = "<img src='"+urlLogo+"'  style='margin:auto;position:relative; width:100%;'>";


//essa função é responsável por ao clicar em submit dispara uma ação de requisição da API
formulario.addEventListener('submit', function (e) {
    // Abaixo bloqueia o reflesh da página
    e.preventDefault();

    let urlApi = "https://pokeapi.co/api/v2/pokemon/";
    console.log(urlApi);

    let name = document.getElementById('name');
    // Aqui estamos cocatenando com o valor do input com a url
    urlApi = urlApi + this.name.value;
    urlApi = urlApi.toLowerCase();
    // Criando a resposta no documento
    let resposta = document.getElementById('conteudo');
    //resposta em HTML
    // Aqui estamos pegando a url com o valor e solicitando a resposta da API
    fetch(urlApi)
        .then(resposta => resposta.json())
        .then(function (data) {
            // retorno da div 
            //let retorno = documen.getElementById('retorno');            
            let imagem = document.getElementById('imagem');
            let imagemBack = document.getElementById('imagemBack');
            let conteudo = document.getElementById('conteudo');
            let logo = document.getElementById('logo');


            let retorno1 = imagem.innerHTML = "<img src='" + data.sprites.front_default + "'>";
            console.log(retorno1);

            let retorno2 = imagemBack.innerHTML = "<img src='" + data.sprites.back_default + "'>";
            console.log(retorno2);

            let retorno3 = conteudo.innerHTML = "<p><strong>Nome:</strong> " + data.name + "</p>";
            console.log(retorno3);
            console.log(data);
        });        
});
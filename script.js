//comecePeloComeco();
crieSuasPerguntas();

//Primeira Tela
function comecePeloComeco () {
    const terceiraTela = document.querySelector('.terceiraTela');
    terceiraTela.innerHTML = `<h1>Comece pelo começo</h1>
    <div class="conteinerInputs">
        <input type="text" placeholder="Título do seu quizz" maxlength="65" name="titulo" id="">
        <input type="text" placeholder="URL da imagem do seu quizz" name="urlImagem" id="">
        <input type="text" placeholder="Quantidade de perguntas do seu quizz" name="qtdPerguntas" id="">
        <input type="text" placeholder="Quantidade de níveis do seu quizz" name="qtdNiveis" id="">
    </div>
    <div class="botaoCriarPerguntas" onclick="verificaComecePeloComeco()"><h1>Prosseguir para criar perguntas</h1></div>`;
}


function verificaComecePeloComeco () {
    const terceiraTela = document.querySelector('.terceiraTela');
    const tituloQuizz = document.querySelector('.conteinerInputs input[name="titulo"]').value;
    const urlImagem = document.querySelector('.conteinerInputs input[name="urlImagem"]').value;
    const qtdPerguntas = document.querySelector('.conteinerInputs input[name="qtdPerguntas"]').value;
    const qtdNiveis = document.querySelector('.conteinerInputs input[name="qtdNiveis"]').value;

    if (tituloQuizz.length < 20) {
        alert('Seu título precisa ter entre 20 e 65 caracteres');
    } else if (isURL(urlImagem) == false) {
        alert('Digite a URL de uma imagem válida');
    } else if (qtdPerguntas < 3 || isNaN(qtdPerguntas) === true) {
        alert('A quantidade de perguntas deve ser superior a 3');
    } else if (qtdNiveis < 2 || isNaN(qtdNiveis) === true) {
        alert('A quantidade de níveis deve ser no mínimo 2');
    } else {
        terceiraTela.innerHTML = ``;
        crieSuasPerguntas(terceiraTela, tituloQuizz, urlImagem, qtdPerguntas, qtdNiveis);
    }
}

function crieSuasPerguntas (/* terceiraTela, tituloQuizz, urlImagem, qtdPerguntas, qtdNiveis */) {
    const terceiraTela = document.querySelector('.terceiraTela');
    qtdPerguntas = 3;
    terceiraTela.innerHTML = `<h1>Crie suas perguntas</h1>`;
    for(let i = 0; i < qtdPerguntas; i++) {
        terceiraTela.innerHTML += `<div class="conteinerInputs">
        <div class="perguntas">
        <h1>Pergunta ${i + 1}</h1>
        <div class="escondido">
            <input type="text" placeholder="Texto da pergunta" name="txtPergunta" id="">
            <input type="text" placeholder="Cor de fundo da pergunta" name="corDeFundo" id="">
            
            <h1>Resposta Correta</h1>
            <input type="text" placeholder="Resposta correta" name="respostaCorreta" id="">
            <input type="text" placeholder="URL da imagem correta" name="urlDaImagemCorreta" id="">

            <h1>Respostas Incorretas</h1>`;
        
        for (let y = 0; y < 3; y++) {
            terceiraTela.innerHTML += `<input type="text" placeholder="Resposta incorreta ${y + 1}" name="respostaIncorreta${y + 1}" id="">
            <input type="text" placeholder="URL da imagem ${y + 1}" name="urlDaImagemIncorreta${y + 1}" id="">
            <br />`;
        }

        terceiraTela.innerHTML += `</div>`;
    }
    terceiraTela.innerHTML += `</div>
    </div>`;
    
}

function isURL(string) {
    try {
     let url = new URL(string)     
     return true;
   } catch(err) {
       return false;
   }
 }
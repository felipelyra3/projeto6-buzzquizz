comecePeloComeco();
//crieSuasPerguntas();

//Variáveis Globais
let qtdPerguntas = 0;
let qtdNiveis = 0;

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
    qtdPerguntas = document.querySelector('.conteinerInputs input[name="qtdPerguntas"]').value;
    qtdNiveis = document.querySelector('.conteinerInputs input[name="qtdNiveis"]').value;

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
        crieSuasPerguntas(terceiraTela);
    }
}

function crieSuasPerguntas (terceiraTela) {
    /* const terceiraTela = document.querySelector('.terceiraTela'); */
    let text = "";
    text += `<h1>Crie suas perguntas</h1>
    <div class="conteinerInputs">
        `;
    for(let i = 0; i < qtdPerguntas; i++) {
        text += `<div class="perguntas">
        <h1>Pergunta ${i + 1}</h1>
        <div class="escondido">
            <input type="text" placeholder="Texto da pergunta" name="txtPergunta" class="txtPergunta" id="">
            <input type="text" placeholder="Cor de fundo da pergunta" name="corDeFundo" class="corDeFundo" id="">
            
            <h1>Resposta Correta</h1>
            <input type="text" placeholder="Resposta correta" name="respostaCorreta" class="respostaCorreta" id="">
            <input type="text" placeholder="URL da imagem correta" name="urlDaImagemCorreta" class="urlDaImagemCorreta" id="">

            <h1>Respostas Incorretas</h1>`;

        for (let y = 0; y < 3; y++) {
            text += `<input type="text" placeholder="Resposta incorreta ${y + 1}" name="respostaIncorreta${y + 1}" class="respostaIncorreta" id="">
            <input type="text" placeholder="URL da imagem ${y + 1}" name="urlDaImagemIncorreta${y + 1}" class="urlDaImagemIncorreta" id="">
            <br />`;
        }

        text += ``;
    }
    text += `</div>
    </div>
    <div class="center">
    <div class="botaoCriarPerguntas" onclick="validaCrieSuasPerguntas()"><h1>Prosseguir para criar perguntas</h1></div></div>`;

    terceiraTela.innerHTML = text;    
}

function validaCrieSuasPerguntas() {
    const txtPergunta = document.querySelectorAll('.txtPergunta');
    const corDeFundo = document.querySelectorAll('.corDeFundo');
    const respostaCorreta = document.querySelectorAll('.respostaCorreta');
    const urlDaImagemCorreta = document.querySelectorAll('.urlDaImagemCorreta');
    const respostaIncorreta = document.querySelectorAll('.respostaIncorreta');
    const urlDaImagemIncorreta = document.querySelectorAll('.urlDaImagemIncorreta');

    let y = 0;
    let flag = 0;
    for (let i = 0; i < qtdPerguntas; i++) {
        flag = 0;
        if(txtPergunta[i].value.length < 20) {
            alert(`O texto da pergunta ${i + 1} deve ter no mínimo 20 caracteres`);
            flag = 1;
            break;
        } else if (isHex(corDeFundo[i].value) == false) {
            alert(`A cor de fundo da pergunta ${i + 1} precisa ser hexadecimal e começar com #`);
            flag = 1;
            break;
        } else if (respostaCorreta[i].value === "") {
            alert(`A resposta correta da pergunta ${i + 1} não pode ser vazia`);
            flag = 1;
            break;
        } else if (isURL(urlDaImagemCorreta[i].value) == false) {
            alert(`A URL da imagem da pergunta ${i + 1} precisa ser uma URL válida`);
            flag = 1;
            break;
        } else if (respostaIncorreta[y].value === "") {
            alert(`A resposta incorreta da pergunta ${i + 1} não pode ficar em branco`);
            flag = 1;
            break;
        } else if(isURL(urlDaImagemIncorreta[y].value) == false) {
            alert(`A URL da resposta incorreta da pergunta ${i + 1} precisa ser válida`);
            flag = 1;
            break;
        }

        y = y + 3;
    }

    if (flag === 0) {
        console.log(`Deu certo`);
    }
}

function isURL(string) {
    try {
     let url = new URL(string)     
     return true;
   } catch(err) {
       return false;
   }
 }

 const isHex = color => /^#([0-9A-F]{6})$/i.test(color);
//comecePeloComeco();

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
    <div class="botaoCriarPerguntas" onclick="crieSuasPerguntas()"><h1>Prosseguir para criar perguntas</h1></div>`;
}

//Verificações da primeira Tela
function crieSuasPerguntas () {
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
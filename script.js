comecePeloComeco();

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

function crieSuasPerguntas () {
    const terceiraTela = document.querySelector('.terceiraTela');
    const tituloQuizz = document.querySelector('.conteinerInputs input[name="titulo"]').value;
    const urlImagem = document.querySelector('.conteinerInputs input[name="urlImagem"]');
    const qtdPerguntas = document.querySelector('.conteinerInputs input[name="qtdPerguntas"]');
    const qtdNiveis = document.querySelector('.conteinerInputs input[name="qtdNiveis"]');

    if (tituloQuizz.length < 20) {
        alert('Seu título precisa ter entre 20 e 65 caracteres');
    } else {
        terceiraTela.innerHTML = ``;
    }
}
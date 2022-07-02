let perguntas; 


//Pegar as perguntas do servidor - ETAPA 1
function buscarPerguntas(){
    console.log("Buscando perguntas");
    const promessa = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/ID_DO_QUIZZ");

    //Quando a promessa for resolvida, executa o que está dentro do then
    promessa.then(popularPerguntas);
}

//Pega todas as perguntas (resposta da API) e joga na variável perguntas - ETAPA 2

function popularPerguntas(resposta){
    console.log("Populando receitas");
    console.log(resposta);
//Se o get funcionou

if (resposta.status === 200){
    console.log("O get deu certo");
}

receitas = resposta.data;
renderizarPerguntas();

}

//Itera sobre o array de perguntas e coloca cada receita no DOM - ETAPA 3

function renderizarPerguntas(){
    console.log("Renderizando perguntas")

    const ulPerguntas = document.querySelector(".pergunta")
}

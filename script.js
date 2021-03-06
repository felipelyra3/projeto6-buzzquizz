//Variáveis Globais
let qtdPerguntas = 3;
let qtdNiveis = 2;
let ids = [];
let tituloQuizz = "";
let urlImagem = "";
let txtPergunta = "";
let corDeFundo = "";
let respostaCorreta = "";
let urlDaImagemCorreta = "";
let respostaIncorreta = "";
let urlDaImagemIncorreta = "";
let tituloNivel = "";
let porcentagemMinimaDeAcerto = "";
let urlDaImagemDoNivel = "";
let descricaoDoNivel = "";
let position = 0;
let todasPerguntas = "";
let requestGlobal = {};
let contarAcertos = 0;
let contarErros = 0;
let object = {
    title: "Título do quizz",
    image: "https://http.cat/411.jpg",
    questions: [],
    levels: []
}

let object2 = {
    title: "Título do quizz",
    image: "https://http.cat/411.jpg",
    questions: [
        {
            title: "Título da pergunta 1",
            color: "#123456",
            answers: [
                {
                    text: "Texto da resposta 1",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: true
                },
                {
                    text: "Texto da resposta 2",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            title: "Título da pergunta 2",
            color: "#123456",
            answers: [
                {
                    text: "Texto da resposta 1",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: true
                },
                {
                    text: "Texto da resposta 2",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            title: "Título da pergunta 3",
            color: "#123456",
            answers: [
                {
                    text: "Texto da resposta 1",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: true
                },
                {
                    text: "Texto da resposta 2",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: false
                }
            ]
        }
    ],
    levels: [
        {
            title: "Título do nível 1",
            image: "https://http.cat/411.jpg",
            text: "Descrição do nível 1",
            minValue: 0
        },
        {
            title: "Título do nível 2",
            image: "https://http.cat/412.jpg",
            text: "Descrição do nível 2",
            minValue: 50
        }
    ]
}

/* let object = {
    title: "Título do quizz",
    image: "https://http.cat/411.jpg",
    questions: [
        {
            title: "Título da pergunta 1",
            color: "#123456",
            answers: [
                {
                    text: "Texto da resposta 1",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: true
                },
                {
                    text: "Texto da resposta 2",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            title: "Título da pergunta 2",
            color: "#123456",
            answers: [
                {
                    text: "Texto da resposta 1",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: true
                },
                {
                    text: "Texto da resposta 2",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            title: "Título da pergunta 3",
            color: "#123456",
            answers: [
                {
                    text: "Texto da resposta 1",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: true
                },
                {
                    text: "Texto da resposta 2",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: false
                }
            ]
        }
    ],
    levels: [
        {
            title: "Título do nível 1",
            image: "https://http.cat/411.jpg",
            text: "Descrição do nível 1",
            minValue: 0
        },
        {
            title: "Título do nível 2",
            image: "https://http.cat/412.jpg",
            text: "Descrição do nível 2",
            minValue: 50
        }
    ]
} */

/* Chamar as funções - COMENTAR AQUI */
//1
telaInicialRequest();

//3
//comecePeloComeco();
//crieSuasPerguntas();
//agoraDecidaOsNiveis();
//criarQuizz();

function telaInicialRequest() {
    const request = axios.get('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes');
    request.then(telaInicial);
    request.catch(telaInicialErro);
}

function teste(request) {
    console.log(`entrou no teste`);
    console.log(request);
}

function telaInicial(request) {
    const terceiraTela = document.querySelector('.terceiraTela');
    let text = ``;

    let dados = request;
    //teste(dados);
    

    //Se não crigou nenhum Quizz
    if (localStorage.getItem("id") === null) {
        text += `<div class="voceNaoCriouNenhumQuizzAinda">
    <h1>Você não criou nenhum<br /> Quizz ainda :(</h1>
    <div class="botaoCriarQuizz" onclick="comecePeloComeco()">Criar Quizz</div>
</div>`;
    } else {
        //Se já criou algum quizz
        let a = localStorage.getItem("id");
        a = JSON.parse(a);
        console.log("a = " + a[0]);
        text += `<div class="seusQuizzes">
        <div class="seusQuizzesTextoMaisBotao">
            <h1>Seus Quizzes</h1>
            <ion-icon name="add-circle" onclick="comecePeloComeco()"></ion-icon>
        </div>
        <div class="todosOsQuizzesBlocos">
        <div class="seusQuizzesImagens">`;


        for (let i = 0; i < 50; i++) {
            for (let j = 0; j < a.length; j++) {
                if (dados.data[i].id === a[j]) {
                    text += `<img src="${dados.data[i].image}" alt="" srcset="" onclick="renderizarPerguntas(${i})">`;
                    /* ONCLICK AQUI TEM QUE IR PRA TELA 2, VAI RECEBER request.data[i] E EXIBIR ESSE QUIZZ */
                    /* onclick="tela2(request.data[i])"; */
                }
            }
        }

        text += `</div></div>
    </div>`;
    }


    //Todos os Quizzes
    text += `<div class="todosOsQuizzes">
    <h1>Todos os Quizzes</h1>
    <div class="todosOsQuizzesBlocos">`;

    for (let i = 0; i < 3; i++) {
        text += `
        <img src="${dados.data[i].image}" alt="" srcset="" onclick="renderizarPerguntas(${i})">`;
        /* ONCLICK AQUI TEM QUE IR PRA TELA 2, VAI RECEBER request.data[i] E EXIBIR ESSE QUIZZ */
        /* onclick="tela2(request.data[i])"; */

    }

    text += `</div>
    </div>`;

    text += `<div class="todosOsQuizzes">
    <div class="todosOsQuizzesBlocos">`;

    for (let i = 3; i < 6; i++) {
        text += `<img src="${dados.data[i].image}" alt="" srcset="" onclick="renderizarPerguntas(${i})">`;
        /* ONCLICK AQUI TEM QUE IR PRA TELA 2, VAI RECEBER request.data[i] E EXIBIR ESSE QUIZZ */
        /* onclick="tela2(request.data[i])"; */

        //Tentativa de fazer a legenda
        /* text += `<div class="legendaQuizzTela1">
        <p>${request.data[i].title}</p>
    </div>`; */
    }

    text += `</div>
    </div>`;


    terceiraTela.innerHTML = text;
}

function telaInicialErro(request) {
    if (statusCode === 422) {
        console.log(`${statusCode}: Unprocessable Entity => Significa que a requisição enviada não está no formato esperado`);
    } else if (statusCode === 301) {
        console.log(`${statusCode}: Moved Permanently => Significa que o recurso que você está tentando acessar foi movido pra outra URL`);
    } else if (statusCode === 401) {
        console.log(`${statusCode}: Unauthorized => Significa que você não tem acesso a esse recurso`);
    } else if (statusCode === 404) {
        console.log(`${statusCode}: Not Found => Significa que o recurso pedido não existe`);
    } else if (statusCode === 409) {
        console.log(`${statusCode}: Conflict => Significa que o recurso que você está tentando inserir já foi inserido`);
    } else if (statusCode === 422) {
        console.log(`${statusCode}: Unprocessable Entity => Significa que a requisição enviada não está no formato esperado`);
    } else if (statusCode === 500) {
        console.log(`${statusCode}: Internal Server Error => Significa que ocorreu algum erro desconhecido no servidor`);
    } else {
        console.log(`${statusCode}: Erro desconhecido`);
    }
}

//3.1
function comecePeloComeco() {
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

//3.1 verifica
function verificaComecePeloComeco() {
    const terceiraTela = document.querySelector('.terceiraTela');
    tituloQuizz = document.querySelector('.conteinerInputs input[name="titulo"]').value;
    urlImagem = document.querySelector('.conteinerInputs input[name="urlImagem"]').value;
    qtdPerguntas = document.querySelector('.conteinerInputs input[name="qtdPerguntas"]').value;
    qtdNiveis = document.querySelector('.conteinerInputs input[name="qtdNiveis"]').value;

    object.title = tituloQuizz;
    object.image = urlImagem;

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
        crieSuasPerguntas();
    }
}

//3.2
function crieSuasPerguntas() {
    const terceiraTela = document.querySelector('.terceiraTela');
    let text = "";
    text += `<h1>Crie suas perguntas</h1>
    <div class="conteinerInputs">
        `;
    for (let i = 0; i < qtdPerguntas; i++) {
        text += `<div class="perguntas">
        <h1>Pergunta ${i + 1}</h1>
        <div class="escondido">
            <input type="text" placeholder="Texto da pergunta" name="txtPergunta" class="txtPergunta" id="">
            <input type="text" placeholder="Cor de fundo da pergunta" name="corDeFundo" class="corDeFundo" id="">

            <h1>Resposta Correta</h1>
            <input type="text" placeholder="Resposta correta" name="respostaCorretaa" class="respostaCorretaa" id="">
            <input type="text" placeholder="URL da imagem correta" name="urlDaImagemCorreta" class="urlDaImagemCorreta" id="">

            <h1>Respostas Incorretas</h1>`;

        for (let y = 0; y < 3; y++) {
            text += `<input type="text" placeholder="Resposta incorreta ${y + 1}" name="respostaIncorreta" class="respostaIncorreta" id="">
            <input type="text" placeholder="URL da imagem ${y + 1}" name="urlDaImagemIncorreta" class="urlDaImagemIncorreta" id="">
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

//3.2 verifica
function validaCrieSuasPerguntas() {
    txtPergunta = document.querySelectorAll('.txtPergunta');
    corDeFundo = document.querySelectorAll('.corDeFundo');
    respostaCorreta = document.querySelectorAll('.respostaCorretaa');
    urlDaImagemCorreta = document.querySelectorAll('.urlDaImagemCorreta');
    respostaIncorreta = document.querySelectorAll('.respostaIncorreta');
    urlDaImagemIncorreta = document.querySelectorAll('.urlDaImagemIncorreta');

    let y = 0;
    let a = 0;
    let flag = 0;
    for (let i = 0; i < qtdPerguntas; i++) {
        flag = 0;
        if (txtPergunta[i].value.length < 20) {
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
        } else if (isURL(urlDaImagemIncorreta[y].value) == false) {
            alert(`A URL da resposta incorreta da pergunta ${i + 1} precisa ser válida`);
            flag = 1;
            break;
        }
        y = y + 3;
    }

    if (flag === 0) {
        for (let i = 0; i < qtdPerguntas; i++) {
            /* object.questions[i].title = txtPergunta[i].value;
            object.questions[i].color = corDeFundo[i].value;
            object.questions[i].answers[0].text = respostaCorreta[i + 1].value;
            object.questions[i].answers[0].image = urlDaImagemCorreta[i].value;
            object.questions[i].answers[0].isCorrectAnswer = true; */
           
            object.questions.push({title: txtPergunta[i].value, color: corDeFundo[i].value, answers: [{text: respostaCorreta[i].value, image: urlDaImagemCorreta[i].value, isCorrectAnswer: true}]});
            //object.questions.push({answers: [{}]});
            //object.questions[i].answers.push({teste: "aa"});
            
            for (let z = 0; z < 3; z++) {
                if (respostaIncorreta[a].value !== '') {
                    //object.questions[i].answers.push({ text: respostaIncorreta[a].value, image: urlDaImagemIncorreta[a].value, isCorrectAnswer: false });
                    object.questions[i].answers.push({text: respostaIncorreta[a].value, image: urlDaImagemIncorreta[a].value, isCorrectAnswer: false});
                }
                a++;
            }
        }
        agoraDecidaOsNiveis();
    }
}

//3.4
function agoraDecidaOsNiveis() {
    //let qtdNiveis = 2;
    const terceiraTela = document.querySelector('.terceiraTela');
    let text = "";
    text += `<h1>Agora, decida os níveis!</h1>
    <div class="conteinerInputs">`;

    for (let i = 0; i < qtdNiveis; i++) {
        text += `<div class="perguntas">
        <h1>Nível ${i + 1}</h1>
        <div class="escondido">
            <input type="text" placeholder="Título do nível" name="tituloNivel" class="tituloNivel" id="">
            <input type="number" placeholder="% de acerto mínimo" name="porcentagemMinimaDeAcerto" class="porcentagemMinimaDeAcerto" id="">
            <input type="text" placeholder="URL da imagem do nível" name="urlDaImagemDoNivel" class="urlDaImagemDoNivel" id="">
            <input type="text" placeholder="Descrição do nível" name="descricaoDoNivel" class="descricaoDoNivel" id="">
        </div>`;
    }
    text += `</div></div>
    <div class="center"><div class="botaoCriarPerguntas" onclick="verificaAgoraDecidaOsNiveis();"><h1>Prosseguir para criar perguntas</h1></div></div>`;
    terceiraTela.innerHTML = text;
}

//3.4 verifica
function verificaAgoraDecidaOsNiveis() {
    //let qtdNiveis = 2;
    tituloNivel = document.querySelectorAll('.tituloNivel');
    porcentagemMinimaDeAcerto = document.querySelectorAll('.porcentagemMinimaDeAcerto');
    urlDaImagemDoNivel = document.querySelectorAll('.urlDaImagemDoNivel');
    descricaoDoNivel = document.querySelectorAll('.descricaoDoNivel');

    let flag = 0;
    numberPorcentagemMinimaDeAcerto = [];

    for (let i = 0; i < qtdNiveis; i++) {
        if (tituloNivel[i].value.length < 10) {
            alert(`O título do nível ${i + 1} precisa ter mais de 10 caracteres`);
            flag = 1;
            break;
        } else if (porcentagemMinimaDeAcerto[i].value < 0 || porcentagemMinimaDeAcerto[i].value > 100 || porcentagemMinimaDeAcerto[i].value === "") {
            alert(`A porcentagem mínima de acerto do nível ${i + 1} precisa estar entre 0 e 100`);
            flag = 1;
            break;
        } else if (isURL(urlDaImagemDoNivel[i].value) == false) {
            alert(`A URL da imagem do nível ${i + 1} precisa ser uma URL válida`);
            flag = 1;
            break;
        } else if (descricaoDoNivel[i].value.length < 30) {
            alert(`A descrição do nível ${i + 1} precisa ter no mínimo 30 caracteres`);
            flag = 1;
            break;
        }

        numberPorcentagemMinimaDeAcerto[i] = Number(porcentagemMinimaDeAcerto[i].value);

        object.levels.push({ title: tituloNivel[i].value, image: urlDaImagemDoNivel[i].value, text: descricaoDoNivel[i].value, minValue: numberPorcentagemMinimaDeAcerto[i] });
    }

    let flag2 = 0;
    for (let i = 0; i < qtdNiveis; i++) {
        if (porcentagemMinimaDeAcerto[i].value == 0) {
            flag2 = 0;
            break;
        } else {
            flag2 = 2;
        }
    }

    if (flag2 === 2) {
        alert(`Pelo menos um dos níveis precisa ter % mínima de acerto igual a 0`);
    }

    if (flag === 0 && flag2 === 0) {
        criarQuizz();
    }
}

//3.x cria o Post no Axios
function criarQuizz() {
    /* console.log (`qtdPerguntas = ${qtdPerguntas};
    let qtdNiveis = ${qtdNiveis};
    let tituloQuizz = ${tituloQuizz};
    let urlImagem = ${urlImagem};
    let txtPergunta = ${txtPergunta};
    let corDeFundo = ${corDeFundo};
    let respostaCorreta = ${respostaCorreta};
    let urlDaImagemCorreta = ${urlDaImagemCorreta};
    let respostaIncorreta = ${respostaIncorreta};
    let urlDaImagemIncorreta = ${urlDaImagemIncorreta};
    let tituloNivel = ${tituloNivel};
    let porcentagemMinimaDeAcerto = ${porcentagemMinimaDeAcerto};
    let urlDaImagemDoNivel = ${urlDaImagemDoNivel};
    let descricaoDoNivel = ${descricaoDoNivel};`); */

    const promise = axios.post('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes', object);
    promise.then(sucessoCriarQuizz);
    promise.catch(erroCriarQuizz);
}

//3.x Caso tenha sucesso no Post do Axios
function sucessoCriarQuizz(request) {
    const statusCode = request.status;
    if (statusCode === 201 || statusCode === 200) {
        console.log(`${statusCode} - Sucesso`);
        console.log(request);

        if (localStorage.getItem("id") === null) {
            let b = [];
            b.push(request.data.id);
            localStorage.setItem("id", JSON.stringify(b));
        } else {
            let a = localStorage.getItem("id");
            a = JSON.parse(a);
            a.push(request.data.id);
            localStorage.setItem("id", JSON.stringify(a));
            console.log(a + " " + typeof (a));
        }

        seuQuizzEstaPronto();
    }
}

//3.x Caso dê erro no Post do Axios
function erroCriarQuizz(request) {
    const statusCode = request.status;
    console.log(statusCode);
    if (statusCode === 422) {
        console.log(`${statusCode}: Unprocessable Entity => Significa que a requisição enviada não está no formato esperado`);
    } else if (statusCode === 301) {
        console.log(`${statusCode}: Moved Permanently => Significa que o recurso que você está tentando acessar foi movido pra outra URL`);
    } else if (statusCode === 401) {
        console.log(`${statusCode}: Unauthorized => Significa que você não tem acesso a esse recurso`);
    } else if (statusCode === 404) {
        console.log(`${statusCode}: Not Found => Significa que o recurso pedido não existe`);
    } else if (statusCode === 409) {
        console.log(`${statusCode}: Conflict => Significa que o recurso que você está tentando inserir já foi inserido`);
    } else if (statusCode === 422) {
        console.log(`${statusCode}: Unprocessable Entity => Significa que a requisição enviada não está no formato esperado`);
    } else if (statusCode === 500) {
        console.log(`${statusCode}: Internal Server Error => Significa que ocorreu algum erro desconhecido no servidor`);
    } else {
        console.log(`${statusCode}: Erro desconhecido`);
    }
}

//3.4
function seuQuizzEstaPronto() {
    const terceiraTela = document.querySelector('.terceiraTela');
    let text = "";
    text += `<h1>Seu Quizz está pronto!</h1>
    <div class="imagemDoQuizz">
        <img src="${object.image}" alt="" srcset="">
        <div class="legendaQuizz">
            <p>${object.title}</p>
        </div>
    </div>
    <div class="center seuQuizzEstaPronto">
        <div class="botaoCriarPerguntas botaoAcessarQuizz" onclick="renderizarPerguntas(${0})">
            <h1>Acessar Quizz</h1>
        </div>
        <h2 onclick="telaInicialRequest()">Voltar Home</h2>
    </div>`;

    terceiraTela.innerHTML = text;
}

//Chama a tela para exibir o Quizz que acabou de criar
function chamaTela2() {
    console.log(`chamaTela2() - Exibir o Quizz que acabou de criar`);
}

//Volta para a tela de Home
function voltarParaHome() {
    console.log('voltarParaHome()');
    agoraDecidaOsNiveis();
}

//Funções de verificação
function isURL(string) {
    try {
        let url = new URL(string)
        return true;
    } catch (err) {
        return false;
    }
}

const isHex = color => /^#([0-9A-F]{6})$/i.test(color);



//JS TELA 2

function renderizarPerguntas(posicao){
    console.log("Renderizando perguntas");
    console.log(posicao);
    position = posicao;

    
    const terceiraTela = document.querySelector(".terceiraTela");

    terceiraTela.innerHTML= "";

    const request = axios.get('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes');
    request.then(sucessoRenderiza);


//     const segundaTela = document.querySelector(".segundaTela");
//     segundaTela.innerHTML="";

//     for (let i = 0; i < perguntas.length; i++) {
//         segundaTela.innerHTML += `
//         <div class="bannerQuizz">
//         <p>${perguntas[i].title}</p>
//     </div>
//     <div class="cardPergunta">

//     <ul class="boxPergunta">
//         <p class="tituloPergunta" style="background-color:purple">${request.data[i].title}</p>
//         <li class="cardResposta respostaCorreta" >
//             <img src="./img/image 3.png" />
//             <p class="resposta">Gatíneo</p>
//         </li>
//         </ul>


//         `
//     }
 }

 function sucessoRenderiza(requisicao){
    // console.log(request.data[position]);

    let request = requisicao;
    requestGlobal = requisicao;

    console.log("aqui está o position global : " + position);
    console.log(requestGlobal.data[position]);


   console.log(request.data[position].title);
   console.log(request.data[position].questions);

   const segundaTela = document.querySelector(".segundaTela");
   let texto = "";
   segundaTela.innerHTML="";
   
   segundaTela.innerHTML = `
   <div class="bannerQuizz">
            <p>${request.data[position].title}</p>
        </div>        
   `
   let todasPerguntas = request.data[position].questions;
    
   

   console.log(teste);
   
   for (let i = 0; i < todasPerguntas.length; i++) {
    
    let tituloPergunta = todasPerguntas[i].title;
    let corPergunta = todasPerguntas[i].color;
    let todasRespostas = todasPerguntas[i].answers;

    console.log(todasRespostas);
    console.log(todasRespostas.length);

    texto +=    `<div class="cardPergunta">

    <ul class="boxPergunta">
    <p class="tituloPergunta" style="background-color:${corPergunta}">${tituloPergunta}</p>
    
            `

    // console.log(todasImagens);

    // segundaTela.innerHTML += `
    // <div class="cardPergunta">

    // <ul class="boxPergunta">
    //     <p class="tituloPergunta" style="background-color:${corPergunta}">${tituloPergunta}</p>
    
    // `

    // let liImages =  `
     
    //   <li class="cardResposta" >
    //     <img src=${todasImagens}/>
    //     <p class="resposta">${descricaoResposta}</p>
    // </li>
    // ` 
    // segundaTela.innerHTML += liImages;

    // segundaTela.innerHTML += `
    // </ul>`
    // }
        
    for (let j = 0; j < todasRespostas.length; j++) {

         let respostaCertaouErrada = todasRespostas[j].isCorrectAnswer;

        texto += `<li class="cardResposta ${respostaCertaouErrada}" onClick="banana(this)">
        <img src = ${todasRespostas[j].image} class="imagemResposta">
        <p  class="resposta">${todasRespostas[j].text}</p>
    </li>`;


        
    }
    
        
    
    
    texto += `
    </div>    
    `

    segundaTela.innerHTML += texto;
}






//Niveis

let todosOsNiveis = request.data[position].levels;

console.log(todosOsNiveis);

for (let i = 0; i < todosOsNiveis.length; i++) {

let tituloLevel = todosOsNiveis[i].title;
let porcentagemDeAcertos = todosOsNiveis[i].minValue;
let textoNivel = todosOsNiveis[i].text;
let imagemNivel = todosOsNiveis[i].image;

console.log(tituloLevel, porcentagemDeAcertos, textoNivel, imagemNivel);

if (porcentagemDeAcertos === 0){

    texto += `
    
    <div class="nivel">
    
                <p class="resultado">${porcentagemDeAcertos}% de acerto: ${tituloLevel}</p>
    
                <div class="resultadoNivel">
                    <img src=${imagemNivel} />
                    <div class="resultadoQuizz">${textoNivel}</p>
                    </div>
                </div>
            </div>
    
    
    `
    } if (porcentagemDeAcertos > 0 && porcentagemDeAcertos <= 100) {

        texto += `
    
        <div class="nivel">
        
                    <p class="resultado">${porcentagemDeAcertos}% de acerto: ${tituloLevel}</p>
        
                    <div class="resultadoNivel">
                        <img src=${imagemNivel} />
                        <div class="resultadoQuizz">${textoNivel}</p>
                        </div>
                    </div>
                </div>
        
        
        `

    }


}



texto += `

<div class="reiniciarQuizz" onClick="sucessoRenderiza()">Reiniciar Quizz</div>
<div class="voltarHome" onClick="voltarHome()">Voltar pra home</div>

`

segundaTela.innerHTML += texto;
console.log("chegou até aqui")


}

function banana(elemento){
    console.log("função banana")
    console.log(requestGlobal.data[position]);

    let posicaoReqGlobal = requestGlobal.data[position];

    // let cardResposta = document.querySelector()

    let cardRespostaCorreta = document.querySelector(".cardResposta.true");
    let cardRespostaErrada = document.querySelector(".cardResposta.false");
    const pergs = posicaoReqGlobal.questions;
    
    for (let k = 0; k < pergs.length; k++){

        let resps = pergs[k].answers;

        for (let l = 0; l < resps.length; l++){
        

        if (cardRespostaCorreta !== null && elemento == cardRespostaCorreta){
            console.log("essa resposta é a certa"),
            elemento.classList.add("respostaCorreta");
            cardRespostaErrada.classList.add("respostaErrada");
            contarAcertos++;
            console.log("quantidade de acertos " + contarAcertos);
        } 

        if (cardRespostaErrada !== null && elemento == cardRespostaErrada){
            console.log("essa é a resposta errada")
            elemento.classList.add("errou");
            cardRespostaCorreta.classList.add("certa");
            contarErros++;
            console.log("quantidade de erros " + contarAcertos);
        }

    
        
    }
    
    }
}


function voltarHome(){
    let segundaTela = document.querySelector(".segundaTela")
    segundaTela.innerHTML = ``

    telaInicialRequest();
}


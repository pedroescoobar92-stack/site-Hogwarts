function mostrarCasa(casa) {
    let titulo = document.getElementById("carta-titulo");
    let brasao = document.getElementById("carta-brasao");
    let texto = document.getElementById("carta-texto");
    let carta = document.getElementById("carta");

    if (casa === "Grifinória") {
        titulo.innerText = "Grifinória";
        brasao.innerHTML = '<img src="img/grifinoria.png" class="brasao-casa">';
        texto.innerText = "Fundada por Godric Gryffindor, a Grifinória é a casa dos corajosos! Aqui ficam os que têm ousadia, lealdade e coração valente. Seu fantasma é Nick Quase-Sem-Cabeça e seu animal é o leão. Harry Potter, Hermione e Rony são daqui. Se o Chapéu Seletor te mandou pra cá, é porque você não tem medo de enfrentar nenhum desafio!";
    }
    if (casa === "Sonserina") {
        titulo.innerText = "Sonserina";
       brasao.innerHTML = '<img src="img/sonserina.png" class="brasao-casa">';
        texto.innerText = "Fundada por Salazar Slytherin, a Sonserina é a casa dos ambiciosos! Aqui ficam os astutos, determinados e que sabem o que querem. Seu fantasma é o Barão Sangrento e seu animal é a serpente. Draco Malfoy e o próprio Voldemort são daqui. Não confunda ambição com maldade - os sonserinos só vão até o fim para conseguir o que querem!";
    }
    if (casa === "Corvinal") {
        titulo.innerText = "Corvinal";
        brasao.innerHTML = '<img src="img/corvinal.png" class="brasao-casa">';
        texto.innerText = "Fundada por Rowena Ravenclaw, a Corvinal é a casa dos sábios! Aqui ficam os inteligentes, criativos e que amam aprender. Seu fantasma é a Dama Cinzenta e seu animal é a águia. Luna Lovegood é daqui. Se você vive fazendo perguntas e adora descobrir coisas novas, seu lugar é aqui!";
    }
    if (casa === "Lufa-Lufa") {
        titulo.innerText = "Lufa-Lufa";
        brasao.innerHTML = '<img src="img/lufa.png" class="brasao-casa">';
        texto.innerText = "Fundada por Helga Hufflepuff, a Lufa-Lufa é a casa dos leais! Aqui ficam os pacientes, trabalhadores e de coração gigante. Seu fantasma é o Frei Gorducho e seu animal é o texugo. Cedrico Diggory é daqui. Muita gente subestima a Lufa-Lufa, mas é aqui que estão os amigos mais fiéis de Hogwarts!";
    }

    carta.classList.add("mostrar");
}

function fecharCarta() {
    document.getElementById("carta").classList.remove("mostrar");
}

// Fecha a carta se clicar fora dela
document.getElementById("carta").addEventListener("click", (e) => {
    if (e.target.id === "carta") {
        fecharCarta();
    }
});

let perguntas = [
    {
        pergunta: "O que você mais valoriza?",
        opcoes: [
            { texto: "Coragem", casa: "Grifinória" },
            { texto: "Ambição", casa: "Sonserina" },
            { texto: "Inteligência", casa: "Corvinal" },
            { texto: "Lealdade", casa: "Lufa-Lufa" }
        ]
    },
    {
        pergunta: "Qual animal você prefere?",
        opcoes: [
            { texto: "Leão", casa: "Grifinória" },
            { texto: "Serpente", casa: "Sonserina" },
            { texto: "Águia", casa: "Corvinal" },
            { texto: "Texugo", casa: "Lufa-Lufa" }
        ]
    },
    {
        pergunta: "Numa aventura, você seria...",
        opcoes: [
            { texto: "Quem lidera o grupo", casa: "Grifinória" },
            { texto: "Quem planeja tudo", casa: "Sonserina" },
            { texto: "Quem resolve os enigmas", casa: "Corvinal" },
            { texto: "Quem ajuda todo mundo", casa: "Lufa-Lufa" }
        ]
    }
];

let perguntaAtual = 0;
let pontos = { "Grifinória": 0, "Sonserina": 0, "Corvinal": 0, "Lufa-Lufa": 0 };

function descobrirCasa() {
    perguntaAtual = 0;
    pontos = { "Grifinória": 0, "Sonserina": 0, "Corvinal": 0, "Lufa-Lufa": 0 };
    mostrarPergunta();
}

function mostrarPergunta() {
    let titulo = document.getElementById("carta-titulo");
    let brasao = document.getElementById("carta-brasao");
    let texto = document.getElementById("carta-texto");
    let carta = document.getElementById("carta");

    if (perguntaAtual >= perguntas.length) {
        mostrarResultadoQuiz();
        return;
    }

    let p = perguntas[perguntaAtual];
    titulo.innerText = "Pergunta " + (perguntaAtual + 1) + " de 3";
    brasao.innerHTML = 'img/chapeu_seletor-removebg-preview.png" class="chapeu-carta">';
    texto.innerHTML = "<b>" + p.pergunta + "</b><br><br>" + p.opcoes.map((op) => 
        `<button onclick="responderQuiz('${op.casa}')" style="display:block; width:100%; margin:5px 0; padding:10px; background:#7a1f1f; color:white; border:1px solid #d4af37; border-radius:8px; cursor:pointer;">${op.texto}</button>`
    ).join("");

    carta.classList.add("mostrar");
}

function responderQuiz(casa) {
    pontos[casa]++;
    perguntaAtual++;
    mostrarPergunta();
}

function mostrarResultadoQuiz() {
    let maior = "Grifinória";
    let maiorPontos = 0;
    for (let casa in pontos) {
        if (pontos[casa] > maiorPontos) {
            maiorPontos = pontos[casa];
            maior = casa;
        }
    }
    revelarCasa(maior);
}
function revelarCasa(sorteada) {
    let titulo = document.getElementById("carta-titulo");
    let brasao = document.getElementById("carta-brasao");
    let texto = document.getElementById("carta-texto");
    let carta = document.getElementById("carta");

    titulo.innerText = "O Chapeu Seletor esta pensando...";
    brasao.innerHTML = '<img src="img/chapeu_seletor-removebg-preview.png" class="chapeu-carta">';
    texto.innerText = "Hummm... deixa eu ver... voce tem coragem... inteligencia... lealdade...";
    carta.classList.add("mostrar");

    setTimeout(() => {
        if (sorteada === "Grifinória") {
            titulo.innerText = "Voce e da Grifinoria!";
          brasao.innerHTML = '<img src="img/grifinoria.png" class="brasao-casa">';
            texto.innerText = "O Chapeu Seletor decidiu: Voce e da Grifinoria! Coragem, ousadia e lealdade! Voce nao tem medo de nenhum desafio!";
        }
        if (sorteada === "Sonserina") {
            titulo.innerText = "Voce e da Sonserina!";
           brasao.innerHTML = '<img src="img/sonserina.png" class="brasao-casa">';
            texto.innerText = "O Chapeu Seletor decidiu: Voce e da Sonserina! Ambicao, astucia e determinacao! Voce sabe o que quer e vai ate o fim!";
        }
        if (sorteada === "Corvinal") {
            titulo.innerText = "Voce e da Corvinal!";
           brasao.innerHTML = '<img src="img/corvinal.png" class="brasao-casa">';
            texto.innerText = "O Chapeu Seletor decidiu: Voce e da Corvinal! Inteligencia, criatividade e sabedoria! Sua mente e sua maior magia!";
        }
        if (sorteada === "Lufa-Lufa") {
            titulo.innerText = "Voce e da Lufa-Lufa!";
           brasao.innerHTML = '<img src="img/lufa.png" class="brasao-casa">';
            texto.innerText = "O Chapeu Seletor decidiu: Voce e da Lufa-Lufa! Lealdade, paciencia e trabalho duro! Seu coracao e gigante!";
        }
    }, 1500);
}
function criarCorujinhas() {
    let ceu = document.getElementById("ceu");

    setInterval(() => {
        let coruja = document.createElement("div");
        coruja.className = "corujinha-sprite";
        coruja.style.top = (Math.random() * 70 + 2) + "vh";

        let tamanho = 90 + Math.random() * 90;
        coruja.style.width = tamanho + "px";
        coruja.style.height = tamanho + "px";
        coruja.style.backgroundSize = (tamanho * 6) + "px " + tamanho + "px";

        let tempoVoo = 9 + Math.random() * 10;
        let tempoFlutuar = 2 + Math.random() * 3;

        // 1. PRIMEIRO decide se vai ser invertida ou não
        let invertida = Math.random() > 0.5;
        let animacaoVoo = invertida ? "voarCorujaReversa" : "voarCoruja";

        // 2. DEPOIS coloca a animação
        coruja.style.animation = `${animacaoVoo} ${tempoVoo}s linear forwards, flutuar ${tempoFlutuar}s ease-in-out infinite`;

        // 3. AGORA SIM coloca esse if que você perguntou, depois do animation
        if (invertida) {
            coruja.style.transform = "scaleX(-1)";
            coruja.style.left = "110vw";
        } else {
            coruja.style.left = "-150px";
        }

        // 4. Por último, joga ela no céu
        ceu.appendChild(coruja);

        let quadro = 0;
        let baterAsa = setInterval(() => {
            quadro = (quadro + 1) % 6;
            coruja.style.backgroundPosition = (-quadro * tamanho) + "px 0";
        }, 150);

        setTimeout(() => {
            clearInterval(baterAsa);
            coruja.remove();
        }, tempoVoo * 1000 + 1000);
    }, 5000);
}
// Cria purpurina dourada caindo
function criarPurpurina() {
    let ceu = document.getElementById("ceu");
    setInterval(() => {
        let estrela = document.createElement("span");
        estrela.className = "purpurina";
        estrela.innerText = "✨";
        estrela.style.left = Math.random() * 100 + "vw";
        estrela.style.top = "-20px";
        ceu.appendChild(estrela);

        setTimeout(() => {
            estrela.remove();
        }, 6000);
    }, 800);
}

// AQUI que chama as duas!
criarCorujinhas();

criarPurpurina();

// Varinha segue o mouse e solta magia

let varinha = document.getElementById("varinha");

let magias = ["✨", "⭐", "💫", "✨", "🌟"];

document.addEventListener("mousemove", (e) => {

    varinha.style.left = e.clientX + "px";

    varinha.style.top = e.clientY + "px";

    if (Math.random() > 0.7) {

        let magia = document.createElement("span");

        magia.className = "rastro-magia";

        magia.innerText = magias[Math.floor(Math.random() * magias.length)];

        magia.style.left = e.clientX + "px";

        magia.style.top = e.clientY + "px";

        document.body.appendChild(magia);

        setTimeout(() => {

            magia.remove();
        }, 1000);
    }
});
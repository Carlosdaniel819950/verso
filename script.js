function mostrarMensagem() {
    alert("Oi! Obrigado por visitar meu site!");
}

function mudarTema() {
    document.body.classList.toggle("dark-theme");
}

// Lista de poemas
const poemas = [
    {
        titulo: "Além do Código",
        texto: `Entre linhas e comandos,<br>
                Me perco e me encontro,<br>
                Em versos que não compilam,<br>
                Mas tocam fundo e contam o quanto sou pronto.`
    },
    {
        titulo: "Força no Silêncio",
        texto: `O peso não me assusta,<br>
                A dor é companheira,<br>
                Enquanto o mundo fala,<br>
                Minha mente é a guerreira.`
    },
    {
        titulo: "Códigos e Emoções",
        texto: `Na lógica me encontro,<br>
                No erro me perco,<br>
                Mas na poesia eu sinto,<br>
                Que a vida tem seu enredo.`
    }
];

let indicePoema = 0;

function trocarPoema() {
    indicePoema = (indicePoema + 1) % poemas.length;
    document.getElementById("titulo-poema").innerHTML = poemas[indicePoema].titulo;
    document.getElementById("texto-poema").innerHTML = poemas[indicePoema].texto;
}
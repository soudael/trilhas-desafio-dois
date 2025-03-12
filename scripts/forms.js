function verificarInput(event) {
    let input = event.target; // seleciona apenas o input que deu origem à execução desse evento
    if (input.value.trim() === "") { // acontece caso não haja nada escrito no input
        input.previousElementSibling?.remove(); // remove quebra de linha criada
        input.remove(); // remove o input
    }
}

function adicionarRedeSocial() {
    let section = document.getElementById("redes-sociais");
    let qtdInputs = section.querySelectorAll("input").length;
    let novoIdentificador = "rede-" + (qtdInputs + 1); // cria um novo ID baseado na quantidade de inputs até o momento

    let novoInput = document.createElement("input"); // define os atributos do novo input
    novoInput.setAttribute("id", novoIdentificador);
    novoInput.setAttribute("name", "rede-social");
    novoInput.setAttribute("placeholder", "Insira um link");

    novoInput.addEventListener("blur", verificarInput); // testa se a caixa do input foi desselecionada

    let pularLinha = document.createElement("br"); // cria uma quebra de linha

    let botao = document.getElementById("adicionar-rede");
    section.insertBefore(pularLinha, botao); // adiciona quebra de linha
    section.insertBefore(novoInput, botao); // adiciona novo input

    novoInput.focus(); // habilita a escrita dentro do input logo que é criado
}
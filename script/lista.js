const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");


form.addEventListener("submit", (evento) => {
    // o método addEventListener() é que nos permite que você configure funções a serem chamadas quando o evento específico acontecer
    // neste exemplo é quando o usuário clicar no botão
    evento.preventDefault();
    criaElemento(evento.target.elements['produto'].value, evento.target.elements['quantidade'].value);
});
function criaElemento(produto, quantidade) {
    if (produto !== '' && quantidade !== '') {

        const novoItem = document.createElement('li');
        novoItem.classList.add("item");

        const numeroItem = document.createElement('strong');
        numeroItem.innerHTML = quantidade;

        novoItem.appendChild(numeroItem);
        novoItem.innerHTML += produto;

        lista.appendChild(novoItem);
    } else {
        alert("preencha todos os campos");
    }
}

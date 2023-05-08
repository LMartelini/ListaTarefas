let nomeTarefa = document.querySelector('#texto'); // seleciona o input text
document.querySelector('#confirma').onclick = clicar; // seleciona o input submit, coloca nele o evento de clicar e chama a função

function clicar(){ // cria a função
    let ul = document.querySelector('#ul'); // seleciona a ul criada no html

    let div = document.createElement("div"); // cria uma div
    let paragrafo = document.createElement("p"); // cria um paragrafo
    let i = document.createElement("i"); // cria uma tag 'i'
    let botao = document.createElement("button"); // cria um botão

    botao.addEventListener( // cria um evento de click para o botão
        "click", // evento criado
        function(){ // cria uma função anônima
            paragrafo.classList.toggle('risco'); // verifica se existe a classe que está sendo passada, caso existir, ele tira; se não existir, coloca. Cada vez que clicar ele irá trocar.
        }
    )

    paragrafo.innerHTML = nomeTarefa.value; // o valor digitado no input passará a ser o texto do parágrafo

    div.classList.add("div"); // cria uma classe 'div'
    paragrafo.classList.add("paragrafo");// cria uma classe 'paragrafo'
    botao.classList.add("botao"); // cria uma classe 'botao'
    i.classList.add("fa-solid"); // classe para introduzir o ícone do botao
    i.classList.add("fa-check"); // classe para introduzir o ícone do botao

    ul.appendChild(div); // coloca a div dentro da ul
    div.appendChild(paragrafo); // coloca o paragrafo dentro da div
    div.appendChild(botao); // coloca o botao dentro da div
    botao.appendChild(i); // coloca o i dentro de botao
    
    nomeTarefa.value = ""; // limpa o input, deixando-o pronto para ser digitada a nova task
}


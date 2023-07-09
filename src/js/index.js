/* 

OBJETIVO 1: quando passa o mouse em cima do personagem na listagem, devemos selecioná-localStorage.

passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o  mouse em cima de um deles;

passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse.

*/

/*const itemCiclope = document.getElementById('ciclope'); é uma variável com o seu respectivo nome que aponta para busca de um elemento específico com o seu id. Isso facilita para a modificação assim como as classes no CSS
console.log(itemCiclope);
*/
//Tem como refatorar o código, ou  seja, deixar o código mais limpo e mais compreensível.

/* passo 1 do OBJETIVO 1*/
const personagens = document.querySelectorAll('.personagem'); /*uma query é um elemento, esse querySelectorAll é a selecõ de uma classe que contem vários elementos nele.*/

/* passo 2 do OBJETIVO 1*/
personagens.forEach((personagem) => {
   personagem.addEventListener('mouseenter', () => {
        
        if(window.innerWidth < 450) {
            window.scrollTo({top:0, behavior:'smooth'}); //serirá para deixar a rolagem mais suave.
        }

        /* passo 3 do OBJETIVO 1*/

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado'); 
    
        personagem.classList.add('selecionado');
        
        //* passo 1 do OBJETIVO 2

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        // passo 2 do OBJETIVO 2
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`; //interpolação de strings

        // passo 2 do OBJETIVO 2

        const nomePersonagem = document.getElementById('nome-personagem');

        // passo 3 do OBJETIVO 2

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // passo 4 do OBJETIVO 2
        const descricaoPersonagem = document.getElementById('descricao-personagem'); //esse const com esse document é pegar o elemento
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
   
})

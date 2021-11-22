let botao = document.querySelectorAll("a.link")//NodeList que recebe o botão lista de emuladores
let modal = document.querySelector("article.modal")//variavel que recebe a tag article que são a lista de modelos router
let corpobotaomodelo=document.querySelectorAll("section.listamodelo")//NodeListe que recebes todos botão de cada modelo router
let textotitulo=document.querySelector("p.sobreEmuladores ")//raceber a tag que descreve cada marca de roteador]

let fechamodal=document.querySelector("button.fechar").addEventListener("click",fechar)//recebe o botao que feicha o modal

for (let cont = 0; cont <= botao.length; cont++) {//laço de repetição que vai varrer toda Aa NodeList
    botao[cont].addEventListener("click", modalvisivel)//ouvidor que dispara a função com assim que o botão é clicado

    function modalvisivel() {

        switch (cont) {//estrutura de escolha
            case 0://multilaser
                somebotaomodelo()//assinatura da função somebotaomodelo
                visivelbotaomodelo(cont)
                   
                break;
            case 1://intelbras
                textotitulo.innerHTML="Os roteadores da Intelbras não tem Emuladores  <br> segue alguns videos dos principais modelos <br> para mais modelos click no botao mais modelos."

                somebotaomodelo()//assinatura da função somebotaomodelo
                visivelbotaomodelo(cont)
                break;
            case 2://tp-link
                textotitulo.innerHTML="Os roteadores da Tp-link tem Emuladores  <br> segue alguns modelos mais usados <br> para mais modelos click no botao mais modelos "

                somebotaomodelo()//assinatura da função somebotaomodelo
                visivelbotaomodelo(cont)

                break;
            case 3://D-link
                textotitulo.innerHTML="AINDA EM contrução"
            

                somebotaomodelo()//assinatura da função somebotaomodelo
                //visivelbotaomodelo(cont)

                break;
            case 4://mercusys
                textotitulo.innerHTML="Os roteadores da mercusys tem Emuladores  <br> segue abaixo todos modelos no site oficial que tem Emuladores "

                somebotaomodelo()//assinatura da função somebotaomodelo
                visivelbotaomodelo(cont)

                break;
            case 5://tenda
                textotitulo.innerHTML="Os roteadores da Tenda tem Emuladores  <br> segue abaixo todos modelos no site oficial que tem Emuladores "
                somebotaomodelo()//assinatura da função somebotaomodelo
                visivelbotaomodelo(cont)
                break;
           

            default:
                break;

        }
    }
}

function visivelbotaomodelo(cont){//varivavel que esta recebendo cont (variavel cont é mesma usado como escolha no switch que por sua vez é a mesmo valor que dispara o botão que foi clicado)
    modal.style.display="flex"
    corpobotaomodelo[cont].style.display="flex"//O NodeList recebe o valor do parametro em seu indice
}

function somebotaomodelo(){//função que faz os botões modelo dos emuladores sumir 
    corpobotaomodelo.forEach(function(corpobotaomodelo, i){
    corpobotaomodelo.style.display="none"
})
}
function fechar(){//função que feicha o modal
    modal.style.display="none"

}
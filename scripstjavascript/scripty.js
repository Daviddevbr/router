let botao = document.querySelectorAll("a.link")
let modal = document.querySelector("article.modal")
let corpobotaomodelo=document.querySelectorAll("section.listamodelo")
let botaomodelo= document.querySelectorAll("a.modelo")
let textotitulo=document.querySelector("p.sobresimuladores")
let fechamodal=document.querySelector("button.fechar").addEventListener("click",fechar)
let arraybotons=[]
for (let cont = 0; cont <= botao.length; cont++) {
    botao[cont].addEventListener("click", modalvisivel)

    function modalvisivel() {

        switch (cont) {
            case 0:
                textotitulo.innerHTML="Os roteadores da Multileser não tem simuladores <br> segue alguns videos dos principais modelos"
                somebotaomodelo()
                visivelbotaomodelo(cont)
                   
                break;
            case 1:
                textotitulo.innerHTML="Os roteadores da Intelbras não tem simuladores <br> segue alguns videos dos principais modelos <br> para mais modelos click no botao mais modelos."

                somebotaomodelo()
                visivelbotaomodelo(cont)
                break;
            case 2:
                textotitulo.innerHTML="Os roteadores da Tp-link tem simuladores <br> segue alguns modelos mais usados <br> para mais modelos click no botao mais modelos "

                somebotaomodelo()
                visivelbotaomodelo(cont)

                break;
            case 3://D-link

                somebotaomodelo()
                visivelbotaomodelo(cont)

                break;
            case 4://mer
                textotitulo.innerHTML="Os roteadores da mercusys tem simuladores <br> segue abaixo todos modelos no site oficial que tem simuladores"

                somebotaomodelo()
                visivelbotaomodelo(cont)

                break;
            case 5:
                textotitulo.innerHTML="Os roteadores da Tenda tem simuladores <br> segue abaixo todos modelos no site oficial que tem simuladores"
                somebotaomodelo()
                visivelbotaomodelo(cont)
                break;
           

            default:
                break;

        }


    }



}


function visivelbotaomodelo(cont){
    modal.style.display="flex"
    corpobotaomodelo[cont].style.display="flex"
}
function somebotaomodelo(){
corpobotaomodelo.forEach(function(corpobotaomodelo, i){
    
    corpobotaomodelo.style.display="none"

})
}

function fechar(){

    modal.style.display="none"

}








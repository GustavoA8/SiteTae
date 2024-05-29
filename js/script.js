// Altera visibilidade da navbar mobile ao clicar no menu hamburguer
document.getElementById("dropdown").addEventListener("click", ()=>{

    document.getElementsByClassName("navbar-mobile-opcoes-lista")[0].classList.toggle("invisivel");
    document.getElementsByClassName("hambuguer-img")[0].classList.toggle("ativado");

});


// Altera visiblidade das redes sociais no desktop
document.getElementById("redes-sociais-dropDown").addEventListener("click", ()=>{


    let midiasContainer = document.getElementById("midia-icones-container");
    let setaDropDown = document.getElementById("social-media-dropDown-icone");

    midiasContainer.classList.toggle("mostrar");
    setaDropDown.classList.toggle("seta-acionada");
    
});

document.getElementById("scroll-social-media-btn").addEventListener("click", ()=>{
    console.log("buirg")
    document.getElementsByClassName("sociais")[0].scrollIntoView();

})


function scrollHomePage(pagina){
    switch (pagina) {
        case "about":
            document.getElementsByClassName("section-about-us")[0].scrollIntoView();

            break;
        case "social":
            document.getElementsByClassName("sociais")[0].scrollIntoView();

            break;

        case "contact":
            document.getElementsByClassName("contact")[0].scrollIntoView();
            break;
    
        
        default:
            break;
    }
}




function popupNO(){
    console.log("funcionando")
    body = document.getSelection("body")
    popupElement = document.getElementsByClassName("pop-up")[0]
    let msg = document.getElementById("errorAge")

    msg.style.fontSize = "15px"
    msg.style.color = "red"
    msg.innerHTML = "You are not old enough to have acces to this website."



}
function popupYES(){
    console.log("funcionando")

    popupElement = document.getElementsByClassName("pop-up")[0]

    
    popupElement.style.display = "none"
}

// console.log(document.getElementById("redes-sociais-dropDown"))
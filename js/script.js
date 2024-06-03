document.getElementById("dropdown").addEventListener("click", ligarNavMobile);


function ligarNavMobile(){

    document.getElementsByClassName("navbar-mobile-opcoes-lista")[0].classList.toggle("invisivel");
    document.getElementsByClassName("hambuguer-img")[0].classList.toggle("ativado");

}

// Altera visibilidade da navbar mobile ao clicar no menu hamburguer
document.getElementById("dropdown").addEventListener("click", ligarNavMobile);



// Altera visiblidade das redes sociais no desktop
document.getElementById("redes-sociais-dropDown").addEventListener("click", ()=>{

    let midiasContainer = document.getElementById("midia-icones-container");
    let setaDropDown = document.getElementById("social-media-dropDown-icone");

    midiasContainer.classList.toggle("mostrar");
    setaDropDown.classList.toggle("seta-acionada");
    
});

document.getElementById("scroll-social-media-btn").addEventListener("click", ()=>{
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
    body = document.getSelection("body")
    popupElement = document.getElementsByClassName("pop-up")[0]
    let msg = document.getElementById("errorAge")

    msg.style.fontSize = "15px"
    msg.style.color = "red"
    msg.innerHTML = "You are not old enough to have acces to this website."



}
function popupYES(){
    popupElement = document.getElementsByClassName("pop-up")[0]

    
    popupElement.style.display = "none"
}



// Impedir erro de declarar a mesma variavel 2x
if (typeof options === 'undefined') {
    var options = {
        root: null,
        threshold: 0,
        rootMargin: "-400px 0px 0px 0px"
    };

    
    var landing = document.getElementById("titulo");
    var shield = document.getElementById("shieldPag");


    // animar nav-bar conforme scroll na tela
    var observandoNav = new IntersectionObserver(function(entries, observer){
        entries.forEach(entry =>{
            const nav = document.querySelector("header");
            if(entry.isIntersecting){
                nav.classList.remove("scrollNav");
            }else{
                nav.classList.add("scrollNav");
                // hamburguer.classList.add("hamburguerScrolled");
        }
        })
    }, options);
}



try {
    observandoNav.observe(landing);

} catch (error) {
    observandoNav.observe(shield);
}


window.observandoNav = observandoNav;

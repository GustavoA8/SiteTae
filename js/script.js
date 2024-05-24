verificar = false
popup = null 
function dropdown() {
    if (verificar == false) {
        console.log('funcionando')
        const btn = document.getElementsByClassName('dropdown-content')[0]
        btn.style.display = 'block'
        const sectionShield = document.getElementsByClassName('section-shield')[0]
        sectionShield.style.marginTop = '590px'
        const barra = document.getElementsByClassName('btnimg')[0]
        barra.style.marginRight = '500px'
        verificar = true
    }else{
        console.log("fechando")
        const btn = document.getElementsByClassName('dropdown-content')[0]
        btn.style.display = 'none'
        const sectionShield = document.getElementsByClassName('section-shield')[0]
        sectionShield.style.marginTop = '0'
        const barra = document.getElementsByClassName('btnimg')[0]
        barra.style.marginRight = '0'
        verificar = false
    }


}


document.getElementById("redes-sociais-dropDown").addEventListener("click", ()=>{mostrarRedes("sim")});


function mostrarRedes(tipo){
    let midiasContainer = document.getElementById("midia-icones-container");
    let setaDropDown = document.getElementById("social-media-dropDown-icone");

    midiasContainer.classList.toggle("mostrar");
    setaDropDown.classList.toggle("seta-acionada");



   
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
    header = document.querySelector("header")
    main = document.querySelector("main")
    footer = document.querySelector("footer")
    popupElement = document.getElementsByClassName("pop-up")[0]

    header.classList.remove('inativo')
    main.classList.remove('inativo')
    footer.classList.remove('inativo')
    popupElement.style.display = "none"
}

// console.log(document.getElementById("redes-sociais-dropDown"))
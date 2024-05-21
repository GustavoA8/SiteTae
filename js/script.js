let verificar = false
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
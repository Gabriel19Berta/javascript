function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.jpg'
        document.body.style.background = '#aabab5'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#FF8E1B'
    } else {
        img.src = 'img/noite.jpg'
        document.body.style.background = '#683635'
    }
}
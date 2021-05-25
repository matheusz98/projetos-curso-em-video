function carregar() {
    let msg = document.querySelector('.msg');
    let titulo = document.querySelector('h1');
    let img = document.querySelector('.imagem');
    let data = new Date();
    let hora = data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    msg.innerHTML = `Agora são ${hora}`;

    if (hora >= 6 && hora <= 12 ) {
        img.src = 'imagens/manha.jpg';
        document.body.style.backgroundImage = "url(imagens/manhaBg.jpg)";
    } else if (hora > 12 && hora <= 18 ) {
        img.src = 'imagens/tarde.jpg';
        document.body.style.backgroundImage = "url(imagens/tardeBg.jpg)";
    } else if (hora >= 19 && hora <= 5) {
        img.src = 'imagens/noite.jpg';
        document.body.style.backgroundImage = "url(imagens/noiteBg.jpg)";
        msg.style.color = "#ffffff";
        titulo.style.color = "#ffffff";
    }
}

carregar();
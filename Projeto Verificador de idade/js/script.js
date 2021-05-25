function verificar() {
    const data = new Date();
    const ano = data.getFullYear();
    const textoAno = document.querySelector('#txtano');
    const resultado = document.querySelector('#res');

    if (textoAno.value.length == 0 || textoAno.value.length < 4 || textoAno.value > ano) {
        alert('erro');
    } else {
        const sexo = document.getElementsByName('radsex');
        const idade = ano - textoAno.value;
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (sexo[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/menino.jpg');
                resultado.innerHTML = `Criança, ${idade} anos.`;
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/garoto.jpg');
                resultado.innerHTML = `Garoto, ${idade} anos.`;
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/jovem.jpg');
                resultado.innerHTML = `Jovem, ${idade} anos.`;
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/homem.jpg');
                resultado.innerHTML = `Adulto, ${idade} anos.`;
            } else {
                img.setAttribute('src', 'imagens/senhor.jpg');
                resultado.innerHTML = `Idoso, ${idade} anos.`;
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/menina.jpg');
                resultado.innerHTML = `Criança, ${idade} anos.`;
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/garota.jpg');
                resultado.innerHTML = `Garota, ${idade} anos.`;
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/jovem2.jpg');
                resultado.innerHTML = `Jovem, ${idade} anos.`;
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/mulher.jpg');
                resultado.innerHTML = `Adulta, ${idade} anos.`;
            } else {
                img.setAttribute('src', 'imagens/senhora.jpg');
                resultado.innerHTML = `Idosa, ${idade} anos.`;
            }
        }
        resultado.style.textAlign = 'center';
        resultado.appendChild(img);
    }
}

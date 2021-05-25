function tabuada() {
    let numero = document.querySelector('#txtn');
    let tabuada = document.querySelector('#seltab');

    if (numero.value.length == 0) {
        alert('Favor inserir um número válido.');
    } else {
        let n = Number(numero.value);
        let c = 1;
        tabuada.innerHTML = '';

        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            item.value = `tab${c}`;
            tabuada.appendChild(item);
            c++;
        }
    }
}
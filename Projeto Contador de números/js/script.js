function contar() {
    let inicial = document.querySelector('#txti');
    let fim = document.querySelector('#txtf');
    let passo = document.querySelector('#txtp');
    let resultado = document.querySelector('#res');

    if (inicial.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Falha na contagem';
    } else {
        resultado.innerHTML = 'Contando: <br>';
        let i = Number(inicial.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        // Contagem crescente
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449}`;
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
        resultado.innerHTML += `\u{1F3C1}`;
    }
}
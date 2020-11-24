var valorUm, valorDois, resultado;

valorDois = 33;
valorUm = 33;
resultado = valorUm + valorDois;

function fazendoOperacao(){
    document.getElementById('operacao').innerHTML = 'O valor do resultado é de '
    + resultado + '.';
    document.getElementById('msg').innerHTML = 'Iremos inserir mais valores na função';
};
fazendoOperacao();
console.log("Elabore um algoritmo que calcule o que deve ser pago por um produto, coniderando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado:\n\
\n\
Condições de pagamento:\n\
-À vista (débito): 10% de desconto;\n\
-À vista (dinheiro ou PIX): 15% de desconto;\n\
-Em 2x: preço da etiqueta sem desconto;\n\
-Acima de 2x: preço da etiqueta com acréscimo de 10% de juros.\n");

/* Variáveis:
    - debito = precoEtiqueta * 0.9;
    - dinheiroPix = precoEtiqueta * 0,85;
    - duasVezes = precoEtiqueta;
    - acimaDuasVezes = precoEtiqueta * 1.1;
*/


function escolha(numero, precoEtiqueta) {
    switch (numero) {
        case 1:
            console.log("Débito\n");
            totalCompra = (precoEtiqueta) * 0.9;
            console.log("O valor total a pagar é de R$ " + totalCompra.toFixed(2));
            break;
        case 2:
            console.log("Dinheiro/Pix\n");
            totalCompra = (precoEtiqueta) * 0.85;
            console.log("O valor total a pagar é de R$ " + totalCompra.toFixed(2));
            break;
        case 3:
            console.log("Em duas vezes\n");
            totalCompra = (precoEtiqueta);
            console.log("O valor total a pagar é de R$ " + totalCompra.toFixed(2));
            break;
        case 4:
            console.log("Mais de duas vezes\n");
            totalCompra = (precoEtiqueta) * 1.1;
            console.log("O valor total a pagar é de R$ " + totalCompra.toFixed(2));
            break;
        case 5:
            console.log("Sair\n");
            console.log("Agradecemos a preferência! Volte sempre!");
            break;
        default:
            console.log("Número inválido");
    }
}

function interaja() {
    const readline = require(`node:readline`);
    const { stdin: input, stdout: output } = require(`node:process`);

    const leitor = readline.createInterface({
        input,
        output
    });

    leitor.question("Qual o valor do produto?", (answer1) => {
        leitor.question("\nQual a forma de pagamento?\nDigite:\n1 - Débito;\n2 - Dinheiro ou PIX;\n3 - Em 2x;\n4 - Acima de 2x;\n5 - Sair\n", (answer2) => {
            escolha(+answer2, +answer1);
        });
    });
}

interaja();


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

function escolha(numero){
    do{
        switch(numero){
            case 1:
                console.log("debito\n");
                totalCompra = precoEtiqueta * 0.9;
                console.log("O valor total a pagar é de R$ " + totalCompra.toFixed(2));
                break;
            case 2:
                console.log("dinheiroPix\n");
                totalCompra = precoEtiqueta * 0,85;
                console.log("O valor total a pagar é de R$ " + totalCompra.toFixed(2));
                break;
            case 3:
                console.log("duasVezes\n");
                totalCompra = precoEtiqueta;
                console.log("O valor total a pagar é de R$ " + totalCompra.toFixed(2));
                break;
            case 4:
                console.log("acimaDuasVezes\n");
                totalCompra = precoEtiqueta * 1.1;
                console.log("O valor total a pagar é de R$ " + totalCompra.toFixed(2));
                break;
            case 5:
                console.log("Sair\n");
                console.log("Agradecemos a preferência! Volte sempre!");
            default:
                console.log("Número inválido");
        }
    }while(numero != 5);
}




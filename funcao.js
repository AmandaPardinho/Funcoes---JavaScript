console.log("O IMC (Índice de Massa Corpórea) é um critério da Organização Mundial de Saúde para dar uma indicação de peso de uma pessoa adulta.\n\
\n\
Fórmula do IMC:\n\
IMC = peso / (altura * altura);\n\
\n\
Dada a fórmula do IMC, elabore um algoritmo que, dado o peso e a altura de uma pessoa adulta, mostre sua condição de acordo com a tabela abaixo:\n\
\n\
Condição do peso de adultos, de acordo com o IMC:\n\
-Abaixo de 18.5: abaixo do peso;\n\
-Entre 18.5 e 25: peso normal;\n\
-Entre 25 e 30: acima do peso;\n\
-Entre 30 e 40: obeso;\n\
-Acima de 40: obesidade mórbida.\n");

function imc(peso, altura){
    imc = peso/(Math.pow(altura, 2));
    console.log(imc.toFixed(2));
}

function condicaoImc(imc){
    if(imc < 18.5){
        console.log("Abaixo do peso");
    }else if(imc >= 18.5 && imc < 25){
        console.log("Peso normal");
    }else if(imc >= 25 && imc < 30){
        console.log("Acima do peso");
    }else if(imc >= 30 && imc < 40){
        console.log("Obeso");
    }else{
        console.log("Obesidade mórbida");
    }
}

function terminal(){
    const readline = require(`node:readline`);
    const {stdin: input, stdout: output} = require(`node:process`);

    const leitor = readline.createInterface({
        input, 
        output
    });

    leitor.question("Qual o seu peso?", (answer1)=>{
        leitor.question("\nQual a sua altura?", (answer2)=>{
            imc(+answer1, +answer2);
            condicaoImc(imc);
        })
    })
};

terminal();
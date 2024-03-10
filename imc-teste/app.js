function calcularIMC(peso, altura) {
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        return 'Por favor, insira valores válidos para peso e altura.';
    }
}

let imc = peso / (altura * altura);

imc = imc.toFixed(2);

let categoria = "";
if(imc < 18.5) {
    categoria = "Abaixo do peso";
    } else if (imc < 24.9) {
        categoria = "Peso normal";
    } else if (29.9) {
        categoria = "Sobrepeso";
    } else if (imc < 34.9) {
        categoria = "Obesidade Grau I";
    } else if (imc < 39.9) {
        categoria = "Obesidade Grau II";
    } else {
        categoria = "Obesidade Grau III"
    }

    return "Seu IMC é" + imc + ". Isso é classificado como:" + categoria;


    let peso = 57;
    let altura = 1.70;
    let resultado = calcularIMC(peso,altura);
    console.log(resultado);
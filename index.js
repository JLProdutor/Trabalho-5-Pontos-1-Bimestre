document.write("Trabalho de JavaScript"+"<br>"+"<br>")
document.write("Professor: Aglayrton Julião"+"<br>")
document.write("Nome: João Lucas Lima Alexandre"+"<br>")
document.write("Turma: 2 Informática"+"<br>"+"<br>")


//Questão 1
document.write("Questão 1"+"<br>")

var valor = 10;

if(valor >=10){
    document.write("O VALOR É MAIOR QUE 10!"+"<br>"+"<br>")
}else{
    document.write("O VALOR É MENOR QUE 10!"+"<br>"+"<br>")
}


//Questão 2
document.write("Questão 2"+"<br>")

var nota1 = 10;
var nota2 = 9;
var nota3 = 8;
var nota4 = 10;
var media = (nota1 + nota2 + nota3 + nota4)/4;

if(media <= 10 && media >= 9){
    document.write("Você foi aprovado! Nota A"+"<br>"+"<br>")
}else if(media < 9 && media >= 7.5){
    document.write("Você foi aprovado acima da média! Nota B"+"<br>"+"<br>")
}else if(media < 7.5 && media >= 6){
    document.write("Você foi aprovado na média! Nota C"+"<br>"+"<br>")
}else if(media < 6){
    document.write("Você foi reprovado! Nota D"+"<br>"+"<br>")
}else{
    document.write("Média Inválida!"+"<br>"+"<br>")
}


//Questão 3 
document.write("Questão 3"+"<br>")

var nasceu = 1960;
var empresa = 1980;
var idade = 2022 - nasceu;
var trabalho = 2022 - empresa;

if(idade > 60 && trabalho > 25){
    document.write("Requerer aposentadoria"+"<br>"+"<br>")
}else{
    document.write("Não requerer"+"<br>"+"<br>")
}


//Questão 4
document.write("Questão 4"+"<br>")

var produto = "Ticket";
var quantidadeProduto = 20;
var precoUnidade = 2;
var precoTotal = quantidadeProduto * precoUnidade;
var desconto = 72 * 0.03;
var totalPagar = precoTotal - desconto;

document.write("Produto: "+produto+"<br>")
document.write("Quantidade: "+quantidadeProduto+"<br>")
document.write("Preço da unidade: "+precoUnidade+"<br>")
document.write("Total: "+precoTotal+"<br>")
document.write("Desconto: "+desconto+"<br>")
document.write("Total a pagar: "+totalPagar+"<br>")

if(quantidadeProduto <= 5){
    document.write("Seu desconto será de "+desconto+" por comprar "+quantidadeProduto+" "+produto+"<br>"+"<br>")
}else if(quantidadeProduto > 5 && quantidadeProduto <= 10){
    document.write("Seu desconto será de "+desconto+" por comprar "+quantidadeProduto+" "+produto+"<br>"+"<br>")
}else if(quantidadeProduto > 10){
    document.write("Seu desconto será de "+desconto+" por comprar "+quantidadeProduto+" "+produto+"<br>"+"<br>")
}


//Questão 5
document.write("Questão 5"+"<br>")

var codigo = 1;

if(codigo = 1){
    document.write("Alimento Não-perecível"+"<br>"+"<br>")
}else if(codigo >= 2 && codigo <= 4){
    document.write("Alimento Perecível"+"<br>"+"<br>")
}else if(codigo >= 5 && codigo <= 6){
    document.write("Vestuário"+"<br>"+"<br>")
}else if(codigo = 7){
    document.write("Higiene Pessoal"+"<br>"+"<br>")
}else if(codigo >= 8 && codigo <= 15){
    document.write("Limpeza e Utensílios Domésticos"+"<br>"+"<br>")
}else{
    document.write("Código Inválido"+"<br>"+"<br>")
}


//Questão 6
document.write("Questão 6"+"<br>")

var codigoProduto = 100;
var quant = 2;

if(codigoProduto = 100){
    var valorFinal0 = quant * 1.70;
    document.write(valorFinal0+"<br>"+"<br>")
}else if(codigoProduto = 101){
    var valorFinal1 = quant * 2.30;
    document.write(valorFinal1+"<br>"+"<br>")
}else if(codigoProduto = 102){
    var valorFinal2 = quant * 2.60;
    document.write(valorFinal2+"<br>"+"<br>")
}else if(codigoProduto = 103){
    var valorFinal3 = quant * 2.40;
    document.write(valorFinal3+"<br>"+"<br>")
}else if(codigoProduto = 104){
    var valorFinal4 = quant * 2.50;
    document.write(valorFinal4+"<br>"+"<br>")
}else if(codigoProduto = 105){
    var valorFinal5 = quant * 1
    document.write(valorFinal5+"<br>"+"<br>")
}


//Questão 7
document.write("Questão 7"+"<br>")

var num = 100;

while(num <= 110){
    document.write(" "+num+" "+"<br>"+"<br>")
    num++
}


//Questão 8
document.write("Questão 8"+"<br>"+"<br>")

var N = 10;

for(var x = 1; x <= N; x++){
    console.log(`strong>${x}</strong`)
}


//Questão 9
document.write("Questão 9")

var inteiro = 9;

if(inteiro >= 1 && inteiro <= 10){
    document.write("Tabuada do "+inteiro+"<br>")
    document.write(inteiro+" x 1 = "+inteiro * 1+"<br>")
    document.write(inteiro+" x 2 = "+inteiro * 2+"<br>")
    document.write(inteiro+" x 3 = "+inteiro * 3+"<br>")
    document.write(inteiro+" x 4 = "+inteiro * 4+"<br>")
    document.write(inteiro+" x 5 = "+inteiro * 5+"<br>")
    document.write(inteiro+" x 6 = "+inteiro * 6+"<br>")
    document.write(inteiro+" x 7 = "+inteiro * 7+"<br>")
    document.write(inteiro+" x 8 = "+inteiro * 8+"<br>")
    document.write(inteiro+" x 9 = "+inteiro * 9+"<br>")
    document.write(inteiro+" x 10 = "+inteiro * 1+"<br>"+"<br>")
}else{
    document.write("Número Inválido"+"<br>"+"<br>")
}


//Questão 10
document.write("Questão 10"+"<br>")

var crescente = 1;

while(crescente <= 10){
    document.write(" "+crescente+" "+"<br>")
    crescente++
}

document.write("<br>")
var decrescente = 10;

while(decrescente >=1){
    document.write(" "+decrescente+" "+"<br>")
    decrescente--
}

//Hello World
console.log("Hello World");

//Strings podem ser representadas com "" ou ''
//Usar Crase `` permite usar template literals que viabiliza o a inserção de variáveis no texto
console.log("Texto com aspas duplas");
console.log('Texto com aspas simples');
console.log(`Texto com crase`);
//Segue o uso de algumas funções reservadas para manipular strings
//\n quebra ou pula linhas
console.log("Texto \n quebrado.");
//Contatenar strings
console.log("Contatenando "+" strings");
//Exemplo de Template Literals usando crase e ${} para inserir um script javascript dentro da string
console.log(`A soma de 2 + 2 é ${2+2}`);


//Todos os numeros positivos, negativos e quebrados são representados por number
//Infinity, -Infinity e NaN(Not a Number) também são representações de number
//Soma(+), subtração(-), multiplicação(*), divisão(/) e o resto(%) podem ser usados para manipular numbers
console.log(13);
console.log(1.8);
console.log(-5);
console.log(Infinity);
console.log(-Infinity);
//NaN acontece quando se manipula qualquer coisa que não seja numero com number 
console.log(NaN);

//Há também operadores booleanos que são resultado de operadores lógicos
console.log(5 > 2);
console.log(10 < 7);
console.log(10 == 7);
console.log(10 != 7);
// === significa idêntico valida se uma variavel tem o mesmo VALOR e TIPO na comparação
//Possuimos o and, or e negativa 
console.log(true && true);
console.log(false || false);
console.log(!false);
//Operador ternário
console.log(5 > 2? "É maior":"É menor");
console.log(false? "É verdade":"É falso");

//Valores especiais
console.log(null); // valores que estão ou foram declarados vazios/zerados, equivale a 0
console.log(undefined); // valores que não foram declarados principalmente

//Tomar cuidado com as seguintes questões
console.log(5 * null); //deve retorna 0
console.log("5" - 3); //strings que tenham somente numero resolvem com operações diferentes de + 
console.log("5"+2); //essa ação irá contenar 5 com 2 e gerar uma string escrita 52
console.log("dois" / "três"); //irá retornar NaN
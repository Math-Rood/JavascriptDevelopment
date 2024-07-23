//Observação importante: let == var em javascript, const também é válido mas ele não é manipulável
//Declaração de variáveis
//let não pode começar sendo declarado com numero, ex: 2name, mas pode terminar com numero, ex: name2;
//pode possuir $ ou _ na declaraça, ex: $name_1, mas nenhum outro caractere especial é permitido;
//tomar cuidado com palavras reservadas do javascript
let name = "Matheus";
console.log(`O nome declarado é ${name}`);
let x = 5;
console.log(x * x);
//Seguindo a mesma lógica, se eu declarar uma variável ela pode ser reutilizada no código
name = "Nabucodonozor";
console.log(`O nome declarado é ${name}`);
x = 4;
console.log(x + x);
name = 6969;
console.log(`name virou número? ${name}`);

//Funções padrões do javascript
//prompt serve para testes rapidos, abre um pop-up que o usuario preenche, tirando isso é pouco utilizado
//let idade = prompt("Qual a sua idade?");
//console.log(idade);
//alert retorna um popup com uma mensagem, usado para teste
//alert("Isso é um alerta alertoso!!!") 
//Math.x() para operações matematicas
let maxNum = Math.max(1, 5, 7, 2);
let minNum = Math.min(9, 0, 3);
console.log(maxNum);
console.log(minNum);

//Estrutura de if
let a = 5;
let b = 3;

if(a+b == 3){
    console.log('Soma é igual a 3')
} else if (a+b == 4){
    console.log('Soma é igual a 4')
}else {
    console.log('Soma é igual a 7') 
}

//As estruturas de repetição podem usar break para encerrar o loop antes do tempo ou continue para nao perder um laço especifico
//Estrutura de while
let count = 10;
while(count > 0){
    console.log('O contador foi decrescido em 1');
    count = count - 1;
    console.log(count);
}

//Estrutura dowhile
count = 10;
do{
    console.log('O contador foi decrescido em 1');
    count = count - 1;
    console.log(count);
}while(count > 0);

//Estrutura de for
for(let i = 0; i < 10; i++){
    console.log(i);
}

//Estura de switch/case
name = 'Matheus';
switch(name){
    case 'Matheus':
        console.log('Seu nome é Matheus');
        break;
    case 'Joao':
        console.log('Seu nome é Joao');
        break;
    default:
        console.log('O nome nao foi encontrado');
        break;
}
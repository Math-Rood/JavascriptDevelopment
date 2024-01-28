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

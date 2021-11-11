//criando variaveis para facilitar o acesso aos documents
const c = (el)=> document.querySelector(el);  
const cs = (el)=> document.querySelectorAll(el);

//mapeando o PizzaJson / Listagem das Pizzas

//let lista = pizzaJson.map((item)=>item);

let lista = []

for(let i in pizzaJson) {
    lista.push( pizzaJson[i]);
}



console.log(lista)





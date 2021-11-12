const principal = 'http://api.openweathermap.org/data/2.5/weather?q='
const chamada = '&units=metric&lang=pt_br&appid='
const key = 'Usar sua chave' // site api open weather
const url = `${principal}${chamada}${key}`




async function carregarPosts() {
    document.getElementById('post').innerHTML = 'Carregando Posts'
    
    let res = await fetch(url)
    let json = await res.json();

    console.log(json)
    //montarhtml(json)
}

/*
function montarhtml(lista) {
    let html = '';

    for(let i in lista) {
        html += `<h3 class='titulo'>${lista[i].title}</h3>`;
    }

    document.getElementById('post').innerHTML = html;
}
*/

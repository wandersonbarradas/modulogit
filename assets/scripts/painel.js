let nomeRestaurante = '';
let rua = '';
let numero = '';
let bairro = '';
let cidade = '';
let valordel = 0;
let statusform = '';
let statusdesc = '';
let imgperfil = '';
let imgcapa = '';
let novoRestaurante = {};

document.querySelector('#name').addEventListener('keyup', ()=> {
    nomeRestaurante = document.querySelector('#name').value;
})

document.querySelector('#rua').addEventListener('keyup', ()=> {
    rua = document.querySelector('#rua').value;
})

document.querySelector('#numero').addEventListener('keyup', ()=> {
    numero = document.querySelector('#numero').value;
})

document.querySelector('#bairro').addEventListener('keyup', ()=> {
    bairro = document.querySelector('#bairro').value;
})

document.querySelector('#cidade').addEventListener('click', ()=> {
    cidade = document.querySelector('#cidade').value;
})

document.querySelector('#valordelivery').addEventListener('keyup', ()=> {
    valordel = document.querySelector('#valordelivery').value
})

document.querySelector('#valordelivery').addEventListener('click', ()=> {
    valordel = document.querySelector('#valordelivery').value;
})

document.querySelector('#status').addEventListener('click', ()=> {
    statusform = document.querySelector('#status').value;

    if(statusform === 'aberto'){
        statusdesc = 'aberto agora'
    }else{
        statusdesc = 'fechado agora'
    }
})

document.querySelector('#imgperfil').addEventListener('keyup', ()=> {
    imgperfil = document.querySelector('#imgperfil').value;

    document.querySelector('#newimgperfil').innerHTML = 
        `<img src="${imgperfil}" alt="">`;

})

document.querySelector('#imgcapa').addEventListener('keyup', ()=> {
    imgcapa = document.querySelector('#imgcapa').value;

    document.querySelector('#newimgcapa').innerHTML = 
        `<img src="${imgcapa}" alt="">`;

})

document.querySelector('#bt-cadastrar').addEventListener('click', ()=> {

    novoRestaurante = {
        nome: nomeRestaurante,
        endereco: {
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
        },
        valormindely: parseFloat(valordel),
        status: { status: statusform, desc: statusdesc },
        img: imgperfil,
        capa: imgcapa,
    }

    restaurante.push(novoRestaurante);

    document.querySelector('.painel').style.opacity = '0';
    setInterval(()=>{
        document.querySelector('.painel').style.display = 'none';
        document.querySelector('.painel').style.opacity = '1';
    }, 300)
    

})

let c = (el)=>document.querySelector(el);
let cs = (el)=>document.querySelectorAll(el);

restaurante.map((item, index)=>{
    let cadastro = c('.models .container-res').cloneNode(true);


    cadastro.querySelector('.box-img img').src = item.img
    cadastro.querySelector('.name-res').innerHTML = item.nome;
    cadastro.querySelector('.city').innerHTML = item.endereco.cidade;
    cadastro.querySelector('.endereco-res').innerHTML = `${item.endereco.rua}, ${item.endereco.numero}, ${item.endereco.bairro}.`;
    cadastro.querySelector('.valordely-res span').innerHTML = `R$ ${item.valormindely.toFixed(2)}`
    cadastro.querySelector('.status-res').innerHTML = item.status.desc;
    cadastro.querySelector('.status-res').classList.add(item.status.status)




    c('.container-cadastros').append(cadastro);
})


function decidirmenu() {
    if(window.scrollY === 0){
        c('.header-line').classList.remove('menu-fixed');
    }else {
        c('.header-line').classList.add('menu-fixed');
    }
}

window.addEventListener('scroll', decidirmenu);
c('.menu-header ul').style.right = '-100vw';

function menuShow() {

    if(c('.menu-header ul').style.right === '-100vw') {
        c('.menu-header ul').style.right = '0';
    }else {
        c('.menu-header ul').style.right = '-100vw';
    }
}
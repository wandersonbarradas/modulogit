let c = (el) => document.querySelector(el);
let cs = (el) => document.querySelectorAll(el);

let modalkey = 0;

restaurante.map((item, index) => {
  let cadastro = c(".models .container-res").cloneNode(true);

  cadastro.setAttribute("data-key", index);
  cadastro.querySelector(".box-img img").src = item.img;
  cadastro.querySelector(".name-res").innerHTML = item.nome;
  cadastro.querySelector(".city").innerHTML = item.endereco.cidade;
  cadastro.querySelector(
    ".endereco-res"
  ).innerHTML = `${item.endereco.rua}, ${item.endereco.numero}, ${item.endereco.bairro}.`;
  cadastro.querySelector(
    ".valordely-res span"
  ).innerHTML = `R$ ${item.valormindely.toFixed(2)}`;
  cadastro.querySelector(".status-res").innerHTML = item.status.desc;
  cadastro.querySelector(".status-res").classList.add(item.status.status);

  //Abrindo modal
  cadastro.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();

    let key = cadastro.getAttribute("data-key");
    c(".capa-modal").style.background = `url(${restaurante[key].capa})`;
    c(".capa-modal").style.backgroundPosition = "center";
    c(".capa-modal").style.backgroundSize = "cover";
    c(".logo-res-modal").src = restaurante[key].img;
    c(".nome-res-modal").innerHTML = restaurante[key].nome;
    c(".content-main-modal .status-res").innerHTML =
      restaurante[key].status.desc;
    c(".content-main-modal .status-res").classList.add(
      restaurante[key].status.status
    );

    abrirModalRes();
  });

  c(".container-cadastros").append(cadastro);
});

function decidirmenu() {
  if (window.scrollY === 0) {
    c(".header-line").classList.remove("menu-fixed");
    c(".header-line-modal").classList.remove("menu-fixed");
  } else {
    c(".header-line").classList.add("menu-fixed");
    c(".header-line-modal").classList.add("menu-fixed");
  }
}

window.addEventListener("scroll", decidirmenu);
c(".menu-header ul").style.right = "-100vw";

function menuShow() {
  if (c(".menu-header ul").style.right === "-100vw") {
    c(".menu-header ul").style.right = "0";
  } else {
    c(".menu-header ul").style.right = "-100vw";
  }
}

c(".menu-header-modal ul").style.right = "-100vw";

function menuModalShow() {
  if (c(".menu-header-modal ul").style.right === "-100vw") {
    c(".menu-header-modal ul").style.right = "0px";
  } else {
    c(".menu-header-modal ul").style.right = "-100vw";
  }
}

function abrirModalRes() {
  c(".section-header").style.opacity = "0";
  c(".restaurantes").style.opacity = "0";

  c(".modal-res").style.opacity = "0";
  c(".modal-res").style.display = "block";
  setInterval(() => {
    c(".modal-res").style.opacity = "1";
    c(".section-header").style.display = "none";
    c(".restaurantes").style.display = "none";
  }, 500);
}

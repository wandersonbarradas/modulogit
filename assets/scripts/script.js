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
  let statusfunciona = cadastro.querySelector(".status-res");

  function verificação(time) {
    let data = new Date();
    let diaSemana = data.getDay();

    if (
      (time >= item.hf[diaSemana].de && time < item.hf[diaSemana].as) ||
      (time >= item.hf[diaSemana].oude && time < item.hf[diaSemana].ouas)
    ) {
      statusfunciona.innerHTML = "Aberto Agora";
      statusfunciona.classList.remove("fechado");
      statusfunciona.classList.add("aberto");
    } else {
      statusfunciona.innerHTML = "Fechado Agora";
      statusfunciona.classList.remove("aberto");
      statusfunciona.classList.add("fechado");
    }
  }

  function updateTime() {
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    let datahf = `${fixZero(hora)}:${fixZero(minutos)}`;

    verificação(datahf);
  }

  function fixZero(time) {
    return time < 10 ? `0${time}` : time;
  }

  setInterval(updateTime, 1000);
  updateTime();
  //Abrindo modal
  cadastro.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();

    let key = cadastro.getAttribute("data-key");
    c(".capa-modal").style.background = `url(${restaurante[key].capa})`;
    c(".capa-modal").style.backgroundPosition = "center";
    c(".capa-modal").style.backgroundSize = "cover";
    c(".logo-res-modal").src = restaurante[key].img;
    c(".nome-res-modal").innerHTML = restaurante[key].nome;
    c(
      ".dom"
    ).innerHTML = `${restaurante[key].hf[0].de} ás ${restaurante[key].hf[0].as}`;
    c(
      ".seg"
    ).innerHTML = `${restaurante[key].hf[1].de} ás ${restaurante[key].hf[1].as}`;
    c(
      ".ter"
    ).innerHTML = `${restaurante[key].hf[2].de} ás ${restaurante[key].hf[2].as}`;
    c(
      ".qua"
    ).innerHTML = `${restaurante[key].hf[3].de} ás ${restaurante[key].hf[3].as}`;
    c(
      ".qui"
    ).innerHTML = `${restaurante[key].hf[4].de} ás ${restaurante[key].hf[4].as}`;
    c(
      ".sex"
    ).innerHTML = `${restaurante[key].hf[5].de} ás ${restaurante[key].hf[5].as}`;
    c(
      ".sab"
    ).innerHTML = `${restaurante[key].hf[6].de} ás ${restaurante[key].hf[6].as}`;
    c(".horario-res-modal").addEventListener("click", () => {
      abrirModalHorario();
    });

    c(".modal--horarios").addEventListener("click", () => {
      fecharModalHorario();
    });
    let statusfunciona = c(".content-main-modal .status-res");

    function verificação(time) {
      let data = new Date();
      let diaSemana = data.getDay();

      if (
        (time >= item.hf[diaSemana].de && time < item.hf[diaSemana].as) ||
        (time >= item.hf[diaSemana].oude && time < item.hf[diaSemana].ouas)
      ) {
        statusfunciona.innerHTML = "Aberto Agora";
        statusfunciona.classList.remove("fechado");
        statusfunciona.classList.add("aberto");
      } else {
        statusfunciona.innerHTML = "Fechado Agora";
        statusfunciona.classList.remove("aberto");
        statusfunciona.classList.add("fechado");
      }
    }

    function updateTime() {
      let data = new Date();
      let hora = data.getHours();
      let minutos = data.getMinutes();

      let datahf = `${fixZero(hora)}:${fixZero(minutos)}`;

      verificação(datahf);
    }

    function fixZero(time) {
      return time < 10 ? `0${time}` : time;
    }

    setInterval(updateTime, 1000);
    updateTime();

    ocultarInicio();
    load();
    c(".modal-res").style.opacity = "0";
    c(".modal-res").style.display = "block";
    setTimeout(() => {
      c(".container-animation").style.display = "none";
      subirTela();
      c(".modal-res").style.opacity = "1";
    }, 3000);
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
  c(".modal-res").style.opacity = "0";
  c(".modal-res").style.display = "block";
  setTimeout(() => {
    c(".modal-res").style.opacity = "1";
  }, 2000);
}

function ocultarInicio() {
  c(".section-header").style.opacity = "0";
  c(".restaurantes").style.opacity = "0";
  setTimeout(() => {
    c(".section-header").style.display = "none";
    c(".restaurantes").style.display = "none";
  }, 500);
}

function load() {
  c(".container-animation").style.opacity = "0";
  c(".container-animation").style.display = "flex";
  setTimeout(() => {
    c(".container-animation").style.opacity = "1";
  }, 500);
}

function subirTela() {
  window.scrollTo({
    top: 0,
  });
}

//Modal horarios

function abrirModalHorario() {
  let dias = cs(".center h4");
  c(".modal--horarios").style.opacity = "0";
  c(".modal--horarios").style.display = "flex";
  setTimeout(() => {
    c(".modal--horarios").style.opacity = "1";
    c(".modal-horios-info").style.transform = "translateY(0)";
  }, 200);
}

function fecharModalHorario() {
  c(".modal-horios-info").style.transform = "translateY(-100vh)";
  c(".modal--horarios").style.opacity = "0";
  setTimeout(() => {
    c(".modal--horarios").style.display = "none";
  }, 200);
}

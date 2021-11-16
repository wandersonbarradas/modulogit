function pesquisaCidade() {
  let pesquisa = c("#pesquisa").value;
  let listares = restaurante.filter((i) => {
    if (i.endereco.cidade === pesquisa) {
      return true;
    } else {
      return false;
    }
  });
  c(".container-cadastros-pesquisados").innerHTML = "";
  c(".container-cadastros").style.display = "none";
  if (listares.length > 0) {
    listares.map((item, index) => {
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

        ocultarInicio();
        load();
        c(".modal-res").style.opacity = "0";
        c(".modal-res").style.display = "block";
        setInterval(() => {
          c(".container-animation").style.display = "none";
          subirTela();
          c(".modal-res").style.opacity = "1";
        }, 3000);
      });

      c(".container-cadastros-pesquisados").append(cadastro);
    });
    c(".title-res h3").innerHTML = "Restaurantes perto de você:";
  } else {
    c(".title-res h3").innerHTML =
      "Desculpe. Ainda não temos opções nessa região!";
  }
  //console.log(listares);
}
/*let pesquisaValor = c("#pesquisa").value;
let teste = restaurante.filter(function (cos) {
  if (cos.endereco.cidade === pesquisaValor) {
    return true;
  } else {
    return true;
  }
});

console.log(teste);*/

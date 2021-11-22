sliderOpcoes.map((item, index) => {
  let slideItem = c('.models .slider--item').cloneNode(true);

  slideItem.querySelector('img').src = item.img;
  slideItem.querySelector('span').innerHTML = item.nome;


  c(".container-slider .sliders--width").append(slideItem);
});

let totalSlides = cs('.slider--item').length;
let currentSlide = 0;
let larguraslideitem = c('.slider--item').clientWidth;
c('.sliders--width').style.width = `calc(${larguraslideitem} * ${totalSlides})`;

function goPrev() {
  currentSlide--;
  if(currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMargin()
}

function goNext() {
  currentSlide++;
  if(currentSlide > (totalSlides - 6)){
    currentSlide = 0;
  }
  updateMargin()
}

function updateMargin() {
  let newMargin = (currentSlide * larguraslideitem + 10)
  c('.sliders--width').style.marginLeft = `-${newMargin}px`
}

setInterval(goNext, 5000);

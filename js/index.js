// event listener

window.addEventListener('load', () => {console.log('Page has loaded.')} );

document.body.addEventListener('keydown', function() {this.style.color = getRGB()});
document.body.addEventListener('keyup', function() {this.style.color = getRGB()});

const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', function() {this.style.color = getRGB()});

const nav = document.querySelector('.nav');
nav.addEventListener('mouseenter', function() {this.style['background-color'] = getRGB()});
nav.addEventListener('mouseleave', function() {this.style['background-color'] = getRGB()});

const p = document.querySelectorAll('p');
p.forEach(item => item.addEventListener('click', function() {this.style.color = getRGB()}));

const h2 = document.querySelectorAll('h2');
h2.forEach(item => item.addEventListener('mousemove', function() {this.style.color = getRGB()} ));

const h4 = document.querySelectorAll('h4');
h4.forEach(item => item.addEventListener('dblclick', function() {this.style.color = getRGB()} ));

const img = document.querySelectorAll('img');
img.forEach(item => item.addEventListener('drag', () => {console.log('Image is being dragged.')} ));


// stop propagation

document.body.addEventListener('click', function() {this.style['background-color'] = getRGB()});
h2.forEach(item => item.addEventListener('click', function(event) {
  this.style['background-color']= getRGB();
  event.stopPropagation();
}));


// prevent default

const anchorHome = document.querySelector('header nav a')
anchorHome.addEventListener('click', function(event) {
  this.style['background-color'] = getRGB();
  event.preventDefault();
  event.stopPropagation();
});


// functions

function getRGB() {
  const first = getRandomInt();
  const second = getRandomInt();
  const third = getRandomInt();

  return `rgb(${first}, ${second}, ${third})`
}

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(256));
}
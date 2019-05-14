document.addEventListener('load', console.log('Page has loaded.'));

document.body.addEventListener('keydown', function() {this.style.color = getRGB()});
document.body.addEventListener('keyup', function() {this.style.color = getRGB()});

const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', function() {this.style.color = getRGB()});

const nav = document.querySelector('.nav');
nav.addEventListener('mouseenter', function() {this.style['background-color'] = getRGB()});
nav.addEventListener('mouseleave', function() {this.style['background-color'] = getRGB()});

const p = document.querySelectorAll('p');
for (let i=0; i<p.length; i++) {
  p[i].addEventListener('click', function() {this.style.color = getRGB()});
}

const h2 = document.querySelectorAll('h2');
for (let i=0; i<h2.length; i++) {
  h2[i].addEventListener('mousemove', function() {this.style.color = getRGB()});
}

const h4 = document.querySelectorAll('h4');
for (let i=0; i<h4.length; i++) {
  h4[i].addEventListener('dblclick', function() {this.style.color = getRGB()});
}

const img = document.querySelectorAll('img');
for (let i=0; i<img.length; i++) {
  img[i].addEventListener('contextmenu', console.log('Image is being dragged.'));
}


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
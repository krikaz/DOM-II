const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', function() {this.style.color = 'red'});
logoHeading.addEventListener('dblclick', function() {this.style.color = 'blue'});

document.addEventListener('load', console.log('Page has loaded.'));

const nav = document.querySelector('.nav');
nav.addEventListener('mouseenter', function() {this.style['background-color'] = 'green'});
nav.addEventListener('mouseleave', function() {this.style['background-color'] = 'yellow'});

const p = document.querySelectorAll('p');
for (let i=0; i<p.length; i++) {
  p[i].addEventListener('click', function() {this.style.color = 'pink'});
}

document.body.addEventListener('keydown', function() {this.style.color = 'purple'});
document.body.addEventListener('keyup', function() {this.style.color = 'orange'});

const h2 = document.querySelectorAll('h2');
for (let i=0; i<h2.length; i++) {
  // h2[i].addEventListener('mouseenter', function() {this.style.color = 'rgb(150, 150, 150)'});
  h2[i].addEventListener('mousemove', function() {this.style.color = getRGB()});

}

function getRGB() {
  const first = getRandomInt();
  const second = getRandomInt();
  const third = getRandomInt();

  return `rgb(${first}, ${second}, ${third})`
}

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(256));
}
const section = document.querySelector("section");
const logo = document.querySelector('.logo');
const FPS = 60;

section.style.height = window.innerHeight + 'px';
section.style.width = window.innerWidth + 'px';

let xPosition = 10;
let yPosition = 10;
let xSpeed = 4;
let ySpeed = 4;

function update(){
  logo.style.left = xPosition + 'px';
  logo.style.top = yPosition + 'px';
}

function Border(){
  if(xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0){
    xSpeed = -xSpeed;
    logo.style.fill = randomColor();
  }
  if(yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0){
    ySpeed = -ySpeed;
    logo.style.fill = randomColor();
  }
}

setInterval(()=>( 
  Border(),
  yPosition += ySpeed, 
  xPosition += xSpeed,  
  update() 
  ),1000/FPS)

function randomColor(){
  let color = "#";
  color += Math.random().toString(16).slice(2,8).toUpperCase();
  console.log(color);
  return color;
}

window.addEventListener('resize', ()=>(
  xPosition = 10,
  yPosition = 10,
  section.style.height = window.innerHeight + 'px',
  section.style.width = window.innerWidth + 'px'
))
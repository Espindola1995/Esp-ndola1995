//criação
function setup() {
    createCanvas(1000, 1000);
    background("white");
  }
  //desenho
  function draw() {
    stroke("blue");
    fill("red");
  
    //mouse e direção
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  
  function setup() {
    createCanvas(400, 400);
    background(0, 0, 0);
    cor = color(random(0, 255), random(0, 255), random(0, 255));
  
    posicaoHorizontal = 0;
    posicaoVertical = random(height);
    posicaoHorizontal2 = 0;
    posicaoVertical2 = random(height);
  }
  
  function draw() {
    fill(cor);
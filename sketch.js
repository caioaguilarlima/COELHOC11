var garden,rabbit, apple, grass, leaf, orangeLeaf, path, redImage;
var gardenImg,rabbitImg, appleImg, grassImg, leafImg, orangeLeafImg, pathImg, redImageImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
  orangeLeafImg  = loadImage("orangeLeaf.png")
  redImageImg = loadImage("redImage.png")
}
  
  function setup(){
    createCanvas(400,400);
    
    garden = createSprite(200,200);
    garden.addImage(gardenImg);

    rabbit = createSprite(200,400,40,40);
    rabbit.addImage(rabbitImg);
    rabbit.scale = 0.09;

  }

  
  function draw() {
    background(0);
    edges = createEdgeSprites();
    rabbit.collide(edges);
    rabbit.x = World.mouseX;
    drawSprites();
    criarfolhasverdes();
    criarfolhaslaranjas();
    criarMacas();
    var selecionar_objetos = Math.round(random(1,3)); 
  }

  if ((frameCount % 80 == 0)) {
    var randNumber = Math.round(random(10, 80));
  selecionar_objetos = createSprite(600, 100, 40, 10);
  selecionar_objetos.y = randNumber;
  }
 

  function criarfolhasverdes() {
    leaf = createSprite(330,50,30,30);
    leaf.addImage(leafImg);
    leaf.scale = 0.05;
    leaf. velocityY = 3;
  }

  function criarfolhaslaranjas() {
    
      orangeLeaf = createSprite(120,50,30,30);
      orangeLeaf.addImage(orangeLeafImg);
      orangeLeaf.scale = 0.05;
      orangeLeaf.velocityY = 3;
  
      
  }

  function criarMacas() {
  
      apple = createSprite(250,50,30,30);
      apple.addImage(appleImg);
      apple.scale = 0.05;
      apple.velocityY = 3;

  }
if (condition) {
  criarMacas();
} else {
  criarfolhasverdes();
  criarfolhaslaranjas();
}

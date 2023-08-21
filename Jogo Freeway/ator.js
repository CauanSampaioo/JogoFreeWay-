let xAtor = 85;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}


function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMoverDown()){
     yAtor += 3; 
    }
  }
  
  if(keyIsDown(LEFT_ARROW)){
    if(podeSeMoverLeft()){
      xAtor -= 3;
    }
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    if(podeSeMoverRight()){
      xAtor += 3;
    }
  }
}

function re(){
  if(yAtor < -18){
    xAtor = 85;
    yAtor = 370;
    meusPontos += 1;
    somDoPonto.play();
  }
}
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 20)
    if (colisao){
      colidiu();
      somDaColisao.play();
    }
  }
}

function colidiu (){
  xAtor = 85;
  yAtor = 370;
  if( meusPontos > 0){
    meusPontos += -1;
  }
}

function incluiPontos (){
  textAlign(CENTER)
  textSize(25);  
  fill(color(255,240,60))
  text(meusPontos, width/5, 27)
}

function podeSeMoverDown (){
  return yAtor < 370;
}

function podeSeMoverLeft(){
  return xAtor >0;
}

function podeSeMoverRight (){
  return xAtor < 470;
}
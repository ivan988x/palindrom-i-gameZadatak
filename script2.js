var player = 1;
var numbers = 100;
var rotation = false;
for (let i = 1; i <= numbers; i++) {
  if (i % 7 === 0){
    rotation = !rotation;
  }else{
      player = !player;
    }
    

  if (i % 13 === 0) {
    if(rotation){
      player = player - 1;
    }
    else {
      player = player + 1;
    }
  }
  
  if(player < 1) {
    player = 10;
  } else if(player > 10) {
    player = 1;
  }

}

console.log(player);
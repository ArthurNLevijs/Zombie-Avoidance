// var character;

window.onload = function() {


  document.getElementById("start-button").onclick = function() {
    
    startGame();
    drawEverything([character])

  };


  var ctx = document.getElementById('canvas').getContext('2d');

  function startGame() {
    
    character = {
      x: 200,
      y: 600,
      width: 50,
      height: 80,
      imageSource: "./images/herov1.jpg"
      
    }
    

    character.draw = function()  {
      console.log(this)

      var theImage = new Image();
      theImage.src = this.imageSource;
      
      theImage.onload = ()=>{
        ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
        ctx.clearRect(theImage, this.x, this.y, this.width, this.height);
      }

    }

    character.moveUp = function(){

      if(this.x, this.y - 10){
        ctx.clearRect(this.x, this.y, this.width, this.height);
        this.y-= 10;
        this.draw();
      }


    }

    character.moveDown = function(){

      if(this.x, this.y + 10){

          ctx.clearRect(this.x, this.y, this.width, this.height);
          this.y+= 10;
          this.draw();
      }
    }

    character.moveRight = function(){

      if(this.x + 10, this.y){

          ctx.clearRect(this.x, this.y, this.width, this.height);
          this.x+= 10;
          this.draw();
      }
    }

    character.moveLeft = function(){
      if(this.x - 10, this.y){

          ctx.clearRect(this.x, this.y, this.width, this.height);
          this.x-= 10;
          this.draw();

      }
    }


  }


  function drawEverything(arrayOfEverything){

    arrayOfEverything.forEach(eachThing => {
        eachThing.draw();
    });


  }



  document.onkeydown = (e) =>{

    console.log(e.key)

    switch(e.key){
      case 'ArrowUp':
      character.moveUp();
      break;
      case 'ArrowDown':
      character.moveDown();
      break;
      case 'ArrowLeft':
      character.moveLeft();
      break;
      case 'ArrowRight':
      character.moveRight();
      break;

    }

    


  };

};
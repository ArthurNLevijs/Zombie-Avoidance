let theGame;
// timertimertimertimertimertimertimertimertimertimertimertimertimertimertimertimertimer
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
// timertimertimertimertimertimertimertimertimertimertimertimertimertimertimertimertimer
window.onload = function() {

class Game {
  constructor() {

this.character = new Character()
this.zombies = []
this.zombies2 = []
this.zombies3 = []
// this.character.draw()
// this.zombies.forEach((zomb)=>zomb.draw())

// timertimertimertimertimertimertimertimertimertimertimertimertimertimertimertimertimer
setInterval(setTime, 1000);
function setTime() {
  totalSeconds+=1;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}



  }
  pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }
// timertimertimertimertimertimertimertimertimertimertimertimertimertimertimertimertimer
  collisionCheck(){
    this.zombies.forEach((eachZombie)=>{
      if((this.character.x + this.character.width >= eachZombie.x && this.character.x <= eachZombie.x+eachZombie.width) &&
      (this.character.y + this.character.height >= eachZombie.y && this.character.y <= eachZombie.y+eachZombie.height)   ){
        alert(`You have been eatin' by zombies! You laster ${this.pad(parseInt(totalSeconds / 60))} mins ${this.pad(totalSeconds % 60)} secs!`)
        location.reload()
        // startGame()
        
      }
    })
  }


  drawEverything() {
  this.character.draw()
  this.zombies.forEach((oneZomb)=>{
    oneZomb.draw()
  })
}

spawnNewZombiesLeft() {
  const theX = 0;
  const theY = 50 + Math.floor(Math.random()*800)

  // const theWidth = Math.floor(Math.random()*192)
  // const theHeight = Math.floor(Math.random()*287)
  const theWidth = 50
  const theHeight = 100

  this.zombies.unshift( new Zombie(theX, theY, theWidth, theHeight))
  this.zombies[0].runAccrossTheScreenLeft()
  
}


spawnNewZombiesRight() {
  const theX = 900;
  const theY = 50+Math.floor(Math.random()*800)

  // const theWidth = Math.floor(Math.random()*192)
  // const theHeight = Math.floor(Math.random()*287)
  const theWidth = 50
  const theHeight = 100

  this.zombies.unshift( new Zombie2(theX, theY, theWidth, theHeight))
  this.zombies[0].runAccrossTheScreenRight()
}

spawnNewZombiesFast() {
  const theX = 900;
  const theY = 50+Math.floor(Math.random()*800)

  // const theWidth = Math.floor(Math.random()*192)
  // const theHeight = Math.floor(Math.random()*287)
  const theWidth = 50
  const theHeight = 100

  this.zombies.unshift( new Zombie3(theX, theY, theWidth, theHeight))
  this.zombies[0].runAccrossTheScreenRight()
}

}





class Character{
constructor() {
this.x = 500
this.y = 400
this.width = 50
this.height = 80
this.imageSource = "./images/mainCharacter.gif"

}

draw() {
var theImage = new Image()
theImage.src = this.imageSource

// theImage.onload = () => {
  ctx.drawImage(theImage, this.x, this.y, this.width, this.height)
// }

}


moveUp() {
  if (this.y === 0) {
  } else {
  this.y -= 25
  }
}

moveDown() {
  if (this.y === 725) {
  } else {
  this.y += 25
  }
}

moveRight() {
  if(this.x === 950) {
  } else {
    this.x += 25
  }
}

moveLeft() {
  if (this.x === 0) {
  } else {
    this.x -= 25
    
  }
}

moveUpRight() {
  this.x += 25
  this.y -= 25
}

moveUpLeft() {
  this.x -= 25
  this.y -= 25
}

moveDownRight() {
  this.x += 25
  this.y += 25
}

moveDownLeft() {
  this.x -= 25
  this.y += 25
}

// checkMove(futureX, futureY) {

//   var valid = (futureX > 0 && (futureX + this.width) < 400 && futureY > 0 && (futureY + this.height) < 800)
//   theZombie.forEach((eachZombie) => {

// if( (futureX + this.width >= eachZombie.x && futureX <= eachZombie.x+eachZombie.width) &&

// (futureY + this.height >= eachZombie.y && futureY <= eachZombie.y+eachZombie.height) ) {

//   valid = false
// }

//   })
//   return valid
// }

}



class Zombie{
  constructor(theX, theY, theWidth, theHeight) {
    this.x = theX
    this.y = theY
    this.width = theWidth
    this.height = theHeight
    this.imageSource = "./images/soldierZombie.png";
  }

  draw() {
    // ctx.fillRect(this.x, this.y, this.width, this.height)
    var theImage = new Image();
    theImage.src = this.imageSource;

    ctx.drawImage(theImage, this.x, this.y, this.width, this.height)

  }

  runAccrossTheScreenLeft(){
    setInterval(() => {
      this.x +=10;
      // this.y +=10;
    },50)
  }

  // runAccrossTheScreenRight(){
  //   setInterval(() => {
  //     this.x -=10;
  //     // this.y +=10;
  //   },50)
  // }

}

class Zombie2{
  constructor(theX, theY, theWidth, theHeight) {
    this.x = theX
    this.y = theY
    this.width = theWidth
    this.height = theHeight
    this.imageSource = "./images/captainZombie.png";
  }

  draw() {
    // ctx.fillRect(this.x, this.y, this.width, this.height)
    var theImage = new Image();
    theImage.src = this.imageSource;

    ctx.drawImage(theImage, this.x, this.y, this.width, this.height)

  }

  // runAccrossTheScreenLeft(){
  //   setInterval(() => {
  //     this.x +=10;
  //     // this.y +=10;
  //   },50)
  // }

  runAccrossTheScreenRight(){
    setInterval(() => {
      this.x -=10;
      // this.y +=10;
    },50)
  }

}

class Zombie3{
  constructor(theX, theY, theWidth, theHeight) {
    this.x = theX
    this.y = theY
    this.width = theWidth
    this.height = theHeight
    this.imageSource = "./images/rangerZombie.png";
  }

  draw() {
    // ctx.fillRect(this.x, this.y, this.width, this.height)
    var theImage = new Image();
    theImage.src = this.imageSource;

    ctx.drawImage(theImage, this.x, this.y, this.width, this.height)

  }

  // runAccrossTheScreenLeft(){
  //   setInterval(() => {
  //     this.x +=10;
  //     // this.y +=10;
  //   },50)
  // }

  runAccrossTheScreenRight(){
    setInterval(() => {
      this.x -=10;
      // this.y +=10;
    },25)
  }

}

var ctx = document.getElementById("canvas").getContext("2d")

document.getElementById('start-button').onclick = function() {
  startGame()

  animate()
}



function startGame() {
theGame = new Game()

}


let frames = 0

function animate() {

  // setInterval(() => {
    ctx.clearRect(0,0,1000,800)
    theGame.drawEverything()
    if(frames % 100 === 0)theGame.spawnNewZombiesLeft();
    if(frames % 100 === 1)theGame.spawnNewZombiesRight();
    if(frames % 100 === 1)theGame.spawnNewZombiesFast();
    theGame.collisionCheck()
    frames++
  // },50)

  window.requestAnimationFrame(animate)
}



document.onkeydown = (e) => {
// var map = {37: false, 38: false, 39: false, 40: false}
// if(e.keyCode in map) {
//   map[e.keyCode] = true;
//   if(map[38] && map[39]) {
//     theGame.character.moveUpRight()
//   }
// }
//   console.log(e.key);
//   console.log(map);

switch(e.key) {
  case 'w':
  // case 'ArrowUp':
  e.preventDefault()
  theGame.character.moveUp()
  break;
  
  case 's':
  // case 'ArrowDown':
  e.preventDefault()
  theGame.character.moveDown()
  break;

  case 'a':
  // case 'ArrowLeft':
  e.preventDefault()
  theGame.character.moveLeft()
  break;

  case 'd':
  // case 'ArrowRight':
  e.preventDefault()
  theGame.character.moveRight()
  break;

  case 'e':
  e.preventDefault()
  theGame.character.moveUpRight()
  break;

  case 'q':
  e.preventDefault()
  theGame.character.moveUpLeft()
  break;

  case 'z':
  e.preventDefault()
  theGame.character.moveDownLeft()
  break;

  case 'c':
  e.preventDefault()
  theGame.character.moveDownRight()
  break;

  // case 'w':
  case 'ArrowUp':
  e.preventDefault()
  theGame.character.moveUp()
  break;
  
  // case 's':
  case 'ArrowDown':
  e.preventDefault()
  theGame.character.moveDown()
  break;

  // case 'a':
  case 'ArrowLeft':
  e.preventDefault()
  theGame.character.moveLeft()
  break;

  // case 'd':
  case 'ArrowRight':
  e.preventDefault()
  theGame.character.moveRight()
  break;

}
}
}

let theGame;
window.onload = function() {

class Game {
  constructor() {

this.character = new Character()
this.zombies = []
// this.character.draw()
// this.zombies.forEach((zomb)=>zomb.draw())


  }

  collisionCheck(){
    this.zombies.forEach((eachZombie)=>{
            if((this.character.x + this.character.width >= eachZombie.x && this.character.x <= eachZombie.x+eachZombie.width) &&
            (this.character.y + this.character.height >= eachZombie.y && this.character.y <= eachZombie.y+eachZombie.height)   ){
              console.log('col det')
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
  const theY = 50+Math.floor(Math.random()*800)

  // const theWidth = Math.floor(Math.random()*192)
  // const theHeight = Math.floor(Math.random()*287)
  const theWidth = 80
  const theHeight = 160

  this.zombies.unshift( new Zombie(theX, theY, theWidth, theHeight))
  this.zombies[0].runAccrossTheScreenLeft()
}


spawnNewZombiesRight() {
  const theX = 900;
  const theY = 50+Math.floor(Math.random()*800)

  // const theWidth = Math.floor(Math.random()*192)
  // const theHeight = Math.floor(Math.random()*287)
  const theWidth = 80
  const theHeight = 160

  this.zombies.unshift( new Zombie(theX, theY, theWidth, theHeight))
  this.zombies[0].runAccrossTheScreenRight()
}

}



class Character{
constructor() {
this.x = 800
this.y = 600
this.newx = 200
this.newy = 550
this.width = 50
this.height = 80
this.imageSource = "./images/herov2.gif"

}

draw() {
var theImage = new Image()
theImage.src = this.imageSource

// theImage.onload = () => {
  ctx.drawImage(theImage, this.x, this.y, this.width, this.height)
// }

}


moveUp() {
  this.y -= 20
}

moveDown() {
  this.y += 20
}

moveRight() {
  this.x += 20
}
moveLeft() {
  this.x -= 20
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
    this.imageSource = "./images/image.png";
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
    },40)
  }

  runAccrossTheScreenRight(){
    setInterval(() => {
      this.x -=10;
      // this.y +=10;
    },40)
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
    if(frames % 100 === 1)theGame.spawnNewZombiesRight()
    theGame.collisionCheck()
    frames++
  // },50)

  window.requestAnimationFrame(animate)
}



document.onkeydown = (e) => {

switch(e.key) {
  case 'ArrowUp':
  e.preventDefault()
  theGame.character.moveUp()
  break;
  
  case 'ArrowDown':
  e.preventDefault()
  theGame.character.moveDown()
  break;

  case 'ArrowLeft':
  e.preventDefault()
  theGame.character.moveLeft()
  break;

  case 'ArrowRight':
  e.preventDefault()
  theGame.character.moveRight()
  break;
}
}
}
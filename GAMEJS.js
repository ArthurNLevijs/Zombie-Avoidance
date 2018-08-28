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
              alert("game over")
            }
    })
  }

drawEverything() {
  this.character.draw()
  this.zombies.forEach((oneZomb)=>{
    oneZomb.draw()
  })
}

spawnNewZombies() {
  const theX = 0
  const theY = Math.floor(Math.random()*800)
  const theWidth = Math.floor(Math.random()*100)
  const theHeight = Math.floor(Math.random()*100)
  this.zombies.unshift( new Zombie(theX, theY, theWidth, theHeight))
  this.zombies[0].runAccrossTheScreen()
}

}



class Character{
constructor() {
this.x = 200
this.y = 600
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
  this.y -= 10
}

moveDown() {
  this.y += 10
}

moveRight() {
  this.x += 10
}
moveLeft() {
  this.x -= 10
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
  }

  draw() {
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  runAccrossTheScreen(){
    setInterval(() => {
      this.x +=10
    },50)
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
    if(frames % 100 === 0)theGame.spawnNewZombies()
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
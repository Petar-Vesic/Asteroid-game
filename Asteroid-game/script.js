// stars

const stars = []
const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

function init() {
  const banner = document.getElementById('banner')
  canvas.width = banner.offsetWidth
  canvas.height = banner.offsetHeight
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random(),
      y: Math.random(),
      size: Math.random(),
      change: 0.15,
    })
  }
}
function update() {
  for (const star of stars) {
    star.x += 0.0001
    if (star.x > 1) {
      star.x = 0
    }
    if (star.size < 0.7) {
      star.change = 0.001
    } else if (star.size > 0.9) {
      star.change = -0.1
    }
    star.size += star.change
  }
}
function render() {
  const { width, height } = canvas
  context.clearRect(0, 0, width, height)
  for (const star of stars) {
    context.beginPath()
    context.arc(
      star.x * width,
      star.y * height,
      star.size * 3,
      0,
      2 * Math.PI,
      false
    )
    context.fillStyle = 'white'
    context.fill()
  }
}

function twinkle() {
  update()
  render()
}

setInterval(twinkle, 1)
init()

render()

// player

const keys = []
const player = {
  x: 200,
  y: 200,
  width: 260,
  height: 280,
  frameX: 0,
  frameY: 0,
  speed: 2,
}
const playerSprite = new Image()
playerSprite.src = './img/Group 1.png'

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  context.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
}

setInterval(function () {})
window.addEventListener('keydown', function (e) {
  keys[e.keyCode] = true
})
window.addEventListener('keyup', function (e) {
  delete keys[e.keyCode]
})
function movePlayer() {
  if (keys[38] && player.y > 0) {
    player.y -= player.speed
  }
  if (keys[37] && player.x > 0) {
    player.x -= player.speed
  }
  if (keys[40] && player.y) {
    player.y += player.speed
  }
  if (keys[39] && player.x < canvas.width - player.width) {
    player.x += player.speed
  }
}

function animate() {
  drawSprite(
    playerSprite,
    0,
    0,
    player.width,
    player.height,
    player.x,
    player.y,
    player.width,
    player.height
  )
  movePlayer()
  requestAnimationFrame(animate)
}
animate()

const asteroid1 = document.getElementById('asteroid3')
const touch = () => {
  if (player == asteroid1) {
    asteroid1.addEventListener('hello ')
  }
}

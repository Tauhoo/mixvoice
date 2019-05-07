function Animations(number, pixelX, pixelY) {
  this.pixelX = pixelX
  this.pixelY = pixelY
  this.animations = new Array(number).map(() => [
    new Array(pixelX * pixelY).fill(0),
  ])

  this.frames = new Array(number).map(animation => ({
    frame: 0,
    length: animation.length,
  }))
}

Animation.prototype.onNext = buttons => {
  this.frames = this.frames.map(({ length, frame }, index) => {
    return {
      length,
      frame: frame === length - 1 || buttons[index] === 0 ? 0 : frame + 1,
    }
  })
}

Animation.prototype.setFrame = (animation, frame) => {
  this.frames[frame] = { frame: 0, length: animation.length }
  this.animation[frame] = animation
}

Animation.prototype.getFrame = () => {
  let result = []
  for (let i = 0; i < this.pixelX * this.pixelY; i++) {
    let bit = 0
    this.frames.forEach(({ frame }, index) => {
      bit |= this.animations[index][frame]
    })
    result.push(bit)
  }
  return result
}

module.exports = Animations

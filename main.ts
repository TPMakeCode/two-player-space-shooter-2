namespace SpriteKind {
    export const projectile2 = SpriteKind.create()
    export const enemy4 = SpriteKind.create()
    export const enemy3 = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
    export const enemy1 = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        5 5 4 5 5 4 5 5 4 5 4 5 5 5 4 5
    `, spaceplane2, 200, 0)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        8 8 7 8 8 7 8 8 8 7 8 8 8 8 7 8
    `, spaceplane, 200, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 7 8 8 7 8 8 8 8 8 . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, spaceplane, 200, 0)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 4 5 5 5 4 5 5 5 5 . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, spaceplane2, 200, 0)
    dart.setKind(SpriteKind.projectile2)
})
sprites.onOverlap(SpriteKind.projectile2, SpriteKind.enemy1, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    sprite.destroy()
    music.pewPew.playUntilDone()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy1, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    sprite.destroy()
music.powerDown.playUntilDone()
info.player1.changeScoreBy(5)
})
sprites.onOverlap(SpriteKind.projectile2, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(5)
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy1, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
music.pewPew .playUntilDone()
    if (spaceplane == sprite) {
        info.changeLifeBy(-1)
    } else {
        info.player2.changeLifeBy(-1)
    }
    if (info.life() == 0) {
        game.splash("PLAYER 2 WIN ! 🤣")
        game.setDialogTextColor(8)
        game.over(false, effects.splatter)
    } else if (info.player2.life() == 0) {
        game.splash("PLAYER 1 WIN !🤣")
        game.setDialogTextColor(9)
        game.over(false, effects.melt)
    } else {
    	
    }
})
let bogey: Sprite = null
let ship: Sprite = null
let dart: Sprite = null
let projectile: Sprite = null
let spaceplane2: Sprite = null
let spaceplane: Sprite = null
spaceplane = sprites.create(img`
    ........88888...................
    ......8888.8888888888888........
    ......8..8.8....888...77........
    ......8....8..88888888887.......
    4448888777.8888877778.88........
    444...8....88.888.77.88.8.......
    44....8..8888..88....8888.......
    ......888888..78.887...88.......
    .4....8..77777787..8.7788.......
    448888788......8..7.8..88.......
    44....8.88888788...78..888......
    ..88888..7..78887...8888.8......
    ..888888888888888778788888......
    ................................
    ................................
    ................................
`, SpriteKind.Player)
spaceplane2 = sprites.create(img`
    ................................
    ................................
    .............888................
    .............8.8................
    ............8..8................
    ............8...88..............
    ...........8.....8..............
    ...........8999...8.............
    .42.......889.9...99............
    4.44....555.999...999...........
    4244555555..99....9889..........
    ........55...2ee..99899.........
    ........55....55...9.89.........
    ........5..........999.5........
    .444...55....555.......5........
    ..4455522555555555555555........
`, SpriteKind.Player)
spaceplane.setFlag(SpriteFlag.StayInScreen, true)
spaceplane2.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(5)
info.player2.setLife(5)
animation.runImageAnimation(
spaceplane,
[img`
    ........88888...................
    ......8888.8888888888888........
    ......8..8.8....888...77........
    ......8....8..88888888887.......
    4248888777.8888877778.88........
    244...8....88.888.77.88.8.......
    22....8..8888..88....8888.......
    ......888888..78.887...88.......
    .4....8..77777787..8.7788.......
    748888788......8..7.8..88.......
    24....8.88888788...78..888......
    ..88888..7..78887...8888.8......
    ..888888888888888778788888......
    ................................
    ................................
    ................................
`,img`
    ........88888...................
    ......8888.8888888888888........
    ......8..8.8....888...77........
    ......8....8..88888888887.......
    4448888777.8888877778.88........
    444...8....88.888.77.88.8.......
    44....8..8888..88....8888.......
    ......888888..78.887...88.......
    .4....8..77777787..8.7788.......
    448888788......8..7.8..88.......
    44....8.88888788...78..888......
    ..88888..7..78887...8888.8......
    ..888888888888888778788888......
    ................................
    ................................
    ................................
`],
500,
true
)
animation.runImageAnimation(
spaceplane2,
[img`
    ................................
    ................................
    .............888................
    .............8.8................
    ............8..8................
    ............8...88..............
    ...........8.....8..............
    ...........8999...8.............
    .44.......889.9...99............
    4524....555.999...999...........
    4454555555..99....9889..........
    5.......55....ee..99899.........
    ........55....55...9.89.........
    ........5..........999.5........
    .445...55....555.......5........
    .22455555555555555555555........
`,img`
    ................................
    ................................
    .............888................
    .............8.8................
    ............8..8................
    ............8...88..............
    ...........8.....8..............
    ...........8999...8.............
    .44.......889.9...99............
    4544....555.999...999...........
    4444555555..99....9889..........
    ........55....ee..99899.........
    ........553...55...9.89.........
    ........5..........999.5........
    .444...55....555.......5........
    .54455555555555555555555........
`],
500,
true
)
controller.moveSprite(spaceplane, 200, 200)
controller.player2.moveSprite(spaceplane2, 200, 200)
effects.starField.startScreenEffect()
game.onUpdateInterval(5000, function () {
    ship = sprites.create(img`
        . . . . . . . . . . . 3 . . . .
        . . . . . . . . . . 3 3 . . . .
        . . . . . . . . 3 3 . . . . . 3
        . . . . . . . 3 3 9 9 9 . . 3 .
        . . . . . . 1 1 1 1 1 3 3 3 . .
        . . . a a a a 1 1 1 1 3 1 1 . .
        . . . a a 1 f a 1 1 1 1 1 1 . .
        . . . a a f f a 1 1 1 1 1 1 . .
        . . a a a f a a 1 1 1 1 1 1 . .
        . . a a a f f a 1 1 1 1 1 1 . .
        . . a a a 1 f a 1 1 1 1 1 1 . .
        . . a a a a a 1 1 1 1 1 1 1 . .
        . . a a a a a 1 1 1 1 1 3 1 . .
        . . a a a a . . . . 1 1 . . . .
        . . . . a . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.enemy1)
    ship.setVelocity(-100, 0)
    ship.left = scene.screenWidth()
    ship.y = randint(0, scene.screenHeight())
    ship.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(2000, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . 3 3 3 . . 3 3 . . .
        . . . . . 3 3 3 3 . . 3 3 . . .
        . . . . 3 3 3 3 3 . 3 f 3 . . .
        . . . . 3 3 3 f 3 3 3 3 3 . . .
        . . . . . 3 3 3 3 3 3 1 3 . . .
        . . . . . . 3 3 3 3 3 1 3 . . .
        . . . . . . 3 3 1 1 3 1 3 3 . .
        . . . . . . . 3 3 1 1 1 3 3 . .
        . . . . . . . 3 3 3 3 3 3 3 . .
        . . . . . . . . 3 3 3 3 3 . . .
        . . . . . . . . . . 3 3 . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.left = scene.screenWidth()
    bogey.y = randint(0, scene.screenHeight())
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . 5 5 . . . . . . . .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . 5 5 5 5 5 . . . . . .
        . . . 5 5 5 f 5 f 5 5 5 5 5 5 .
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 .
        . . 5 5 5 5 1 5 5 1 1 . . . . .
        . . 5 5 5 5 1 1 5 5 1 . . . . .
        . . . . 5 5 5 5 1 1 5 . . . . .
        . . . . 5 5 . . 5 5 5 . . . . .
        . . . . . . . . . . 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.left = scene.screenWidth()
    bogey.y = randint(0, scene.screenHeight())
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . c c c a c . . . .
        . . c c b b b a c a a a c . . .
        . c c a b a c b a a a b c c . .
        . c a b c f f f b a b b b a . .
        . c a c f f f 8 a b b b b b a .
        . c a 8 f f 8 c a b b b b b a .
        c c c a c c c c a b c f a b c c
        c c a a a c c c a c f f c b b a
        c c a b 6 a c c a f f c c b b a
        c a b c 8 6 c c a a a b b c b c
        c a c f f a c c a f a c c c b .
        c a 8 f c c b a f f c b c c c .
        . c b c c c c b f c a b b a c .
        . . a b b b b b b b b b b b c .
        . . . c c c c b b b b b c c . .
        . . . . . . . . c b b c . . . .
    `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.left = scene.screenWidth()
    bogey.y = randint(0, scene.screenHeight())
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
music.sonar.playUntilDone()
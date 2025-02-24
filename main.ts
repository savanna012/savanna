let buddy: Sprite = null
game.setGameOverEffect(true, effects.hearts)
animation.runImageAnimation(
buddy,
[img`
    6 d d 6 6 6 6 6 6 6 d d 6 6 6 a 
    d d d d 6 6 6 6 6 d d d d d a 7 
    d d d d d 6 7 7 d d d d d a 7 7 
    6 6 6 6 6 4 7 4 6 6 6 6 a 7 7 a 
    6 6 6 6 6 7 7 7 7 6 6 6 6 a 7 7 
    6 6 5 6 7 7 7 4 7 6 2 6 6 6 7 e 
    6 7 7 7 6 4 7 7 6 2 7 2 6 6 6 e 
    6 5 7 5 6 7 e 4 2 7 7 7 2 6 6 e 
    3 6 e 6 6 6 e 6 6 2 7 2 6 6 6 e 
    5 3 e e 6 6 e 6 e 6 e 6 6 3 6 e 
    3 6 e e e 6 e e 6 3 e e 3 5 3 e 
    e e e 7 7 3 7 e 3 5 3 7 7 3 e 3 
    7 7 3 7 3 5 3 7 7 3 7 7 7 e 3 5 
    7 3 5 3 7 3 7 7 7 e 7 3 7 7 7 3 
    7 7 3 7 7 e 7 7 7 7 3 5 3 7 7 e 
    7 7 e 7 7 7 7 7 7 7 7 3 7 7 7 7 
    `],
500,
true
)
light.setAll(0xff0080)

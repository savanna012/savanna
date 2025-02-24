// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level0":
            case "level2":return tiles.createTilemap(hex`1000100003020206020202020202020202020604050505050506050506050506050505050505060505050505050505050505050505050505050505060505060505050605060505060505050505050505050505050909090909010909090601090909090609060909090909090909010906090909090109090909060909090909090909090609090609090909060906090901060a0a080909090a0a0a0a0a0a0a09090a0807070a0a0a08060a0a080a0a060a0a0607060707070707070607070a080a0a0707070708060707070707070707070707080707070707080707070807070708070707080707070707070707070707070708070707080707070807070807070708`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 . 2 . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass3], TileScale.Sixteen);
            case "level":
            case "level1":return tiles.createTilemap(hex`10001000030202060202020202020201020206040105050505060505060505060505050c0b0506050105050505010505050505010b05050505050506050506050505060c0605050605050505050505050105050c010909090901090909060109090909060b0609090909090909090109060909010b01090909090609090909090909090c0609080609090809060906090801060c0b080909090a0a0a0a0a0a0a09090a0c0b070a0a0a08060a0a080a0a060a0a0608060707070707070607070a080a0a080b07070806070707070707070707070c0b07070707070807070708070707080c0b07080707070707070707070707070c0d0e0e0e08080e0e0e0e0e0e0e080e0c`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 . 2 . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass3,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

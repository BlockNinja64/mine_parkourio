// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Level0":
            case "level1":return tiles.createTilemap(hex`20000a000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000050607000000000000000000030000000000000005060607000000000000000100000001000506060700000003050606060606070000000000050606060607000000000000000000000100000300000000000000000000000000000000000000000000000000000000000100030000000000000000000000000000000000000000000000000000000000000104000000000000000000000000000000000000000000000000000000000000000002020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
................................
................................
...................222..........
.......2222.......2...2.2222....
2222222.....222222..........2...
.............................2..
..............................22
................................
................................
................................
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.dungeon.hazardLava1,myTiles.tile1,myTiles.tile2,sprites.builtin.forestTiles21,sprites.builtin.forestTiles22,sprites.builtin.forestTiles23], TileScale.Sixteen);
            case "Level1":
            case "level3":return tiles.createTilemap(hex`40000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000200000000000000000000000000000000000000000000000000000000000000000000000000000400000005060700000000000000000000000004000000000002000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000050700000000000000020000000000000000000000000000000000000000000000000005060700000000000000000400000000000000000000000506060700000000000000000000000205060606070000000506070000000506070000000005060700000000000000000506060700000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
................................................................
...........................................................2....
..........................................................2.....
......................................2...222............2......
.....................................2................22........
.........................222........2...........2222............
22222...222...222....222........2222......................222222
................................................................
................................................................
................................................................
`, [myTiles.transparency16,sprites.dungeon.hazardLava1,myTiles.tile1,myTiles.tile2,sprites.builtin.forestTiles0,sprites.builtin.forestTiles21,sprites.builtin.forestTiles22,sprites.builtin.forestTiles23], TileScale.Sixteen);
            case "Level2":
            case "Level2":return tiles.createTilemap(hex`10004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0000000000000000000000000000000b00000809090909090909090909090909070000000000000000000000000000000008090909090a000000000000000000000000000000000008090909090a00000000000000000000000000000000000700000008090909090909090909090a0007000000000000000000000000000000000809090a00000700070008090a00000000000000000000000000000000000700000000000000000000080909090a0007000000080909090a00000000000000000700000000000000000000000000000000070000000000000b00000000000000000007000000000000000000000000000000000700000000000000000000000000000000070000000000000000000000000000000007000000000000000000000000000000000700000000000000000000000000000000000809090a0000000000000000000000000000000000000506000000000000000000000203030400050000000002030304000000000000000000000000000000000008090303030300000002030303030304000000000000020400000000000000000000000000000000020303030303040000000000000000000000000000000000000203030303000000000000000000000700000000000303030303030303030400000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
..22222222222222
2...............
.222222.........
........222222..
...............2
...222222222222.
2...............
.2222..2.2.222..
...............2
..........22222.
2...22222.......
.2..............
..2.............
...2............
....2...........
.....2..........
......2.........
.......2........
.........2222...
...............2
...........2222.
2....2222.......
..........222222
...2222222......
22..............
..2222222.......
...........22222
..........2.....
2222222222......
................
................
................
................
................
................
................
`, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.builtin.forestTiles21,sprites.builtin.forestTiles22,sprites.builtin.forestTiles23,sprites.builtin.forestTiles0,sprites.dungeon.collectibleRedCrystal,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile2,myTiles.tile11], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Finish line":
            case "tile1":return tile1;
            case "forestTiles0":
            case "tile3":return tile3;
            case "forestTiles21":
            case "tile4":return tile4;
            case "forestTiles22":
            case "tile5":return tile5;
            case "forestTiles23":
            case "tile6":return tile6;
            case "collectibleRedCrystal":
            case "tile7":return tile7;
            case "collectibleBlueCrystal":
            case "tile8":return tile8;
            case "Finish line turn":
            case "tile11":return tile11;
            case "Finish Block":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

namespace SpriteKind {
    export const map = SpriteKind.create()
    export const Star = SpriteKind.create()
    export const turnimage = SpriteKind.create()
    export const engine = SpriteKind.create()
    export const drone = SpriteKind.create()
    export const background = SpriteKind.create()
}
namespace StatusBarKind {
    export const Fuel = StatusBarKind.create()
}
function attack () {
    engine_attack = engines._pickRandom()
    if (engine_attack == e_1) {
        if (e_1 == false) {
            attack()
        } else {
            Notification.notify("The warship fires at Engine 1", 2)
            e_1 = false
        }
    } else if (engine_attack == e_2) {
        if (e_2 == false) {
            attack()
        } else {
            Notification.notify("The warship fires at Engine 2", 2)
            e_2 = false
        }
    } else if (engine_attack == e_3) {
        if (e_3 == false) {
            attack()
        } else {
            Notification.notify("The warship fires at Engine 3", 2)
            e_3 = false
        }
    } else if (engine_attack == e_4) {
        if (e_4 == false) {
            attack()
        } else {
            Notification.notify("The warship fires at Engine 4", 2)
            e_4 = false
        }
    } else if (e_2 == false && e_1 == false && (e_3 == false && e_4 == false)) {
        Notification.notify("The Warship fires at the hull of your ship destroying it instantly", 2, img`
            b c c c c c c 1 
            c 2 2 2 2 2 2 b 
            c f f f f f f b 
            c f 4 4 4 4 f b 
            c f f f f f f b 
            c f f 5 5 f f b 
            c f f f f f f b 
            1 b b b b b b c 
            `)
        Notification.notify("Unfortunately, you perished in the explosion", 2, img`
            b c c c c c c 1 
            c 2 2 2 2 2 2 b 
            c f f f f f f b 
            c f 4 4 4 4 f b 
            c f f f f f f b 
            c f f 5 5 f f b 
            c f f f f f f b 
            1 b b b b b b c 
            `)
        myMenu.close()
        Notification.notify("You collected: " + convertToText(Uranium) + " Uranium", 2, img`
            7 7 7 7 7 7 7 7 
            7 5 7 5 5 7 5 7 
            7 7 5 1 1 5 7 7 
            7 5 1 1 1 1 5 7 
            7 5 1 1 1 1 5 7 
            7 7 5 1 1 5 7 7 
            7 5 7 5 5 7 5 7 
            7 7 7 7 7 7 7 7 
            `)
        Notification.notify("You collected: " + convertToText(Meteoriron) + " Meteoriron", 2, img`
            5 4 5 4 4 5 4 5 
            4 1 1 1 b 1 b 4 
            5 1 1 b 1 c b 5 
            4 1 b 1 c b b 4 
            4 b 1 c c c b 4 
            5 1 c b c b c 5 
            4 b b b b c 5 4 
            5 4 5 4 4 5 4 5 
            `)
        Notification.notify("You collected: " + convertToText(Ionaum) + " Ionaum", 2, img`
            c f f f . . . . 
            f 9 9 c f f c . 
            f 6 6 9 6 6 f . 
            f c 9 6 6 6 f . 
            . f b 9 6 9 c f 
            . f 9 b 9 6 9 f 
            . c f f c 6 9 f 
            . . . . f f f c 
            `)
    }
}
/**
 * Warship
 */
/**
 * Pirates
 */
/**
 * settlers
 */
function Random_Enemy () {
    mySprite = sprites.create(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777777777777777777777777777777777777777777777777ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77fffffffffffffffffffffffffffff77fffffffffffffffffffffffffffff77ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f7ffffffffffffffffffffffffffff77ffffffffffffffffffffffffffff7f7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ff7fffffffffffffffffffffffffff77fffffffffffffffffffffffffff7ff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fff7ffffffffffffffffffffffffff77ffffffffffffffffffffffffff7fff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffff7fffffffffffffffffffffffff77fffffffffffffffffffffffff7ffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffff77fffffffffffffffffffffff77fffffffffffffffffffffff77fffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffff7ffffffffffffffffffffff77ffffffffffffffffffffff7fffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffff7fffffffffffffffffffff77fffffffffffffffffffff7ffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffff7ffffffffffffffffffff77ffffffffffffffffffff7fffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffff7fffffffffffffffffff77fffffffffffffffffff7ffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffff7ffffffffffffffffff77ffffffffffffffffff7fffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffff7fffffffffffffffff77fffffffffffffffff7ffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffff7ffffffffffffffff77ffffffffffffffff7fffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffff7fffffffffffffff77fffffffffffffff7ffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffff77fffffffffffff77fffffffffffff77fffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffff7ffffffffffff77ffffffffffff7fffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffff7fffffffffff77fffffffffff7ffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffff7ffffffffff77ffffffffff7fffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffff7fffffffff77fffffffff7ffffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffff7ffffffff77ffffffff7fffffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffff7fffffff77fffffff7ffffffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffff7ffffff77ffffff7fffffffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffff7fffff77fffff7ffffffffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffff77fff77fff77fffffffffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffff7ff77ff7fffffffffffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffffffff7f77f7ffffffffffffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffff7777fffffffffffffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777777777777777777777777777777777777777777777777ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777777777777777777777777777777777777777777777777ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffff7777fffffffffffffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffffffff7f77f7ffffffffffffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffff7ff77ff7fffffffffffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffffff7fff77fff7ffffffffffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffff77ffff77ffff77ffffffffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffff7ffffff77ffffff7fffffffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffff7fffffff77fffffff7ffffffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffff7ffffffff77ffffffff7fffffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffff7fffffffff77fffffffff7ffffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffff7ffffffffff77ffffffffff7fffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffff7fffffffffff77fffffffffff7ffffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffff7ffffffffffff77ffffffffffff7fffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffff7fffffffffffff77fffffffffffff7ffffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffff77ffffffffffffff77ffffffffffffff77ffffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffff7ffffffffffffffff77ffffffffffffffff7fffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffff7fffffffffffffffff77fffffffffffffffff7ffffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffff7ffffffffffffffffff77ffffffffffffffffff7fffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffff7fffffffffffffffffff77fffffffffffffffffff7ffffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffff7ffffffffffffffffffff77ffffffffffffffffffff7fffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffff7fffffffffffffffffffff77fffffffffffffffffffff7ffffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffff7ffffffffffffffffffffff77ffffffffffffffffffffff7fffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffff7fffffffffffffffffffffff77fffffffffffffffffffffff7ffffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffff77ffffffffffffffffffffffff77ffffffffffffffffffffffff77ffff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fff7ffffffffffffffffffffffffff77ffffffffffffffffffffffffff7fff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ff7fffffffffffffffffffffffffff77fffffffffffffffffffffffffff7ff7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f7ffffffffffffffffffffffffffff77ffffffffffffffffffffffffffff7f7ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77fffffffffffffffffffffffffffff77fffffffffffffffffffffffffffff77ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777777777777777777777777777777777777777777777777ffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
        f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Player)
    Enemy_Probability = randint(1, 2)
    Enemy_kind = ["Pirate Yacht", "Federation Warship", "Settler Shuttle"]
    myMenu.setButtonEventsEnabled(false)
    if (Enemy_Probability == 1) {
        myMenu.setButtonEventsEnabled(false)
        animation.runImageAnimation(
        mySprite,
        [img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `,img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `,img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `,img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `,img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `,img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `,img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `,img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `,img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777f7ff7f7777f7777ff7777f7777f7ff7f7ff77f777fffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ff7f77ff77ff77f7ff7777f7f77f7ff7f77f77f77f7ffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffff77fff7f77ff77ff77f7ff77fff7ff7f7ff7f7f777f77f7ffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777f7777ff77ff7777ff7777f77f7f77f7f7f777f77f7ffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77f7f77ff77ff77ffff77fff7777f7777f7f777f77f7ffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777f7f77f7777f7fffff7ffff7777ff77ff7ff77f777fffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `,img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `,img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777f7ff7f7777f7777ff7777f7777f7ff7f7ff77f777fffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ff7f77ff77ff77f7ff7777f7f77f7ff7f77f77f77f7ffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffff77fff7f77ff77ff77f7ff77fff7ff7f7ff7f7f777f77f7ffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777f7777ff77ff7777ff7777f77f7f77f7f7f777f77f7ffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77f7f77ff77ff77ffff77fff7777f7777f7f777f77f7ffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777f7f77f7777f7fffff7ffff7777ff77ff7ff77f777fffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `,img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffff7f
            f7fffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f
            f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `],
        200,
        false
        )
        timer.after(2400, function () {
            sprites.destroy(mySprite)
            random = Enemy_kind._pickRandom()
            Notification.notify("A " + random + " is in sector " + convertToText(Location + 1), 2)
            if (random == Enemy_kind[1]) {
                myMenu.setButtonEventsEnabled(false)
                Notification.notify("The Federation Warship charges its guns", 3, img`
                    2 2 2 2 2 2 2 2 
                    2 . . . . . . 2 
                    2 . . 2 2 . . 2 
                    2 2 2 2 2 2 2 2 
                    2 . 2 2 2 2 . 2 
                    2 . . 2 2 . . 2 
                    2 . 2 . . 2 . 2 
                    2 2 2 2 2 2 2 2 
                    `)
                story.printText("Attack?", 80, 0, 7, 15)
                story.showPlayerChoices("Yes", "No")
                if (story.getLastAnswer() == "Yes") {
                    story.showPlayerChoices("Torpedo / " + convertToText(Torpedo), "")
                    if (story.getLastAnswer() == "Torpedo / " + convertToText(Torpedo)) {
                        if (Torpedo == 0) {
                            Notification.notify("You are out of torpedos!", 2)
                            Notification.notify("The Federation Warship destroyed your cruiser.", 2)
                        } else {
                            Torpedo += -1
                            Notification.notify("You launch a torpedo", 2)
                            Notification.notify("The " + random + " was destroyed.", 2)
                            myMenu.setButtonEventsEnabled(true)
                        }
                    }
                } else if (story.getLastAnswer() == "No") {
                    Escape = randint(1, 2)
                    if (Escape == 1) {
                        attack()
                        myMenu.setButtonEventsEnabled(true)
                    } else if (Escape == 2) {
                        Notification.notify("You managed to get out of the area unharmed", 2, img`
                            . . f f f f . . 
                            . f 5 5 5 5 f . 
                            f 5 f 5 5 f 5 f 
                            f 5 5 5 5 5 5 f 
                            f 5 f 5 5 f 5 f 
                            f 5 5 f f 5 5 f 
                            . f 5 5 5 5 f . 
                            . . f f f f . . 
                            `)
                        myMenu.setButtonEventsEnabled(true)
                    }
                }
            } else if (random == Enemy_kind[0]) {
                Notification.notify("The Pirates board your ship and loot some of your supply ", 3, img`
                    5 5 5 5 5 5 5 5 
                    5 5 5 . . 5 5 5 
                    5 5 5 . . 5 5 5 
                    5 5 5 . . 5 5 5 
                    5 . 5 5 5 5 . 5 
                    5 . 5 5 5 5 . 5 
                    5 . . 5 5 . . 5 
                    5 5 5 5 5 5 5 5 
                    `)
                if (Meteoriron.value < 5) {
                    Notification.notify("The Pirates decided you didn't have enough Meteoriron to be worth looting", 2)
                } else {
                    Random_steal_M = randint(-5, -10)
                    Meteoriron.value += Random_steal_M
                    Notification.notify("" + Random_steal_M + " Meteoriron", 3, img`
                        5 4 5 4 4 5 4 5 
                        4 1 1 1 b 1 b 4 
                        5 1 1 b 1 c b 5 
                        4 1 b 1 c b b 4 
                        4 b 1 c c c b 4 
                        5 1 c b c b c 5 
                        4 b b b b c 5 4 
                        5 4 5 4 4 5 4 5 
                        `)
                }
                if (Ionaum.value < 5) {
                    Notification.notify("The Pirates decided you didn't have enough Ionaum to be worth looting", 2)
                } else {
                    Random_steal_I = randint(-1, -5)
                    Ionaum.value += Random_steal_I
                    Notification.notify("" + Random_steal_I + " Ionaum", 3, img`
                        c f f f . . . . 
                        f 9 9 c f f c . 
                        f 6 6 9 6 6 f . 
                        f c 9 6 6 6 f . 
                        . f b 9 6 9 c f 
                        . f 9 b 9 6 9 f 
                        . c f f c 6 9 f 
                        . . . . f f f c 
                        `)
                }
                if (Uranium.value < 5) {
                    Notification.notify("The Pirates decided you didn't have enough Uranium to be worth looting", 2)
                } else {
                    Random_steal_U = randint(-5, -10)
                    Uranium.value += Random_steal_U
                    Notification.notify("" + Random_steal_U + " Uranium", 3, img`
                        7 7 7 7 7 7 7 7 
                        7 5 7 5 5 7 5 7 
                        7 7 5 1 1 5 7 7 
                        7 5 1 1 1 1 5 7 
                        7 5 1 1 1 1 5 7 
                        7 7 5 1 1 5 7 7 
                        7 5 7 5 5 7 5 7 
                        7 7 7 7 7 7 7 7 
                        `)
                }
            } else if (random == Enemy_kind[2]) {
                timer.after(1000, function () {
                    Random_steal_U = randint(1, 0)
                    Random_steal_I = randint(1, 5)
                    Random_steal_M = randint(5, 10)
                    Uranium.value += Random_steal_U
                    Ionaum.value += Random_steal_I
                    Meteoriron.value += Random_steal_M
                    Rations.value += 5
                    Notification.notify("You barter with the settlers and they give you some stuff", 3, img`
                        7 7 7 7 7 7 7 7 
                        7 . 7 . . 7 . 7 
                        7 7 . 7 7 . 7 7 
                        7 . 7 7 7 7 . 7 
                        7 . 7 7 7 7 . 7 
                        7 7 . 7 7 . 7 7 
                        7 . 7 . . 7 . 7 
                        7 7 7 7 7 7 7 7 
                        `)
                    Notification.notify("5 Rations", 3, img`
                        c f f f f f f c 
                        f 2 2 2 2 2 2 f 
                        f 2 2 4 4 2 2 f 
                        f 2 2 2 2 2 2 f 
                        c 1 1 1 1 1 1 c 
                        f 4 4 4 4 4 4 f 
                        f 4 4 4 4 4 4 f 
                        c f f f f f f c 
                        `)
                    Notification.notify("" + Random_steal_U + " Uranium", 3, img`
                        7 7 7 7 7 7 7 7 
                        7 5 7 5 5 7 5 7 
                        7 7 5 1 1 5 7 7 
                        7 5 1 1 1 1 5 7 
                        7 5 1 1 1 1 5 7 
                        7 7 5 1 1 5 7 7 
                        7 5 7 5 5 7 5 7 
                        7 7 7 7 7 7 7 7 
                        `)
                    Notification.notify("" + Random_steal_I + " Ionaum", 3, img`
                        c f f f . . . . 
                        f 9 9 c f f c . 
                        f 6 6 9 6 6 f . 
                        f c 9 6 6 6 f . 
                        . f b 9 6 9 c f 
                        . f 9 b 9 6 9 f 
                        . c f f c 6 9 f 
                        . . . . f f f c 
                        `)
                    Notification.notify("" + Random_steal_M + " Meteoriron", 3, img`
                        5 4 5 4 4 5 4 5 
                        4 1 1 1 b 1 b 4 
                        5 1 1 b 1 c b 5 
                        4 1 b 1 c b b 4 
                        4 b 1 c c c b 4 
                        5 1 c b c b c 5 
                        4 b b b b c 5 4 
                        5 4 5 4 4 5 4 5 
                        `)
                })
            }
        })
        timer.after(2000, function () {
            myMenu.setButtonEventsEnabled(true)
        })
    } else if (Enemy_Probability == 2) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim4`,
        200,
        false
        )
        timer.after(2400, function () {
            sprites.destroy(mySprite)
            myMenu.setButtonEventsEnabled(true)
        })
    }
}
function shield_repair_drone () {
    if (e_1 == true) {
        engine_1 = sprites.create(img`
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            `, SpriteKind.engine)
        engine_1.setPosition(79, 14)
        animation.runImageAnimation(
        engine_1,
        assets.animation`myAnim7`,
        100,
        true
        )
    }
    if (e_2 == true) {
        engine_2 = sprites.create(img`
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            ...................
            `, SpriteKind.engine)
        engine_2.setPosition(79, 106)
        animation.runImageAnimation(
        engine_2,
        assets.animation`myAnim5`,
        100,
        true
        )
    }
    if (e_3 == true) {
        engine_3 = sprites.create(img`
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            `, SpriteKind.engine)
        animation.runImageAnimation(
        engine_3,
        assets.animation`myAnim8`,
        100,
        true
        )
        engine_3.setPosition(33, 59)
    }
    if (e_4 == true) {
        engine_4 = sprites.create(img`
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            `, SpriteKind.engine)
        animation.runImageAnimation(
        engine_4,
        assets.animation`myAnim6`,
        100,
        true
        )
        engine_4.setPosition(126, 59)
    }
    if (e_1 == true) {
        e_1_image = assets.image`myImage9`
    } else if (e_1 == false) {
        e_1_image = assets.image`myImage5`
    }
    if (e_2 == true) {
        e_2_image = assets.image`myImage11`
    } else if (e_2 == false) {
        e_2_image = assets.image`myImage7`
    }
    if (e_3 == true) {
        e_3_image = assets.image`myImage10`
    } else if (e_3 == false) {
        e_3_image = assets.image`myImage6`
    }
    if (e_4 == true) {
        e_4_image = assets.image`myImage12`
    } else if (e_4 == false) {
        e_4_image = assets.image`myImage8`
    }
    repair_menu = miniMenu.createMenu(
    miniMenu.createMenuItem("", e_1_image),
    miniMenu.createMenuItem("", e_2_image),
    miniMenu.createMenuItem("", e_3_image),
    miniMenu.createMenuItem("", e_4_image)
    )
    repair_menu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Alignment, 1)
    repair_menu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Alignment, 1)
    repair_menu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 2)
    repair_menu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 0)
    repair_menu.setDimensions(20, 104)
    repair_menu.setPosition(12, 90)
    repair_menu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            if (e_1 == false) {
                repair_menu.setButtonEventsEnabled(false)
                e_1_repair = miniMenu.createMenu(
                miniMenu.createMenuItem("Repair? (-10 Meteoriron)"),
                miniMenu.createMenuItem("Exit")
                )
                e_1_repair.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.BorderColor, 7)
                e_1_repair.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Alignment, 1)
                e_1_repair.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 0)
                e_1_repair.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Alignment, 1)
                e_1_repair.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 2)
                e_1_repair.setDimensions(100, 12)
                e_1_repair.setPosition(74, 44)
                e_1_repair.onButtonPressed(controller.A, function (selection, selectedIndex) {
                    if (selectedIndex == 0) {
                        if (Meteoriron.value >= 10) {
                            Notification.notify("Engine 1 repaired", 2)
                            Meteoriron.value += -10
                            e_1 = true
                            e_1_repair.close()
                            repair_menu.setButtonEventsEnabled(true)
                        } else {
                            Notification.notify("Insuffencient amount of Meteoriron", 2)
                        }
                    } else if (selectedIndex == 1) {
                        e_1_repair.close()
                        repair_menu.setButtonEventsEnabled(true)
                    }
                })
            } else {
                Notification.notify("Engine 1 is stable", 2)
            }
        } else if (selectedIndex == 1) {
            if (e_2 == false) {
                repair_menu.setButtonEventsEnabled(false)
                e_2_repair = miniMenu.createMenu(
                miniMenu.createMenuItem("Repair? (-10 Meteoriron)"),
                miniMenu.createMenuItem("Exit")
                )
                e_2_repair.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Alignment, 1)
                e_2_repair.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 0)
                e_2_repair.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Alignment, 1)
                e_2_repair.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 2)
                e_2_repair.setDimensions(100, 12)
                e_2_repair.setPosition(74, 64)
                e_2_repair.onButtonPressed(controller.A, function (selection, selectedIndex) {
                    if (selectedIndex == 0) {
                        if (Meteoriron.value >= 10) {
                            Notification.notify("Engine 2 repaired", 2)
                            Meteoriron.value += -10
                            e_2 = true
                            e_2_repair.close()
                            repair_menu.setButtonEventsEnabled(true)
                        } else {
                            Notification.notify("Insuffencient amount of Meteoriron", 2)
                        }
                    } else if (selectedIndex == 1) {
                        e_2_repair.close()
                        repair_menu.setButtonEventsEnabled(true)
                    }
                })
            } else {
                Notification.notify("Engine 2 is stable", 2)
            }
        } else if (selectedIndex == 2) {
            if (e_3 == false) {
                repair_menu.setButtonEventsEnabled(false)
                e_3_repair = miniMenu.createMenu(
                miniMenu.createMenuItem("Repair? (-10 Meteoriron)"),
                miniMenu.createMenuItem("Exit")
                )
                e_3_repair.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.BorderColor, 7)
                e_3_repair.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Alignment, 1)
                e_3_repair.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 0)
                e_3_repair.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Alignment, 1)
                e_3_repair.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 2)
                e_3_repair.setDimensions(100, 12)
                e_3_repair.setPosition(74, 84)
                e_3_repair.onButtonPressed(controller.A, function (selection, selectedIndex) {
                    if (selectedIndex == 0) {
                        if (Meteoriron.value >= 10) {
                            Notification.notify("Engine 3 repaired", 2)
                            Meteoriron.value += -10
                            e_3 = true
                            e_3_repair.close()
                            repair_menu.setButtonEventsEnabled(true)
                        } else {
                            Notification.notify("Insuffencient amount of Meteoriron", 2)
                        }
                    } else if (selectedIndex == 1) {
                        e_3_repair.close()
                        repair_menu.setButtonEventsEnabled(true)
                    }
                })
            } else {
                Notification.notify("Engine 3 is stable", 2)
            }
        } else if (selectedIndex == 3) {
            if (e_4 == false) {
                repair_menu.setButtonEventsEnabled(false)
                e_4_repair = miniMenu.createMenu(
                miniMenu.createMenuItem("Repair? (-10 Meteoriron)"),
                miniMenu.createMenuItem("Exit")
                )
                e_4_repair.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.BorderColor, 7)
                e_4_repair.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Alignment, 1)
                e_4_repair.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 0)
                e_4_repair.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Alignment, 1)
                e_4_repair.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 2)
                e_4_repair.setDimensions(100, 12)
                e_4_repair.setPosition(74, 104)
                e_4_repair.onButtonPressed(controller.A, function (selection, selectedIndex) {
                    if (selectedIndex == 0) {
                        if (Meteoriron.value >= 10) {
                            Notification.notify("Engine 3 repaired", 2)
                            Meteoriron.value += -10
                            e_4 = true
                            e_4_repair.close()
                            repair_menu.setButtonEventsEnabled(true)
                        } else {
                            Notification.notify("Insuffencient amount of Meteoriron", 2)
                        }
                    } else if (selectedIndex == 1) {
                        e_4_repair.close()
                        repair_menu.setButtonEventsEnabled(true)
                    }
                })
            } else {
                Notification.notify("Engine 4 is stable", 2)
            }
        }
    })
}
function Menu () {
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Resources.png"),
    miniMenu.createMenuItem("Rations.png"),
    miniMenu.createMenuItem("Engines.exe"),
    miniMenu.createMenuItem("Travel.exe"),
    miniMenu.createMenuItem("Signal.exe"),
    miniMenu.createMenuItem("Mine.exe")
    )
    myMenu.setPosition(33, 80)
    myMenu.setDimensions(100, 100)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 2)
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 0)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Alignment, 1)
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Alignment, 1)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.UseAsTemplate, 1)
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            if (Open_FUELS == false) {
                U = textsprite.create("U: " + convertToText(Uranium.value) + "%", 15, 7)
                U.setPosition(40, 9)
                I = textsprite.create("I: " + convertToText(Ionaum.value) + "%", 15, 7)
                I.setPosition(40, 18)
                M = textsprite.create("M: " + convertToText(Meteoriron.value) + "%", 15, 7)
                M.setPosition(40, 27)
                timer.background(function () {
                    Open_FUELS = true
                })
            } else if (Open_FUELS == true) {
                sprites.destroyAllSpritesOfKind(SpriteKind.Text)
                timer.background(function () {
                    Open_FUELS = false
                })
            }
        } else if (selectedIndex == 1) {
            if (Rations_OPEN == false) {
                R = textsprite.create("R:" + convertToText(Rations.value) + "/" + convertToText(Rations.max), 15, 7)
                R.setPosition(40, 9)
                timer.background(function () {
                    Rations_OPEN = true
                })
            } else if (Rations_OPEN == true) {
                sprites.destroyAllSpritesOfKind(SpriteKind.Text)
                timer.background(function () {
                    Rations_OPEN = false
                })
            }
        } else if (selectedIndex == 2) {
            Star_map = sprites.create(assets.image`myImage`, SpriteKind.map)
            myMenu.setButtonEventsEnabled(false)
            repair_map = true
            shield_repair_drone()
            timer.background(function () {
                pauseUntil(() => controller.B.isPressed())
                sprites.destroy(Star_map)
                myMenu.setButtonEventsEnabled(true)
                sprites.destroyAllSpritesOfKind(SpriteKind.engine)
                repair_menu.close()
            })
        } else if (selectedIndex == 3) {
            textSprite = textsprite.create("Distance Traveled: " + Turns + "M", 2, 1)
            Goal = textsprite.create("Travel Goal: 50M", 2, 1)
            textSprite.setPosition(65, 38)
            Goal.setPosition(50, 30)
            myMenu.setButtonEventsEnabled(false)
            myMenu2 = miniMenu.createMenu(
            miniMenu.createMenuItem("-->"),
            miniMenu.createMenuItem("<--")
            )
            myMenu2.setDimensions(50, 100)
            myMenu2.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 2)
            myMenu2.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 0)
            myMenu2.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Alignment, 1)
            myMenu2.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Alignment, 1)
            myMenu2.setPosition(119, 94)
            myMenu2.onButtonPressed(controller.A, function (selection, selectedIndex) {
                if (Rations.value < 0) {
                    Notification.notify("You ran out of food and starved.")
                    timer.after(2000, function () {
                        game.gameOver(false)
                    })
                } else if (e_2 == false && e_1 == false && (e_3 == false && e_4 == false)) {
                    Notification.notify("Error: Cannot warp with all engines offline", 1, img`
                        2 2 . . . . 2 2 
                        2 2 2 . . 2 2 2 
                        . 2 2 2 2 2 2 . 
                        . . 2 2 2 2 . . 
                        . . 2 2 2 2 . . 
                        . 2 2 2 2 2 2 . 
                        2 2 2 . . 2 2 2 
                        2 2 . . . . 2 2 
                        `)
                } else {
                    sprites.destroy(textSprite)
                    sprites.destroy(Goal)
                    myMenu2.close()
                    if (selectedIndex == 0) {
                        timer.after(2000, function () {
                            Turns += 1
                            Notification.notify("Location: Sector " + convertToText(Turns), 3)
                        })
                    } else if (selectedIndex == 1) {
                        timer.after(2000, function () {
                            Turns += -1
                            Notification.notify("Location: Sector " + convertToText(Turns), 3)
                        })
                    }
                    color.startFadeFromCurrent(color.White)
                    timer.after(2000, function () {
                        Area_mine = true
                        myMenu.setButtonEventsEnabled(true)
                        color.startFadeFromCurrent(color.originalPalette)
                        Enemy_Probability = 0
                        Escape = 0
                        Rations.value += randint(-1, -10)
                    })
                }
            })
        } else if (selectedIndex == 4) {
            Random_Enemy()
        } else if (selectedIndex == 5) {
            Mining()
        }
    })
}
function Mining () {
    Mining_Chance = randint(1, 2)
    mySprite = sprites.create(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `, SpriteKind.Player)
    if (Area_mine == true) {
        if (Mining_Chance == 1) {
            myMenu.setButtonEventsEnabled(false)
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim2`,
            200,
            false
            )
            timer.after(2200, function () {
                myMenu.setButtonEventsEnabled(true)
                sprites.destroy(mySprite)
                Notification.notify("You find a meteor and start mining", 2)
                kind = ["U", "I", "M"]
                other_kind = kind._pickRandom()
                Amount = randint(1, 20)
                if (other_kind == "U") {
                    Notification.notify("You gained: " + convertToText(Amount) + " Uranium", 3, img`
                        7 7 7 7 7 7 7 7 
                        7 5 7 5 5 7 5 7 
                        7 7 5 1 1 5 7 7 
                        7 5 1 1 1 1 5 7 
                        7 5 1 1 1 1 5 7 
                        7 7 5 1 1 5 7 7 
                        7 5 7 5 5 7 5 7 
                        7 7 7 7 7 7 7 7 
                        `)
                    Uranium.value += Amount
                } else if (other_kind == "I") {
                    Notification.notify("You gained: " + convertToText(Amount) + " Ionaum", 3, img`
                        c f f f . . . . 
                        f 9 9 c f f c . 
                        f 6 6 9 6 6 f . 
                        f c 9 6 6 6 f . 
                        . f b 9 6 9 c f 
                        . f 9 b 9 6 9 f 
                        . c f f c 6 9 f 
                        . . . . f f f c 
                        `)
                    Ionaum.value += Amount
                } else if (other_kind == "M") {
                    Notification.notify("You gained: " + convertToText(Amount) + " Meteoriron", 3, img`
                        5 4 5 4 4 5 4 5 
                        4 1 1 1 b 1 b 4 
                        5 1 1 b 1 c b 5 
                        4 1 b 1 c b b 4 
                        4 b 1 c c c b 4 
                        5 1 c b c b c 5 
                        4 b b b b c 5 4 
                        5 4 5 4 4 5 4 5 
                        `)
                    Meteoriron.value += Amount
                }
            })
        } else if (Mining_Chance == 2) {
            myMenu.setButtonEventsEnabled(false)
            animation.runImageAnimation(
            mySprite,
            assets.animation`myAnim1`,
            200,
            false
            )
            timer.after(2200, function () {
                sprites.destroy(mySprite)
                myMenu.setButtonEventsEnabled(true)
            })
        }
        timer.background(function () {
            Area_mine = false
        })
    } else {
        myMenu.setButtonEventsEnabled(false)
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim1`,
        200,
        false
        )
        timer.after(2200, function () {
            sprites.destroy(mySprite)
            myMenu.setButtonEventsEnabled(true)
        })
    }
}
let Amount = 0
let other_kind = ""
let kind: string[] = []
let Mining_Chance = 0
let myMenu2: miniMenu.MenuSprite = null
let Goal: TextSprite = null
let textSprite: TextSprite = null
let repair_map = false
let Star_map: Sprite = null
let R: TextSprite = null
let M: TextSprite = null
let I: TextSprite = null
let U: TextSprite = null
let e_4_repair: miniMenu.MenuSprite = null
let e_3_repair: miniMenu.MenuSprite = null
let e_2_repair: miniMenu.MenuSprite = null
let e_1_repair: miniMenu.MenuSprite = null
let repair_menu: miniMenu.MenuSprite = null
let e_4_image: Image = null
let e_3_image: Image = null
let e_2_image: Image = null
let e_1_image: Image = null
let engine_4: Sprite = null
let engine_3: Sprite = null
let engine_2: Sprite = null
let engine_1: Sprite = null
let Random_steal_U = 0
let Random_steal_I = 0
let Random_steal_M = 0
let Escape = 0
let random = ""
let Enemy_kind: string[] = []
let Enemy_Probability = 0
let mySprite: Sprite = null
let myMenu: miniMenu.MenuSprite = null
let engine_attack = false
let engines: boolean[] = []
let e_4 = false
let e_3 = false
let e_2 = false
let e_1 = false
let Turns = 0
let Area_mine = false
let Torpedo = 0
let Location = 0
let Rations_OPEN = false
let Open_FUELS = false
let Rations: StatusBarSprite = null
let Meteoriron: StatusBarSprite = null
let Ionaum: StatusBarSprite = null
let Uranium: StatusBarSprite = null
scroller.setLayerImage(scroller.BackgroundLayer.Layer0, img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...............1.1..............................................................................................................................................
    ................1...............................................................................................................................................
    ...............1.1..............................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .............................................1..................................................................................................................
    ..............................................................................................................1.................................................
    .............................................................................................................111................................................
    ..............................................................................................................1.................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .......................................................................................................1........................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ......................................1.........................................................................................................................
    .....................................111........................................................................................................................
    ......................................1.........................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ............................................................................................................................................1...................
    ...........................................................................................................................................111..................
    ............................................................................................................................................1...................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ........................................................................................1.1.....................................................................
    .........................................................................................1......................................................................
    ........................................................................................1.1.....................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...............1................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................1...............
    ..................................................1............................................................................................111..............
    .................................................111............................................................................................1...............
    ..................................................1.............................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..........................................................................................................1.....................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
scroller.setLayerImage(scroller.BackgroundLayer.Layer1, img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ....................................................................................................1...........................................................
    .........................................................................................................................................1......................
    ........................................................................................................................................111.....................
    .........................................................................................................................................1......................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...................................1............................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .................................................................1..............................................................................................
    ................................................................111.............................................................................................
    .................................................................1..............................................................................................
    ......................................................................................................................1.........................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .............1.1................................................................................................................................................
    ..............1.................................................................................................................................................
    .............1.1................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .....................................................................................................................................1..........................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ............................................................................................1.1.................................................................
    .............................................................................................1..................................................................
    ............................................................................................1.1.................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ......................1.........................................................................................................................................
    .....................111........................................................................................................................................
    ......................1.........................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ......................................................................................................................................1.........................
    ................................................................................................................................................................
    .................................................1..............................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
scroller.setLayerImage(scroller.BackgroundLayer.Layer2, img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ....................................................................1...........................................................................................
    ...........1....................................................................................................................................................
    ..........111...................................................................................................................................................
    ...........1....................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...............................................................................................................................................1................
    ..............................................................................................................................................111...............
    ...............................................................................................................................................1................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ............................................................................................................1...................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................1.1.............................................................................................................................
    .................................1..............................................................................................................................
    ................................1.1.............................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...............................................................................1................................................................................
    ..............................................................................111...............................................................................
    ...............................................................................1................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .............1..................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .......................................................1.............................................................................1..........................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .......................................................................................1........................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ....................................................................................................................................1.1.........................
    .....................................................................................................................................1..........................
    ....................................................................................................................................1.1.........................
    ............1...................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..............................................................1.................................................................................................
    .............................................................111................................................................................................
    ..............................................................1.................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .........................1......................................................................................................................................
    ................................................................................................................................................................
    ..........................................................................................................................1.....................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
scroller.setLayerImage(scroller.BackgroundLayer.Layer3, img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .......................................................................66666666666666666........................................................................
    ....................................................................66688888888888888888666.....................................................................
    .................................................................66688888888888888888888888666..................................................................
    ...............................................................668888888888888888888888888888866................................................................
    .............................................................6688888888888888888888888888888888866..............................................................
    ............................................................688888888888888888888888888888888888886.............................................................
    ..........................................................6688888888888888888888888888888888888888866...........................................................
    .........................................................688888888888888888888888888888888888888888886..........................................................
    ........................................................68888888888888888888888888888888888888888888886.........................................................
    .......................................................6888888888888888888888888888888888888888888888886........................................................
    ......................................................688888888888888888888888888888888888888888888888886.......................................................
    .....................................................68888888888888888888888888888888888888888888888888886......................................................
    ....................................................6888888888888888888888888888888888888888888888888888886.....................................................
    ...................................................688888888888888888888888888888888888888888888888888888886....................................................
    ..................................................68888888888888888888888888888888889888888888888888888888886...................................................
    ..................................................68888888888888888888888888888888891988888888888888888888886...................................................
    .................................................6888888888888888888888888888888888898888888888888888888888886..................................................
    ................................................688888888888888888888888888888888888888888888888888888888888886.................................................
    ................................................688888888888888888888888888888888888888888888888888888888888886.................................................
    ...............................................68888888888888888888888888888888888888888888888888888888888888886................................................
    ...............................................68888888888888888889888888888888888888888888888888888888888888886................................................
    ..............................................6888888888888888888919888888888888888888888888888888888888888888886...............................................
    ..............................................6888888888888888889111988888888888888888888888888888888888888888886...............................................
    ..............................................6888888888888888888919888888888888888888888888888888888888888888886...............................................
    .............................................688888888888888888888988888888888888888888888888888888888888888888886..............................................
    .............................................688888888888888888888888888888888888888888888888888888888888888888886..............................................
    .............................................688888888888888888888888888888888888888888888888888888888888888888886..............................................
    ............................................68888886668888888886688888888886666888888866886688888866888888866688886.............................................
    ............................................68888861116888888661166888888861111688888611661168888611688888611168886.............................................
    ............................................68888611116888886111111688888611111688888611111168888611688886111168886.............................................
    ............................................68886111666888861116611168888611666888886111111116888611688861116668886.............................................
    ............................................68886116668888861166661168888611168888886116116116888611688861166688886.............................................
    ............................................68886116888888861168861168888861116888886116116116888611688861168888886.............................................
    ............................................68886116888888861168861168888866111688886116116116888611688861168888886.............................................
    ............................................68886111668888861116611168888611111688886116116116888611688861116688886.............................................
    ............................................68886611116888866111111668888611116688886116116116888611688866111168886.............................................
    ............................................68888661116888886661166688888666666888886116116116888611688886611168886.............................................
    ............................................68888866666888888666666888888866668888888666666666888666688888666668886.............................................
    ............................................68888886668866666686688866668888888888666668668666888866668888866688886.............................................
    ............................................68888888888611111168888611116888888886111168888611688886116888888888886.............................................
    ............................................68888888888611111168888611111688888861111168888611688886116888888888886.............................................
    ............................................68888888888666116668888611611168888611161168888611688886116888888888886.............................................
    ............................................68888888888866116688888611661168888611661168888611688886116888888888886.............................................
    ............................................68888888888886116888888611111668888611661168888611688886116888888888886.............................................
    .............................................688888888888611688888861161116888861111116888861168888611688888888886..............................................
    .............................................688888888888611688888861166116888861111116888861168888611668888888886..............................................
    .............................................688888888888611688888861166116888861166116888861168888611116888888886..............................................
    ..............................................6888888888861168888886116611688886116611688886116888861111688888886...............................................
    ..............................................6888888888866668888886666666688886666666688886666888866666688888886...............................................
    ..............................................6888888888886688888888668866888888668866888888668888886666888888886...............................................
    ...............................................68888888888888888888888888888888888888888888888888888888888888886................................................
    ...............................................68888888888888888888888888888888888888888888888888888888888888886................................................
    ................................................688888888888888888888888888888888888888888888888888888888888886.................................................
    ................................................688888888888888888888888888888888888888888888888888888888888886.................................................
    .................................................6888888888889889888888888888888888888888888888888888888888886..................................................
    ..................................................68888888888811888888888888888888888888888888888888888888886...................................................
    ..................................................68888888888811888888888888888888888888888888888888888888886...................................................
    ...................................................688888888898898888888888888888888888888888888888888888886....................................................
    ....................................................6888888888888888888888888888888888888888888888888888886.....................................................
    .....................................................68888888888888888888888888888888888188888888888888886......................................................
    ......................................................688888888888888888888888888888888888888888888888886.......................................................
    .......................................................6888888888888888888888888888888888888888888888886........................................................
    ........................................................68888888888888888888888888888888888888888888886.........................................................
    .........................................................688888888888888888888888888888888888888888886..........................................................
    ..........................................................6688888888888888888888888888888888888888866...........................................................
    ............................................................688888888888888888888888888888888888886.............................................................
    .............................................................6688888888888888888888888888888888866..............................................................
    ..............................................................96688888888888888888888888888888669...............................................................
    ..............................................................91966688888888888888888888888666919...............................................................
    ..............................................................91999166688888888888888888666199919...............................................................
    ..............................................................91999119966666666666666666991199919...............................................................
    ..............................................................91999119911191111111119111991199919...............................................................
    ..............................................................91999119911191111111119111991199919...............................................................
    ..............................................................91999119911191111111119111991199919...............................................................
    ..............................................................91999119911191111111119111991199919...............................................................
    ..............................................................91999119911191111111119111991199919...............................................................
    ..............................................................611111191111116611116611111911111116..............................................................
    ..............................................................61166116661166611661161166116661166...............................................................
    ..............................................................61166116.6116.611661161166116.6116................................................................
    ..............................................................6116666..6116.611661161166116.6116................................................................
    ...............................................................611116..6116.61166116111116..6116................................................................
    ...............................................................6666116.6116.611111161166116.6116................................................................
    ..............................................................61166116.6116.611661161166116.6116................................................................
    ..............................................................61166116.6116.611661161166116.6116................................................................
    ...............................................................611116..6116.611661161166116.6116................................................................
    ................................................................6666....66...66..66.66..66...66.................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...............................................................................................................aaaaa.aaaa.aa..a.aaaa.aaaa.aa.a...aa.a.aa..a.....
    ...............................................................................................................cccaa.aaac.aaa.a.caac.caac.aaaa...aa.a.aaa.a.....
    .................................................................................................................aac.aaaa.aaaaa..aa...aa..aaca.a.aa.a.aaaaa.....
    ................................................................................................................aac..aacc.aacaa..aa...aa..aa.a.a.aa.a.aacaa.....
    ...............................................................................................................aac...aa...aa.ca..aa...aa..aa.a.c.aa.a.aa.ca.....
    ...............................................................................................................aaaaa.aaaa.aa..a.aaaa..aa..aa.a...caac.aa..a.....
    ...............................................................................................................ccccc.cccc.cc..c.cccc..cc..cc.c....cc..cc..c.....
    `)
scroller.scrollBackgroundWithSpeed(-50, 0, scroller.BackgroundLayer.Layer0)
scroller.scrollBackgroundWithSpeed(-40, 0, scroller.BackgroundLayer.Layer1)
scroller.scrollBackgroundWithSpeed(-30, 0, scroller.BackgroundLayer.Layer2)
pauseUntil(() => controller.A.isPressed())
scroller.setLayerImage(scroller.BackgroundLayer.Layer3, img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
let Menu_Open = false
let Fuels_open = false
Uranium = statusbars.create(0, 0, StatusBarKind.Fuel)
Uranium.max = 100
Uranium.value = 0
Ionaum = statusbars.create(0, 0, StatusBarKind.Fuel)
Ionaum.max = 100
Ionaum.value = 0
Meteoriron = statusbars.create(0, 0, StatusBarKind.Fuel)
Meteoriron.max = 100
Meteoriron.value = 0
Rations = statusbars.create(0, 0, StatusBarKind.Fuel)
Open_FUELS = false
Rations_OPEN = false
let Map_OPEN = false
Location = 0
Torpedo = 5
let Ion_Cannon = 4
Area_mine = false
Turns = 0
e_1 = true
e_2 = true
e_3 = true
e_4 = true
engines = [
e_1,
e_2,
e_3,
e_4
]
timer.after(2000, function () {
    Menu()
})

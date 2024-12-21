input.onButtonPressed(Button.A, function () {
    keyboard.sendString("[")
    basic.showArrow(ArrowNames.West)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    keyboard.sendString("f")
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    keyboard.sendString("]")
    basic.showArrow(ArrowNames.East)
    basic.pause(200)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    keyboard.sendString("l")
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
})
keyboard.startKeyboardService()

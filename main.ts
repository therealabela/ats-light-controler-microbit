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
basic.pause(100)
if (control.deviceName() == "sim-") {
    serial.writeLine("!!!- IF YOU SEE THIS MESSAGE, YOU ARE ON THE WRONG SERIAL OUTPUT. PLEASE CLICK THE \"Show data Device\" BUTTON INSTEAD OF \"Show data Simulator\"! -!!!")
}
serial.writeLine("micro:bit Bluetooth Connection Name" + " = " + "uBit " + "[" + control.deviceName() + "]")
basic.showString("Look at Serial Output")

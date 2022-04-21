input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showString("❤")
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("ღ")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("<3")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . . . # .
        . # . . #
        # . . # .
        . # . . #
        . . . # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("♡")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        `)
})
basic.showString("The Heart Machine")

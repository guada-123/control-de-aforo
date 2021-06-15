let Cliente = 0
input.onButtonPressed(Button.A, function () {
    if (Cliente > 0) {
        Cliente += -1
        basic.showNumber(Cliente)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.AB, function () {
    Cliente = 0
    basic.showNumber(Cliente)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Cliente += 1
    basic.showNumber(Cliente)
})

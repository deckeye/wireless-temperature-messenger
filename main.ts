input.onButtonPressed(Button.A, function () {
    radio.sendString("JUMBO")
    radio.sendString("" + (input.temperature()))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(86)

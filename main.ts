serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    SerialData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    if (SerialData == "Iniciar") {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        basic.showIcon(IconNames.Yes)
    } else if (SerialData == "Detener") {
        SuperBit.MotorStopAll()
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # #
            # # # # #
            . # # # .
            `)
    } else if (SerialData == "Fondo") {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
    	
    }
})
let SerialData = ""
serial.redirectToUSB()

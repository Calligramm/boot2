serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    serielleZeile = serial.readLine()
    if (serielleZeile.includes("S")) {
        vehicle.stop()
    } else if (serielleZeile.indexOf("F") > -1) {
        vehicle.drive(60, 0)
    } else if (serielleZeile.indexOf("L") > -1) {
        vehicle.turn_left(40)
    } else if (serielleZeile.indexOf("R") > -1) {
        vehicle.turn_right(40)
    } else if (serielleZeile.indexOf("B") > -1) {
        vehicle.drive(-60, 0)
    }
})
let serielleZeile = ""
let vehicle: l298.Vehicle = null
led.enable(false)
serial.redirect(
SerialPin.C16,
SerialPin.C17,
BaudRate.BaudRate115200
)
serial.setTxBufferSize(127)
serial.setRxBufferSize(127)
let motor = l298.create_motor(DigitalPin.P0, DigitalPin.P1, AnalogPin.C4)
let motor2 = l298.create_motor(DigitalPin.P2, DigitalPin.P3, AnalogPin.C5)
vehicle = l298.create_vehicle(motor, motor2)

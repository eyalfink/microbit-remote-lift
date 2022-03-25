radio.onReceivedNumber(function (receivedNumber) {
    v = receivedNumber
})
let v = 0
radio.setGroup(1)
basic.forever(function () {
    if (v == 1) {
        wuKong.setAllMotor(-100, -100)
    } else if (v == 2) {
        wuKong.setAllMotor(100, 100)
    } else if (v == 3) {
        wuKong.setAllMotor(50, -50)
    } else if (v == 4) {
        wuKong.setAllMotor(-50, 50)
    } else if (v == 0) {
        wuKong.stopAllMotor()
    } else if (v == 5) {
        wuKong.setServoAngel(wuKong.ServoList.S7, 10)
    } else if (v == 6) {
        basic.showString("Hello!")
        wuKong.setServoAngel(wuKong.ServoList.S7, 7)
    }
})

/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago baker
 * Created on: Sep 2025
 * This program shows Temperature of microbit
*/

// shows The Temperature of microbit
let TemperatureOfMicrobit: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    TemperatureOfMicrobit = input.temperature()
    basic.showString("The Temperature Is:")
    basic.showNumber(TemperatureOfMicrobit)
    basic.showString(" C.")
})
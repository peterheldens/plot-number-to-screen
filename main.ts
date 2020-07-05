function plotAt (index: number) {
    index |= 0
    y = Math.floor(index / 5)
    x = Math.floor(index % 5)
    led.plot(x, y)
}
let x = 0
let y = 0
for (let i = 0; i <= 24; i++) {
    plotAt(i)
    pause(100)
}

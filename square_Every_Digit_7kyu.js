function squareDigits(num){
    return Number(`${num}`.split('').map(i => i**2).join(''))
}
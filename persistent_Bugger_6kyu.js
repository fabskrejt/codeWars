function persistence(num) {

    if (`${num}`.length === 1) return 0

    let reduceNum = `${`${num}`.split('').reduce((acc, n) => acc * n)}`
    let result = 1

    while (reduceNum.length > 1) {
        reduceNum = `${reduceNum.split('').reduce((acc, n) => acc * n)}`
        result++
        console.log(reduceNum)
        console.log(result)
    }
    return result
}
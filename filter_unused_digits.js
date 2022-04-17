function unusedDigits(...arr) {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    const sortDigitsArr = arr.join('')
        .split('')
        .sort()
    return digits.reduce((acc, item) => {
        if (!sortDigitsArr.includes(item)) {
            return acc += item
        } else return acc
    }, '')
}
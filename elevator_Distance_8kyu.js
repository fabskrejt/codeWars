function elevatorDistance(array) {
    let result = 0
    array.reduce((acc, item) => {
        result += Math.abs(acc - item)
        return item
    })
    return result
}
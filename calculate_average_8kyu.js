function find_average(array) {
    return array.length === 0 ? 0 : array.reduce((acc, i) => acc += i) / array.length
}
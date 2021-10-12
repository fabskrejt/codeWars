function oddOrEven(array) {
    return array.reduce((acc, item) => item + acc, 0 ) % 2 === 0 ? 'even' : 'odd'
}
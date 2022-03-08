function duplicateSymbol (string){
    return string.toUpperCase()
        .split('')
        .map((item, index) => item + item.repeat(index).toLowerCase())
        .join(' ')
}
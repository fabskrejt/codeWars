function comp(array1, array2){
    if(array1 === null || array2 === null) return false
    let arrSqr = array1.map( i => i**2)
    return arrSqr.sort().join('') === array2.sort().join('')
}
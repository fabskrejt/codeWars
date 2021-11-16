var isSquare = function(n){
    return n === 0 ? true: n > 0 && Number.isInteger(Math.sqrt(n))? true : false
}
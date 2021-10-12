var isSquare = function(arr){
    if (arr.length === 0) return undefined

    for(let i = 0; i < arr.length; i++){
        if( arr[i] != 0 &  arr[i] / Math.sqrt(arr[i]) != Math.sqrt(arr[i]) ) return false
    }

    return true
}
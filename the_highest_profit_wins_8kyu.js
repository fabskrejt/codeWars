function minMax(arr){
    if(arr.length === 1) return [arr[0],arr[0]]
    let a = arr.sort( (a,b) => a-b)
    return [a[0], a[a.length-1]]

}
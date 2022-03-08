function minMaxValue (arr){
    if (arr.length === 1) return [arr[0],arr[0]]
    arr.sort((a,b)=> a-b).splice(1, arr.length -2 )
    return arr
}
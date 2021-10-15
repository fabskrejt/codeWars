var moveZeros = function (arr) {
    let zero = [];
    let other = [];
    arr.map(i => {
        if(i === 0){
            zero.push(i)
        } else{
            other.push(i)
        }
    })
    return other.concat(zero)
}
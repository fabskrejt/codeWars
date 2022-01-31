function dataReverse(data) {
    let arr = []

    for(let i = 0; i< data.length; i+=8){
        arr.unshift(...[...data].splice(i,8))
    }
    return arr
}
function findMultiples(integer, limit) {
    let resultArr = [];
    for(let i = 1; i <= Math.floor(limit / integer); i++){
        resultArr.push(integer*i)
    }
    return resultArr;
}

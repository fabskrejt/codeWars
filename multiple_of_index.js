function multipleOfIndex(array) {
    let resultArr = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] % i == 0) resultArr.push(array[i]);
    }
    return resultArr;
}
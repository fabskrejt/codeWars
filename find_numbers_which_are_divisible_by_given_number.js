function divisibleBy(numbers, divisor){
    let resultArr = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % divisor == 0){
            resultArr.push(numbers[i]);
        }
    }
    return resultArr;
}
function squareSum(numbers){
    let result = 0;
    numbers.map( i => result += i*i)
    return result;
}
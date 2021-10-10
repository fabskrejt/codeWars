function computerToPhone(numbers){
    let result =[]
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] == 1){
            result.push(7)
        } else if(numbers[i] == 2){
            result.push(8)
        } else if(numbers[i] == 3){
            result.push(9)
        }else if(numbers[i] == 7){
            result.push(1)
        }else if(numbers[i] == 8){
            result.push(2)
        }else if(numbers[i] == 9){
            result.push(3)
        } else{
            result.push(numbers[i])
        }
    }
    return result.join('')
}
function wave(str){
    let result = []

    for(let i = 0; i < str.length; i++){
        let splitedStr = str.split('')
        if(splitedStr[i] !== ' '){
            splitedStr[i] = splitedStr[i].toUpperCase()
            result.push(splitedStr.join(''))
        }
    }
    return result
}
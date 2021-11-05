function correct(string)
{
    return string.split('').map( i => {
        if(i === '5'){
            return 'S'
        } else if(i === '0'){
            return 'O'
        } else if(i === '1'){
            return 'I'
        }
        return i
    }).join('')
}
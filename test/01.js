function array(str){

    return str.length <= 3 ? null : str.split('').splice(1, str.length - 2 ).filter( i => i !== ',').join(' ')
}

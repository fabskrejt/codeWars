let FilterString = function(value) {
    return +value.split('').filter( i => i >= 0 ).join('')
}
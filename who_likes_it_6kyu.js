function likes(names) {
    let arrLength = names.length;
    if(arrLength === 0) return 'no one likes this';
    if(arrLength === 1) return names[0] + ' likes this';
    if(arrLength === 2) return names[0] + ' and ' + names[1] + ' like this';
    if(arrLength === 3) return names[0] + ', ' + names[1] + ' and '  + names[2] + ' like this';
    return names[0] + ', ' + names[1] + ' and '  + (arrLength - 2) + ' others like this';

}
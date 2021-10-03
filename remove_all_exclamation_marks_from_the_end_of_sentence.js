function remove(s){
    let a = s.split('');
    for(let i = a.length; i > 0; i--){
        if(a[i-1] == '!'){
            a.pop()
        } else{ return a.join('')}
    }
}
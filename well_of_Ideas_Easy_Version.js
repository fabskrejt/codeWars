function well(x){
    let goodCount = 0;
    x.map(item =>{
        if(item == 'good'){
            goodCount++
        }
    })
    if(goodCount == 1 || goodCount == 2 ){
        return 'Publish!'
    }else if(goodCount > 2 ){
        return'I smell a series!';
    }else{return  'Fail!'}
}
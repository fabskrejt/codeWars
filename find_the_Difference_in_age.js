function differenceInAges(ages){
    let youngest = ages[0];
    let oldest = ages[0]
    ages.map(i => {
        if(i > oldest ){
            oldest = i;
        }else if(youngest > i){
            youngest = i;
        }
    })
    return [youngest, oldest, oldest - youngest]
}

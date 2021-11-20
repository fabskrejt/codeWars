function century(year) {
    return year % 100 === 0 ? year / 100 : Math.trunc(year / 100) + 1
}

//const century = year => Math.ceil(year/100)
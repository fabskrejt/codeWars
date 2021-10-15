function incrementer(nums) {
    return nums.map((item, index) => {
        if( item + index >= 9){
            return  +(`${item += index + 1}`.split('').pop())
        } else {
            return item += index + 1
        }
    })
}
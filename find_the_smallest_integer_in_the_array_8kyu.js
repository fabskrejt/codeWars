class SmallestIntegerFinder {
    findSmallestInt(args) {
        let result = args[0];
        args.map((item)=> {if(item < result){
            result = item;
        }})

        return result;
    }
}
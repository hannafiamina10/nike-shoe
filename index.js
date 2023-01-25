function isLeap(year){
    if ((year % 4)===0) { //first condition
        if((year % 100)===0){ //second condition
            if((year % 400)===0){ //third condtion
                return `leap year`
            }else{
                return `not leap year`
            }
        }else{
            return 'leap year'
        }
    }else{
        return 'not leap year'
    }
}

isLeap(2000) //calling the function
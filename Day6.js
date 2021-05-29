// Bitwise
{
function getMaxLessThanK(n,k){

    const newArray =[];
    let maxNum = 0;
    for (let i = 1; i <= n - 1; i++){
        for(let j = i + 1 ; j <= n; j++){
            let x = i & j;
            if (x < k) {
                if (x > maxNum){
                    maxNum = x;
                }
            }
        }
    }
    return maxNum;
}
}


// getDay
{
    function getDayName(dateString) {
        let dayName;
        dayName = new Date(dateString);
        dayName = dayName.getDay();
    
        switch(dayName){
            case 0:
            dayName = "Sunday";
            break;
    
            case 1:
            dayName = "Monday";
            break;
    
            case 2:
            dayName = "Tuesday";
            break;
    
            case 3:
            dayName = "Wednesday";
            break;
    
            case 4:
            dayName = "Thursday";
            break;
    
            case 5:
            dayName = "Friday";
            break;
            
            case 6:
            dayName = "Saturday";
            break;
        }
        
        return dayName;
    }
}


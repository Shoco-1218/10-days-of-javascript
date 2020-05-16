// Array
function getSecondLargest(nums) {
    let largest = nums[0];
    let secondLargest = nums[0];

    for (var i = 1; i < nums.length; i++)
    {
        if (nums[i] > largest)
        {
            secondLargest = largest;
            largest = nums[i];
        }
        else if (secondLargest < nums[i] && nums[i] != largest)
        {
            secondLargest = nums[i];
        }
    }

    return secondLargest;
}


// Try,Catch, and Finally
function reverseString(s) {
    if (typeof s == "string" || s instanceof String){
        var splitS= s.split("");
        var reverseS = splitS.reverse();
        var joinS = reverseS.join("");
        console.log( joinS);
    }else{
        console.log("s.split is not a function");
        console.log(s);
    }
}


// Throw
function isPositive(a) {
    if (a > 0) { 
        throw new Error("YES");
    }
    if (a == 0) {
        throw new Error("Zero Error");
    }
    if (a < 0) {
        throw new Error("Negative Error");
    }
}

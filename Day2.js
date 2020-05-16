
// Conditional statements:if-else
function getGrade(score) {
    let grade;

    if (score > 25){
        grade = "A";
    }
    else if (20 < score && score < 26){
        grade = "B";
    }
    else if (15 < score  && score < 21){
        grade = "C";
    }
    else if (10 < score && score < 16){
        grade = "D";
    }
    else if (5 < score && score < 11){
        grade = "E";
    }
    else if (0 <= score && score < 6){
        grade = "F";
    } 
    return grade;
}


// Conditional statements : switch
    function getLetter(s) {
    let letter = s[0];

    switch(letter)
    {
    case "a":
    case "e":
    case "i":
    case "u":
    case "o":
        return "A";
        break;
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
        return "B";
        break;
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
        return "C";
        break;      
    default:
        return "D";
    }

    return letter;
}



// Loops
function isVowel(c)
{
    var vowel = ["a", "i", "u", "e", "o"];

    for (var i = 0; i < vowel.length; i++)
    {
        if (c === vowel[i])
        {
            return true;
        }
    }

    return false;
}

function vowelsAndConsonants(s) {
    for (var i = 0; i < s.length; i++)
    {
        if (isVowel(s[i]))
        {
            console.log(s[i]);
        }
    }
    for (var i = 0; i < s.length; i++)
    {
        if (!isVowel(s[i]))
        {
            console.log(s[i]);
        }
    }  
}




// functions
function factorial (n)
{
    if (n < 2)
    {
        return 1;
    }

    // Recursive
    return n * factorial(n - 1);
}


// let and const
const PI = Math.PI;

function main() {
    const r = parseFloat(readLine());
  
    let area = PI * r * r;
    let perimeter = 2*PI*r;

    console.log(area);
    
    console.log(perimeter);
}




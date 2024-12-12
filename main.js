let result;
let first=Number(prompt("First Number"));
let second=Number(prompt("Second Number"));
let operator= prompt("Add Operator");


function sum(x , y) {
return x + y ;
}
function minus(x , y) {
    return x - y ;
    }
    function multiplication (x , y) {
        return x * y ;
        }
        function devide (x , y) {
            return x / y ;
            }
            
            function calc( x , y , operator) {
                switch (operator){

                    case "+":
                        return sum(x , y);

                        case "-":
                        return minus(x , y);

                        case "*":
                        return multiplication(x , y);

                        case "/":
                        return devide(x , y);
                }     
            }

            

            
            


// let x= Number(prompt("First Number"));
// let y= Number(prompt("Second Number"));
// let operator= prompt("Operator");

// let result;

// if(operator== '+') {
//     result = x+y ;
// }
//     else if (operator== '-') {
//         result = x-y ;
//     }
//     else if (operator== '*') {
//         result = x*y ;
// }
//     else if (operator == '/') {
//         result = x / y ;
//     }
//     else {
// result=("bele cavab yoxdur");
//     }




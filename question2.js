function sum(num1, num2){
    var sumOfNum = num1 + num2;
    return sumOfNum;
}
// function multiply(d,e){
//     var f = d*e;
//     return f;
// }

function multiply(d){
    var multipliedNum = d * 42
    return multipliedNum
}

var add1 = sum(5,8);
var prod2 = multiply(add1);
//result should be 546
console.log(prod2);
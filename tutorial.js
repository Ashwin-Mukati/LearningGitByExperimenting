// let sum = (num1,num2)=>num1+num2;
// module.exports = sum;

let sum = (num1,num2)=>num1+num2;
let PI =3.14;
class MyClass {
    constructor(){
        console.log('hello world');
    }
}
module.exports = {
    sum : sum,
    PI : PI,
    MyClass : MyClass
}
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.MyClass = MyClass;
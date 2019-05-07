// global scope
var globalVar= 'hello world';

function sayHello(){
    console.log(globalVar);

    //local/function scope
    var funcVar = 'i\'m scoped inside a function';
    console.log(funcVar);
}

sayHello();
console.log(globalVar);
//type block scope
if(true){
    let/*or const,const stores only a constant value cannot be reassigned, let is essentially the same as var, can be reassigned*/ blockVar= 'i\'m inside a block';
    console.log(blockVar);
}
// console.log(blockVar);

function secondFunction(){
    
}
secondFunction();
//nested scope
function outerFunction() {
    const outer = 'i\'m defined in outerFunction';
    console.log(outer);

    function innerFunction() {
        const inner = 'i\'m defined in innerFunction';
        console.log(inner);
    }
    innerFunction();
    // console.log(inner);
    return innerFunction;
}
outerFunction()();
// innerFunction();

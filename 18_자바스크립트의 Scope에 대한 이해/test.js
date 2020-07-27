// Global Scope : 코드의 모든 범위에서 사용이 가능
// Function Scope : 함수 안에서만 사용이 가능
// Block Scope : if, for, switch 등 특정 블록 내부에서만 사용 가능

const value = 'hello!';

function myFunction() {
    console.log('myFunction: ');
    console.log(value);
}

function otherFunction() {
    console.log('otherFunction: ');
    const value = 'bye!';
    console.log(value);
}

myFunction();
otherFunction();

console.log('global scope: ');
console.log(value);

// bye 라는 값은 otherFunction 내부에서만 유효한 값.
// 기존 global이 바뀌지는 않음.

const val = 'hello!';

function myFunc() {
    const val = 'bye!';
    const anotherValue = 'world';
    function functionInside() {
        console.log('functionInside: ');
        console.log(val);
        console.log(anotherValue);
    }
    functionInside();
}

myFunc();
console.log('global scope: ');
console.log(val);
// console.log(anotherValue);

const str = 'hello!';

function maFunc() {
    const str = 'bye!';
    if(true){
        const str = 'world';
        console.log('block scope: ');
        console.log(str);
    }
    console.log('function scope: ');
    console.log(str);
}

maFunc();
console.log('global scope: ');
console.log(str);

// 여기서 한 것들은 let 또한 마찬가지 이다.

// 하지만 var는?
var s = 'hello!';

function maF() {
    var s = 'bye!';
    if(true){
        var s = 'world';
        console.log('block scope: ');
        console.log(s);
    }
    console.log('function scope: ');
    console.log(s);
}

maF();
console.log('global scope: ');
console.log(s);

// var는 Function Scope로 선언이 되므로 if문 블록 내부에서 선언한
// value 값이 블록 밖의 value에도 영향을 미치게 된다.

// Hoisting 이해하기
// 자바스크립트에서 아직 선언되지 않은 함수/변수를 끌어올려서 사용할 수 있는 자바스크립트의
// 작동 방식을 의미한다.
thFunction();

function thFunction() {
    console.log('hello world!');
}
// 이것이 작동하는 이유는 자바스크립트 엔진이 위 코드를 해석 하는 과정에서,
// 반대로 바꿔서 받아들이게 되기 때문이다.
// 이러한 현상을, Hoisting 이라고 부른다.
// 변수 또한 Hoisting 된다.

console.log(th); // undefined
var th = 2; 
// 이 코드 같은 경우에는
/*
var th;
console.log(th);
th = 2; 
*/ // 이렇게 받아들인다.

// 반면, const와 let은 hoisting이 발생하지 않고, 에러가 발생하게 된다.
// Codesandbox 에서는 자바스크립트가 Babel이라는 도구에 의하여 const와 let이
// var로 변환되기 때문에 오류가 발생하지 않는다.
function fn() {
    console.log(a);
    let a = 2;
}
fn();

// Hoisting은 자바스크립트 엔진이 갖고 있는 성질이며, Hoisting을 일부러 할 필요는
// 없지만, 방지하는 것이 좋다. 
// Hoisting을 방지하기 위해서, 함수의 경우 꼭 선언 후에 호출을 하도록
// 주의 해주고, var 대신 const, let 위주로 사용하자. 
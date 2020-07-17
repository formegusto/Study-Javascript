// 음 ? 시작부터 이상함
// Truthy: true같은거;; / Falsy: false같은거;;
// undefined 에서 나타나는 에러 
// ===> TypeError: Cannot read property 'name' of undefined
// null 에서 나타나는 에러
// ===> TypeError: Cannot read property 'name' of null
// 그러면 우리는
function print(person){
    if(person === undefined || person === null){
        console.log('Person이 왜 없죠?');
        return;
    }
    console.log(person.name);
}
const person = null;
print();
print(person);
// 이런식으로 코딩을 할 것이다. 하지만!
function pprint(person){
    if(!person){
        console.log('Person이 왜 없죠?');
        return;
    }
    console.log(person.name);
}
pprint();
pprint(person);
// 이렇게도 할 수 있다. 이것이 되는 이유는
// undefined와 null은 Falsy한 값이기 때문이다. 
// Falsy한 값 앞에 느낌표를 붙여주면 true로 전환된다.
// 이외에도 0,'',NaN 도 Falsy한 값들이다.

// NaN (Not A Number)
// NaN을 보통 마주치는 경우
const num = parseInt('15',10);
console.log(num);
const notnum = parseInt('이래도된다고?',10);
console.log(notnum); // NaN

// 이외에 모든 값들은 Truthy한 값이다.
console.log(!3);
console.log(!'hello');
console.log(!['array?']);
console.log(![]);
console.log(!{value:1});

const value = {a:1};
if(value) {
    console.log('Truthy!');
}
const truthy = value ? true : false;
console.log(truthy);

const truthy_2 = !!value;
console.log(truthy_2);
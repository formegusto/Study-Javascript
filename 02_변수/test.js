// 1. 변수
let value = 1; // 변수 선언
console.log(value);

value = 2; // 변수 값 바꾸기
console.log(value); 

/* 특징
 한번 선언했으면 똑같은 이름으로 선언하지 못한다.
let value = 1; */

// 2. 상수
// 상수는 한번 선언하고 값이 바뀌지 않는 값을 의미
const a = 1; // a = 2; 에러 코드

// 3. var 키워드
// let과의 차이점은 똑같은 이름으로 여러번 선언할 수 있다는 점이다.
// 사용할 수 있는 범위가 다르다.

// 데이터 타입
let num = 1;
let str = 'hello';
let bool = true;

// null과 undefined
// null : 값이 없다는 의미
// undefined : 아직 값이 설정되지 않은 것을 의미
let b1 = null;
let b2;

console.log(b1);
console.log(b2);
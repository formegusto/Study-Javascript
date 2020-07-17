// 삼항 연산자
const array = [];
let text = array.length === 0 ? '배열이 비어있다.' : '배열에 무언가 있다.'
console.log(text);
// 조건 ? true일때 : false일때

const array_ = [1];
let text_ = array_.length === 0
    ? '오 신기하네 비어있음'
    : '오 깔끔쓰 안 비어있음'
console.log(text_);

const cond_1 = false;
const cond_2 = false;
const value = cond_1
    ? '오우 들어옴'
    : cond_2
        ? '컴온'
        : 'END';
console.log(value);
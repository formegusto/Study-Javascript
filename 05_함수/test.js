function add(a, b){
    return a + b;
}

const sum = add(5,11);
console.log(sum);

/*Hello {name}!
function hello(name){
    console.log('Hello, '+ name + '!');
}
hello('태헌과 리액트');
*/


// ES6의 템플릿 리터럴
function hello(name){
    console.log(`Hello, ${name}!`);
}
hello('태헌과 리액트');

// 점수를 성적등급 반영
function getGrade(score){
    if(score >= 95){
        return 'A+';
    } else if(score >= 90){
        return 'A';
    }
}
console.log(getGrade(99));

// 화살표 함수
// 화살표의 좌측에는 함수의 파라미터, 화살표의 우측에는 코드 블록이 들어온다.
// 코드 내부에서 바로 return 을 하는 경우 사용할 수 있는 방법
// const plus = (a,b) => a + b;
const plus = (a,b) => {
    return a + b;
}
console.log(plus(1,2));
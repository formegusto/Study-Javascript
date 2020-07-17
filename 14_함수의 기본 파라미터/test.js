//원의 넓이를 구하는 함수
function calculateCircleArea(r) {
    return Math.PI * r * r;
}
const area = calculateCircleArea(4);
console.log(area);

const area_2 = calculateCircleArea();
console.log(area_2); // NaN

// r이 주어지지 않으면 기본값으로 1을 사용하도록 설정해놓자.
function calculateCircleArea_2(r) {
    const radius = r || 1;
    return Math.PI * radius * radius;
}
const area_3 = calculateCircleArea_2();
console.log(area_3); // 3.141...

// ES6의 방식
function calculateCircleArea_3(r=1){
    return Math.PI * r * r;
}
const area_4 = calculateCircleArea_3();
console.log(area_4);
// Holy;;

// 화살표 함수 방식
const calculateCircleArea_4 = (r = 1) => Math.PI * r * r;
const area_5 = calculateCircleArea_4();
console.log(area_5); // Wow;;
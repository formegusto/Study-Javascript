for (let i=0;i<10;i++){
    console.log(i);
}

for(let i=10;i>0;i--){
    console.log(i);
}

// 배열과 for
const names = ['멍멍이', '야옹이', '멍뭉이'];
for(let i=0;i<names.length;i++){
    console.log(names[i]);
}

// while
let i = 0;
while (i < 10){
    console.log(i);
    i++;
}

// for each
/*
let numbers = [10,20,30,40,50];
for(let number of numbers){
    console.log(number);
}
*/
// 객체를 위한 반복문 for .. in
const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};
console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));
/*
    Object.entries: [[키,값], [키,값]] 형태의 배열로 변환
    Object.keys: [키,키,키] 형태의 배열로 변환
    Object.values: [값,값,값] 형태의 배열로 변환
*/
for(let key in doggy){
    console.log(`${key}: ${doggy[key]}`);
}
// key 가 붙는듯

// break와 continue
for(let i=0;i<10;i++){
    if(i == 2) continue;
    console.log(i);
    if(i == 5) break;
}

// Quiz 1. numbers라는 배열을 파라미터로 받아서 총합을 구하는 함수
/*
function sumOf(numbers){
    let sum = 0;
    for(let number of numbers) {
        sum += number;
    }
    return sum;
}
const result = sumOf([1,2,3,4,5]);
console.log(result);
*/

// Quiz2. 숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열안에 들어있는 숫자 중 3보다 큰 숫자
// 로만 이루어진 배열을 새로 만들어서 반환해보자.
function biggerThanThree(numbers){
    const result = [];
    for(let number of numbers){
        if(number > 3)
            result.push(number);
    }

    return result;
}
let numbers = [1,2,3,4,5,6,7];
console.log(biggerThanThree(numbers)); // [4,5,6,7]
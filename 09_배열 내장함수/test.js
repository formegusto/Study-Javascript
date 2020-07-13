//forEach 내장함수
const superheroes = ['아이언맨','캡틴 아메리카','토르','닥터 스트레인지'];
superheroes.forEach(hero => {
    console.log(hero);
})

superheroes.forEach(function test(hero){
    console.log(hero);
})
// 파라미터로 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어준다.

//map
// map은 배열 안의 각 원소를 변환 할 때 사용 되며, 이 과정에서 새로운 배열이 만들어진다.
const array = [1,2,3,4,5,6,7,8];
// => 배열 안의 모든 숫자를 제곱해서 새로운 배열을 만들고 싶을 때
const squared = [];
array.forEach(n => {
    squared.push(n * n);
});
console.log(squared);
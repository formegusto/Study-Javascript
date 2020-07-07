// 객체는 변수 혹은 상수를 사용하게 될 때 하나의 이름에 여러 종류의 값을 넣을 수 있게 해준다.
const dog = {
    name: '멍멍쓰',
    age: 2
};

console.log(dog.name);
console.log(dog.age);

// 공백이 있어야 하는 상황에서는 따옴표로 감싸서 문자열로 넣어준다.
const sample = {
    'key with space':true
};
console.log(sample["key with space"]);

// 영화 캐릭터
const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};
const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};
console.log(ironMan);
console.log(captainAmerica);

// 함수에서 객체를 파라미터로 받기
function print(hero){
    const text = `${hero.alias}(${hero.name}) 역할 ==> ${hero.actor}`;
    console.log(text);
}
print(ironMan);

// 객체 비구조화 할당 == 객체 구조 분해
function print_b(hero){
    const { alias, name, actor } = hero;
    const text = `${alias}(${name}) 역할 ==> ${actor}`;
    console.log(text);
}
print_b(captainAmerica);

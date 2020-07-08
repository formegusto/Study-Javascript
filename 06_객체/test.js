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

// 객체 비구조화 할당 == 객체 구조 분해 (깔끔버전)
function print_c({ alias,name,actor }){
    const text = `${alias}(${name}) 역할 ==> ${actor}`;
    console.log(text);
}
print_c(ironMan)

// 객체 안에 함수 넣기
const mungmung = {
    name: '멍멍이',
    sound: '왜 나는 멍멍하고 울어야 하죠 ㅠ',
    say: function Say() {
        console.log(this.sound);
    }
};
mungmung.say();
    // 주의! 화살표함수는 객체 안에 넣을 수 없다! this가 제대로 자신이 속한 객체를 가리키지 않기 때문!

// Getter 함수와 Setter 함수
const numbers = {
    _a:1,
    _b:2,
    sum:3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value){
        console.log('a가 췌인지');
        this._a = value;
        this.calculate();
    },
    set b(value){
        console.log("b도 췌이지 업");
        this._b = value;
        this.calculate();
    }
}
console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);

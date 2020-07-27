// spread
/*
const slime = {
    name: '슬라임'
};

const cuteSlime = {
    name: '슬라임',
    attribute: 'cute'
};

const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
*/

// 위 방식을 spread 문법을 사용하면
const slime = {
    name: '슬라임'
};

const cuteSlime = {
    ...slime,
    attribute: 'cute',
};

const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
};
console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

// 이는 배열 문법에서도 사용할 수 있다.
const animals = ['개','고양이','참새'];
const anotherAnimals = [...animals, '비둘기'];

console.log(animals);
console.log(anotherAnimals);

const numbers = [1,2,3,4,5];
const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers);

// rest
// spread랑 비슷한데 역할이 매우 다르다.
const purpleCuteSlime_2 = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};
const { color, ...rest } = purpleCuteSlime_2;
console.log(color);
console.log(rest);

const { attribute, ...slime_2 } = rest;
console.log(slime_2);

// 배열에서 rest
const numbers_2 = [0,1,2,3,4,5,6];
const [one, ...restNums] = numbers_2;
console.log(one);
console.log(restNums);

// 비구조화 할당을 통하여 원하는 값을 밖으로 꺼내고, 나머지 값을 rest 안에 넣는 것이다.
// 그래서 spread 처럼 앞쪽에 기입할 수 없다.

// 함수 파라미터에서의 rest
function sum(a,b,c,d,e,f,g){
    let sum = 0;
    if(a) sum += a;
    if(b) sum += b;
    if(c) sum += c;
    if(d) sum += d;
    if(e) sum += e;
    if(f) sum += f;
    if(g) sum += g;
    return sum;
}

const result = sum(1,2,3,4,5,6);
console.log(result)
// 위는 함수의 개수를 맞춰줘야 한다는 단점이 있다.
// 그래서 이렇듯 함수의 파라미터가 몇개가 될 지 모르는 상황에서 rest 파라미터를 
// 사용하면 매우 유용하다.
function sum_rest(...rest){
    return rest.reduce((acc, current) => 
        acc+current, 0);
}
const res = sum_rest(1,2,3,4,5,6);
console.log(res);

// 함수 인자와 spread
// 파라미터 : 함수 괄호에 기입한것.
// 인자 : 함수 안에서 사용하는 것
const numbers_spread = [1,2,3,4,5,6];
const re = sum_rest(...numbers_spread);
console.log(re);

//퀴즈 함수에 n 개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내세요.
function max(...rest){
    return rest.reduce((acc, current) => 
        acc < current ? current : acc, 0);
}

const resu = max(1,2,3,4,10,5,6,7);
console.log(resu);
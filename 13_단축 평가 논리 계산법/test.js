const dog = {
    name: '멍멍이'
};

function getName(animal){
    return animal.name;
}

const name = getName(dog);
console.log(name);
// 이거를 const name = getName()
// 이렇게 하면 당연히 에러가 날 것이다 name을 뽑아낼 요소가 없으므로
// 그러면 우리는
function getName_2(animal){
    if(animal){
        return animal.name;
    }
    return undefined;
}
console.log(getName_2());
// 이런 느낌으로 짤 것이다.

// && 연산자로 코드 단축
function getName_3(animal){
    return animal && animal.name
}
console.log(getName_3());
// 생각을 해보면 falsy && truthy 의 싸움이다. 
// A && B 의 결과를 생각해보면 두개 다 true 면 B의 값이 반환이된다.
// 하지만 A가 Falsy한 값이라면 A가 반환이 된다.
// 그래서 그런것이다.
// 속성 훈련
console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1 

// || 연산자로 코드 단축시키기
const namelessDog = {
    name: ''
};
function getName(animal){
    const name_ = animal && animal.name;
    if(!name_){
        return '이름이 왜 업숒?';
    }
    return name_;
}
const name_ = getName(namelessDog);
console.log(name_);

function getName_(animal){
    const name__ = animal && animal.name;
    return name__ || '이름이 없는 동물입니다.';
}
const name__ = getName_(namelessDog);
console.log(name__);
// 이렇게 || 는 첫번째 성공시키면 바로 반환 시키기 때문에!
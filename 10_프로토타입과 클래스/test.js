// 객체 생성자
function Animal(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function() {
        console.log(this.sound);
    };
}

const dog = new Animal('개','멍멍이','멍멍');
const cat = new Animal('고양이','야옹이','야옹');
dog.say();
cat.say();
// 객체 생성자는 함수의 이름을 대문자로 시작하고, 새로운 객체를 만들 때에는
// new 키워드를 앞에 불여주어야 한다.

// 프로토타입
// 같은 객체 생성자 함수를 사용하는 경우, 특정 함수 또는 값을 재사용할 수 있다.
function pAnimal(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
}
pAnimal.prototype.say = function() {
    console.log(this.sound);
};
pAnimal.prototype.sharedValue = 1;

const pdog = new pAnimal('개','멍멍이','멍멍');
const pcat = new pAnimal('고양이','야옹이','야옹');
pdog.say();
pcat.say();
console.log(pdog.sharedValue);
console.log(pcat.sharedValue);
// 객체 생성자 함수 아래에 ".prototype.[원하는키] = 코드" 를 입력하여 설정

// 객체 생성자 상속받기
// 해당 객체 생성자들에서 Animal의 기능을 재사용하는 방법.
function eAnimal(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
}
eAnimal.prototype.say = function () {
    console.log(this.sound);
};
eAnimal.prototype.sharedValue = 1;

function eDog(name, sound){
    eAnimal.call(this, '개', name, sound);
}
eDog.prototype = eAnimal.prototype;
function eCat(name, sound){
    eAnimal.call(this, '고양이', name, sound);
}
eCat.prototype = eAnimal.prototype;
const edog = new eDog('멍멍이','멍멍');
const ecat = new eCat('야옹이','야옹');
edog.say();
ecat.say();
// .call 함수의 첫번째 인자에는 this를 넣어주고, 그 이후에는 상속받는 객체에
// 필요한 파라미터를 넣어주어야 한다.
// 추가적으로 prototype을 공유해야 하기 때문에 상속받은 객체 생성자 함수를 만들고 
// 나서 prototype 값을 Animal.prototype으로 설정해주었다.

//클래스
class cAnimal {
    constructor(type, name, sound){
        this.type = type;
        this.name = name;
        this.sound = sound
    }
    say() {
        console.log(this.sound);
    }
}
const cDog = new cAnimal('개','멍멍이','멍멍');
const cCat = new cAnimal('고양이','야옹이','야옹');
cDog.say();
cCat.say();
// 더 명확한, 깔끔한 구현을 표현할 수 있다. 또한 상속도 같은 장점을 가진다.
class ceDog extends cAnimal {
    constructor(name,sound){
        super('개',name,sound);
    }
}
class ceCat extends cAnimal {
    constructor(name, sound){
        super('고양이',name,sound);
    }
}
const cedog = new ceDog('언제까지','멍멍');
const cecat = new ceCat('야옹이냐','야옹');
cedog.say();
cecat.say();
// super 는 함수가 상속받은 클래스의 생성자를 가르킨다.

//연습
class Food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }
    addBrand(brand){
        this.brands.push(brand);
    }
    print() {
        console.log(`${this.name}을/를 파는 음식점들:`);
        console.log(this.brands.join(', '));
    }
}
const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');

const chicken = new Food('치킨');
chicken.addBrand('처갓집'); // 존맛;;
chicken.addBrand('허니콤보'); // 내 이름이랑 찰떡

pizza.print();
chicken.print();
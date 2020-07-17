// 특정 값이 여러 값 중 하나인지 확인해야 할 때
const isAnimal = (text) => text === '고양이' || text === '개';
console.log(isAnimal('개'));
console.log(isAnimal('노트북'));

// 간결하게 만들기
const isAnimall = (name) => {
    const animals = ['고양이','개','거북이','너구리'];
    return animals.includes(name);
}
console.log(isAnimall('개'));
console.log(isAnimall('노트북'));

// 당신이 원한다면
const isAnimalll = name => ['개','고양이','거북이','너구리'].includes(name);
console.log(isAnimalll('개'));
console.log(isAnimalll('노트북'));

// 값에 따라 다른 결과물을 반환해야 할 때
// 동물 이름으로 동물의 소리 반환
const getSound = animal => {
    if(animal === '개') return '멍멍!';
    if(animal === '고양이') return '고양고양';
    if(animal === '참새') return '참색색';
    if(animal === '비둘기') return '99 99';
    return '...?';
}
console.log(getSound('개'));
console.log(getSound('비둘기'));

// swit case
const getSoundd = animal => {
    switch(animal) {
        case '개' :
            return '멍멍!';
        case '고양이' :
            return '고양고양';
        case '참새' :
            return '참색색';
        case '비둘기' : 
            return '99 99';
        default:
            return '...?';
    }
}
console.log(getSoundd('개'));
console.log(getSoundd('비둘기'));
// 이제야 풀린 의문 break를 생략해도 된다.

const getSounddd = animal => {
    const sounds = {
        개: '멍멍!',
        고양이: '야홍홍.',
        참새: '잭잭',
        비둘기: '99 9 9 9 9999'
    };
    return sounds[animal] || '...?';
}
console.log(getSounddd('참새'));
console.log(getSounddd('고양이'));

// 값에 따라 실행해야 하는 코드 구문이 다를 때는?
const makeSound = animal => {
    const tasks = {
        개() {
            console.log('멍멍멈ㅁ!!');
        },
        고양이() {
            console.log('고양ㅇ이잉!!');
        },
        비둘기() {
            console.log("비드ㅡ를99");
        }
    };
    if(!tasks[animal]){
        console.log('...?');
        return;
    }
    tasks[animal]();
}
makeSound('호랑이');
makeSound('비둘기');
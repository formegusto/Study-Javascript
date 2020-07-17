// b의 값이 주어지지 않았다고 가정할 때
const object = { a:1 };
const print = ({a,b=2}) => {
    console.log(a);
    console.log(b); // 기본값 없을 시 undefined
}
print(object);

// 비구조화 할당 시 이름 바꾸기
const animal = {
    name: '멍멍이',
    type: '개'
};
const { name: nickname } = animal;
console.log(nickname);

// 배열 비구조화 할당
const array = [1,2];
const [one,two] = array;
console.log(one);
console.log(two);

const arrayy = [1];
const [onee, twoo=2] = arrayy; // 기본값 지정 가능
console.log(onee);
console.log(twoo);

// 깊은 값 비구조화 할당
const deepObject = {
    state: {
        information: {
            name: 'velopert',
            languages: ['korean', 'english', 'chinese']
        }
    },
    value: 5
}
// 1. 비구조화를 두번 쓰기
const { name: namee, languages } = deepObject.state.information;
const { value } = deepObject;
const extracted = {
    namee,
    languages,
    value
};
// 이거슨 namee : namee , lan : lan , val : val 이랑 같다
// 이 기술의 이름은.. object-shorthand... 객체 짧은 손..
console.log(extracted);

// 2. 한번에 모두 추출하는 방법
const {
    state: {
        information: {name: nameee, languages: languagess}
    },
    value : valuee
} = deepObject;
const extractedd = {
    nameee,
    languages,
    valuee
}
console.log(extractedd);
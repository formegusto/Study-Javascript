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
// Map을 사용하면?
const square = n => n * n;
const squared_map = array.map(square);
console.log(squared_map);
// map 함수의 파라미터로는 변화를 주는 함수를 전달해준다. 이를 변화함수라고 부른다
// 변화함수 square 는 파라미터 n을 받아와서 이를 제곱해준다.
// array.map 함수를 사용할 때 square를 변화함수로 사용함으로서, 내부의 모든 값에
// 대하여 제곱을 해서 새로운 배열을 생성했다.
// 변화 함수를 꼭 이름을 붙여서 사용할 필요는 없다.
const squared_map_2 = array.map(n => n * n);
console.log(squared_map_2);

//indexOf
//원하는 항목이 몇번째 원소인지 찾아주는 함수이다.
const index = superheroes.indexOf('토르');
console.log(index);
console.log(superheroes[index]);

//findIndex
// 배열 안에 있는 값이 숫자, 문자열 또는 불리언이라면 찾고자 하는 항목이 몇번째
// 원소인지 알아내려면 indexOf를 사용하면 된다. 하지만, 배열 안에 있는 값이 객체
// 이거나 배열이라면 indexOf로 찾을 수 없다.
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    },
    {
        id: 5,
        text: 'find를 배웠구요.',
        done: true
    },
    {
        id: 6,
        text: '키키 필터 테스트 하려구요',
        done: false
    }
];
const todos_index = todos.findIndex(todo => todo.id === 3);
console.log(index);
console.log(todos[index]);
// findIndex 함수에 검사하고자 하는 조건을 반환하는 함수를 넣어서 찾을 수 있다.

//find
// 찾아낸 값의 인덱스가 아닌, 찾아낸 값 자체를 반환한다.
const todos_value = todos.find(todo => todo.id === 4);
console.log(todos_value);

//filter
// 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만든다.
const taskNotDone = todos.filter(todo => todo.done === false);
    // ==> const taskNotDone = todos.filter(todo => !todo.done);
console.log(taskNotDone);

//splice
// 배열에서 특정 항목을 제거할 때 사용한다.
const numbers = [10,20,30,40];
const mum_index = numbers.indexOf(30);
numbers.splice(mum_index, 1);
console.log(numbers);
// 첫번째파라미터는 어떤 인덱스부터 지울지, 두번째 파라미터는 그 인덱스부터 몇개를 지울지를 의미

//slice
// 배열을 잘라낼 때 사용하는데, 중요한 점은 기존의 배열은 건들이지 않는다는 것이다.
const sliced = numbers.slice(0,2);
console.log(sliced);
console.log(numbers);
// 첫 번째 파라미터는 어디서부터 자를지, 두번째 파라미터는 어디까지 자를지를 의미.
// <

//shift
// 첫번째 원소를 배열에서 추출해준다. ( 추출하는 과정에서 배열에서 해당 원소는 사라진다. )
const sh_numbers = [10,20,30,40];
const value = sh_numbers.shift();
console.log(value);
console.log(sh_numbers);

//pop
// 배열의 맨 마지막 원소를 추출 ( 역시 원소는 사라짐 
const pop_numbers = [10,20,30,40];
const pop_value = pop_numbers.pop();
console.log(pop_value);
console.log(pop_numbers);

//unshift
// 배열의 맨 앞에 새 원소를 추가
const un_numbers = [10,20,30,40];
un_numbers.unshift(5);
console.log(un_numbers);

//concat
// 여러개의 배열을 하나의 배열로 합쳐준다.
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const concated = arr1.concat(arr2);
console.log(concated);

//join
// 배열 안의 값들을 문자열 형태로 합쳐준다.
const array_join = [1,2,3,4,5];
console.log(array_join.join());
console.log(array_join.join(' '));
console.log(array_join.join(', '));

//reduce
// 첫 번째 파라미터는 accumulator, current를 파라미터로 가져와서 결과를
// 반환하는 콜백함수 이고, 
// 두번째 함수는 reduce 함수에서 사용 할 초깃값이다.
const re_numbers = [1,2,3,4,5];
let sum = re_numbers.reduce((accumulator,current) => {
    console.log({ accumulator, current });
    return accumulator + current;
}, 0);
console.log(sum);

// reduce를 사용해서 평균 계산하기
const re_numbers_2 = [1,2,3,4,5];
let sum_2 = re_numbers_2.reduce((accumulator, current, index, array) => {
    if(index === array.length - 1){
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
}, 0);
console.log(sum_2);
// 추가 파라미터로 index와 array를 받을 수 있고,
// index는 현재 처리하고 있는 항목이 몇 번째인지 가리키고,
// array는 현재 처리하고 있는 배열 자신을 의미

// 숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만들자.
function countBiggerThanTen(numbers) {
    /* 구현해보세요 */
    return numbers.reduce((accumulator, current) => {
        if(current > 10){
           return ++accumulator;
        }
        return accumulator;
    },0);
}
const count = countBiggerThanTen([1,2,3,5,10,20,30,40,50,60]);
console.log(count);

/*
// 답1
function countBiggerThanTen(numbers) {
    구현해보세요 
    let count = 0;
    numbers.forEach(n => {
      if (n > 10) {
        count++;
      }
    });
    return count;
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); 
  

  function countBiggerThanTen(numbers) {
    return numbers.filter(n => n > 10).length;
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); 

  function countBiggerThanTen(numbers) {
    return numbers.reduce((acc, current) => {
      if (current > 10) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count);
  */
const array = [1,2,3,4,5];

const objects = [{ name : '멍멍이' }, { name : '야옹이'}];
console.log(objects);
console.log(objects[0]);
console.log(objects[1]);

// 배열에 새 항목 추가하기
objects.push ({
    name: '호랑이'
});
console.log(objects);

//배열 크기 알아내기
console.log(objects.length);
objects.push ({
    name : '고라니'
});
console.log(objects.length);
const a = 1;
if (a + 1 === 2){
    console.log('a + 1 이 2 입니다.');
}

const b = 10;
if ( b === 5 ){
    console.log('5임');
} else if ( b === 10 ){
    console.log('10임');
} else {
    console.log('그 무엇도 아님');
}

const device = 'iphone';
switch (device) {
    case 'iphone' : 
        console.log('열 아이폰');
        break;
    case 'ipad' : 
        console.log('열 아이패드');
        break;
    default : 
        console.log('둘 다 아니면 뭐지?');
        break;
}
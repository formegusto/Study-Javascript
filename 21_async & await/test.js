// ES8에 해당하는 문법으로, Promise를 더욱 쉽게 사용할 수 있게 해준다.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}
/*
async function process() {
    console.log('안녕하다!');
    await sleep(1000);
    console.log('반갑다!');
}

process();
// 함수를 선언 할 때 함수의 앞부분에 async 키워드를 붙여준다. 그리고
// Promise의 앞 부분에 await을 넣어주면 해당 프로미스가
// 끝날때까지 기다렸다가 다음 작업을 수행할 수 있다.
// 함수에서 async를 사용하면, 해당 함수는 결과값으로 Promise를 반환하게
// 된다.

process().then(() => {
    console.log('작업이 끝났다');
});

// async 함수에서 에러를 발생 시킬때에는 throw를 사용하고, 에러를 잡아낼 때는
// try/catch 문을 사용한다.
*/

/*
async function makeError() {
    await sleep(1000);
    const error = new Error();
    throw error;
}

async function process() {
    try {
        await makeError();
    } catch(e) {
        console.error(e);
    }
}

process();
*/

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
};

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
};

const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
};

/*
async function process() {
    const dog = await getDog();
    console.log(dog);

    const rabbit = await getRabbit();
    console.log(rabbit);

    const turtle = await getTurtle();
    console.log(turtle);
}

process();
*/
// 지금 동기의 의미가 없는데, 동시에 작업을 시작하고 싶다면
// Promise.all을 사용하면 된다.
/*
async function process() {
    const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(results);
}

process();
// 여기서 비구조화 할당 문법을 사용하면 각 결과값을 따로따로 추출할 수 있겟죠?
*/
/*
async function process() {
    const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
}

process();
*/
// 주의할점! Promise.all 를 사용할 때에는, 등록한 프로미스 중 하나라도 실패하면,
// 모든게 실패 한 것으로 간주한다.

// Promise.race : 여러개의 프로미스를 등록해서 실행했을 때 가장 빨리 끝난 것 하나만의 결과값을 가지고 온다.
async function pro() {
    const first = await Promise.race([
        getDog(),
        getRabbit(),
        getTurtle()
    ]);
    console.log(first);
}

pro();

// race의 경우엔 가장 다른 Promise가 먼저 성공하기 전에 가장 먼저
// 끝난 Promise 가 실패하면 이를 실패로 간주한다.
// 비동기적으로 처리하면 흐름이 멈추지 않기 때문에 동시에
// 여러 가지 작업을 처리할 수도 있고,
// 기다리는 과정에서 다른 함수도 호출할 수 있다.

function work() {
    const start = Date.now();
    for(let i=0;i<1000000000;i++){}
    const end = Date.now();
    console.log(end - start + 'ms');
}

work();
console.log('다음 작업');

// for 문이 돌아갈 때는 다른 작업은 처리하지 않고 온전히 for
// 문만 실행하고 있다.
// 만약 이 작업이 진행되는 동안 다른 작업도 하고 싶다면
// 함수를 비동기 형태로 전환해주어야 한다. 그렇게 하기
// 위해서는 setTimeout 이라는 함수를 사용해줘야 한다.

function work_time() {
    setTimeout(() => {
        const start = Date.now();
        for(let i=0;i<100000000;i++){}
        const end = Date.now();
        console.log(end - start + 'ms');
    },0);
}

console.log('작업 시작!');
work_time();
console.log('다음 작업');

// setTimeout 함수는 첫 번째 파라미터에 넣는 함수를 두번째 파라미터에
// 넣은 시간(ms단위)이 흐른 후 호출해준다. setTimeout을 사용하면
// 우리가 정한 작업이 백그라운드에서 수행되기 때문에 기존의 코드 흐름을 막지 않고 동시에
// 다른 작업들을 진행 할 수 있다.
// 0ms지만 실제로는 4ms 이후에 실행된다.

// 만약 work 함수가 끝난 다음에 어떤 작업을 처리하고 싶다면?
// 콜백 함수를 파라미터로 전달해주면 된다.
// 콜백 함수? 함수 타입의 값을 파라미터로 넘겨줘서, 파라미터로 받은
// 함수를 특정 작업이 끝나고 호출을 해주는 것을 의미한다.

function work_call(callback) {
    setTimeout(() => {
        const start = Date.now();
        for(let i=0;i<100000000;i++){}
        const end = Date.now();
        console.log(end - start + 'ms');
        callback();
    },0);
}

console.log('작업 시작!');
work_call(() => {
    console.log('작업이 끝났다!');
});
console.log('다음 작업!');

// 비동기적으로 처리하는 경우
// 1. Ajax Web API 요청 : 서버쪽에서 데이터를 받아와야 할 때는,
//  요청을 하고 서버에서 응답을 할 때 까지 대기를 해야 되기 때문에 비동기적으로 처리
// 2. 파일 읽기 : 주로 서버 쪽에서 파일을 읽어야 하는 상황
// 3. 암호화/복호화 : 시간이 어느정도 걸리는 경우가 있기 때문에 비동기적으로 처리한다.
// 4. 작업 예약 : 단순히 어떤 작업을 몇초 후에 스케쥴링 해야 하는 상황에는 setTimeout을 사용하여
//  비동기적으로 처리한다.

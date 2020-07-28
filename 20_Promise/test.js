// 이전에는 비동기 작업을 처리 할 때 콜백 함수로 처리했지만, 
// 콜백 함수로 처리하게 되면 비동기 작업이 많아질 경우 코드가
// 쉽게 난잡해지게 된다.
// => 콜백 지옥

// Promise 만들기
// const myPromise = new Promise((resolve, reject) => {})
// 성공 할 수도 있꼬, 실패 할 수도 있다. 성공할 때에는 resolve를 호출해주면 되고,
// 실패할 때는 reject를 호출해주면 된다.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
})

myPromise.then(n => {
    console.log(n);
});

// resolve를 호출 할 때 특정 값을 파라미터로 넣어주면, 이 값을 작업이
// 끝나고 나서 사용할 수 있다. 작업이 끝나고 나서 또 다른
// 작업을 해야 할 때는 .then(...)을 붙여서 사용하면 된다.

const myFail = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error());
    },1000);
});
myFail
    .then(n => {
        console.log(n);
    })
    .catch(err => {
        console.log(error);
    });

function increaseAndPrint(n){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if(value === 5){
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    });
}

increaseAndPrint(0).then((n) => {
    console.log('result: ', n);
})

increaseAndPrint(0).then(n => {
        return increaseAndPrint(n);
    }).then(n => {
        return increaseAndPrint(n);
    }).then(n => {
        return increaseAndPrint(n);
    }).then(n => {
        return increaseAndPrint(n);
    }).catch(err => {
        console.error(err);
    })

increaseAndPrint(0)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .catch(e => {
        console.error(e);
    });

// 코드가 깊어지지는 않지만, 에러를 잡을 때 몇번째에서 발생했는지 알아내기가
// 어렵고, 특정 조건에 따라 분기를 나누는 작업도 어렵고, 특정 값을 공유해가면서
// 작업을 처리하기도 까다롭다.
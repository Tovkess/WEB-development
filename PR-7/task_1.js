function main(callback1, callback2) {
    setTimeout(() => {
        callback1();
    }, 2000);

    let count = 0;
    const intervalId = setInterval(() => {
        callback2();
        count++;
        if (count === 3) {
            clearInterval(intervalId);
        }
    }, 1000);
}


function callback1() {
    console.log('Callback 1 called');
}

function callback2() {
    console.log('Callback 2 called');
}

main(callback1, callback2);
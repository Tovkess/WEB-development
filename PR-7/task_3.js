function main(data) {
    return new Promise((resolve, reject) => {
        if (typeof data !== 'number') {
            reject('error');
        } else if (data % 2 !== 0) {
            setTimeout(() => {
                resolve('odd');
            }, 1000);
        } else {
            setTimeout(() => {
                reject('even');
            }, 2000);
        }
    });
}


main(3).then((message) => {
    console.log(message); 
}).catch((error) => {
    console.log(error); 
});

main(4).then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error); 
});

main('test').then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error); 
});
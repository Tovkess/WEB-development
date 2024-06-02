function job() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello world');
        }, 2000);
    });
}

job().then((message) => {
    console.log(message); 
});
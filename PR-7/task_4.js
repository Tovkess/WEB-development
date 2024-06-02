function boilWater() {
    return new Promise((resolve) => {
        console.log('Start boiling water');
        setTimeout(() => {
            console.log('Water has been boiled');
            resolve();
        }, 20000);
    });
}

function addTeaPack() {
    return new Promise((resolve) => {
        console.log('Adding tea pack');
        setTimeout(() => {
            console.log('Tea pack added');
            resolve();
        }, 5000);
    });
}

function addSugar() {
    return new Promise((resolve) => {
        console.log('Adding sugar');
        setTimeout(() => {
            console.log('Sugar added');
            resolve();
        }, 2000);
    });
}

function sliceBread(bread) {
    return new Promise((resolve, reject) => {
        console.log('Slicing bread');
        setTimeout(() => {
            if (!bread) {
                reject(new Error("There is no bread for sandwich. Cannot cook breakfast for you"));
            } else {
                console.log('Bread sliced');
                resolve();
            }
        }, 10000);
    });
}

function sliceSausage(sausage) {
    return new Promise((resolve, reject) => {
        console.log('Slicing sausage');
        setTimeout(() => {
            if (!sausage) {
                reject(new Error("There is no sausage for sandwich. Cannot cook breakfast for you"));
            } else {
                console.log('Sausage sliced');
                resolve();
            }
        }, 10000);
    });
}

function addButter(butter) {
    return new Promise((resolve, reject) => {
        console.log('Adding butter');
        setTimeout(() => {
            if (!butter) {
                reject(new Error("There is no butter for sandwich. Cannot cook breakfast for you"));
            } else {
                console.log('Butter added');
                resolve();
            }
        }, 5000);
    });
}

function cookBreakfast(teapack, sugar, bread, sausage, butter) {
    const teaPromises = [boilWater().then(addTeaPack)];
    if (sugar) {
        teaPromises.push(addSugar());
    }

    const sandwichPromises = [sliceBread(bread), sliceSausage(sausage), addButter(butter)];

    Promise.all(teaPromises.concat(sandwichPromises))
        .then(() => {
            console.log('Breakfast is ready!');
        })
        .catch((error) => {
            console.error(error.message);
        });
}

// Example usage:
cookBreakfast("Lipton", "sugar", "bread", "sausage", "butter");
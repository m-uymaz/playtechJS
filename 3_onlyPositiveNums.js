let numbers = [-21, -12, -11, -9, -5, 0, 1, 6, 17, 20, 22];

let positive = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positive.push(numbers[i]);
    }
}

console.log(positive);



//Или

// let numbers = [-21, -12, -11, -9, -5, 0, 1, 6, 17, 20, 22];

// const positive = numbers.filter((n) => n > 0);

// console.log(positive);
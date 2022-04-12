const toNum = 500;

let n1 = 0, n2 = 1, fibonacci = n1 + n2;
console.log(n1);
console.log(n2);

fibonacci = n1 + n2;

while (fibonacci <= toNum) {
    
    console.log(fibonacci);

    n1 = n2;
    n2 = fibonacci;
    fibonacci = n1 + n2;

};
// Малко по-бърз вариант.

let products = [
{ product: "Shirt", price: 10 },
{ product: "Laptop", price: 2400 },
{ product: "Bike", price: 450 },
{ product: "Chair", price: 150 },
{ product: "Phone", price: 1500 },
{ product: "Shoes", price: 60 },
{ product: "Car", price: 25000 },
{ product: "Coffe Machine", price: 500 }
];

let cheapPrice = [];
let normalPrice = [];
let pricy = [];
let overpriced = [];

let sum = 0;


for (let i = 0; i < products.length; i++) {
    if (products[i].price > 0 && products[i].price < 100) {
        cheapPrice.push(products[i]);
        sum += products[i].price;
    } else if (products[i].price >= 100 && products[i].price < 500) {
        normalPrice.push(products[i]);
        sum += products[i].price;
    } else if (products[i].price >= 500 && products[i].price <= 3000) {
        pricy.push(products[i]);
        sum += products[i].price;
    }  else if (products[i].price > 3000) {
        overpriced.push(products[i]);
        sum += products[i].price;
    }
}

// console.log("cheapPriced:", cheapPrice);
// console.log("normalPrice:", normalPrice);
// console.log("pricy:", pricy);
// console.log("overpriced:", overpriced);

console.log(sum);



// Много по-приятен код, поне за мен

// let products = [
// { product: "Shirt", price: 10 },
// { product: "Laptop", price: 2400 },
// { product: "Bike", price: 450 },
// { product: "Chair", price: 150 },
// { product: "Phone", price: 1500 },
// { product: "Shoes", price: 60 },
// { product: "Car", price: 25000 },
// { product: "Coffe Machine", price: 500 }
// ];

// let cheapPrice = products.filter((p) => p.price > 0 && p.price < 100);
// let normalPrice = products.filter((p) => p.price >= 100 && p.price < 500);
// let pricy = products.filter((p) => p.price >= 500 && p.price < 3000);
// let overpriced = products.filter((p) => p.price > 3000);

// let sum = 0;

// products.forEach(el => {
//   sum += el.price;
// });

// console.log(cheapPrice);
// console.log(normalPrice);
// console.log(pricy);
// console.log(overpriced);

// console.log(sum);
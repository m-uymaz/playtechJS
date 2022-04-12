// Задачата я разбрах като да не се сключва оценка 5.50.

let aStudents = [];

let students = [
{ name: "Ivan", score: 5 },
{ name: "Dimitar", score: 5.5 },
{ name: "Kristian", score: 4 },
{ name: "Valentin", score: 6 },
{ name: "Veselin", score: 3 },
{ name: "Genadi", score: 5 },
{ name: "Yavor", score: 3 },
{ name: "Marin", score: 5.5 },
{ name: "Kalin", score: 3 },
{ name: "Yavor", score: 6 }
];

for (let i = 0; i < students.length; i++) {
    if (students[i].score > 5.5) {
        aStudents.push(students[i]);
    }
}

console.log(aStudents);



// По-приятен начин:

// let aStudents = [];

// let students = [
// { name: "Ivan", score: 5 },
// { name: "Dimitar", score: 5.5 },
// { name: "Kristian", score: 4 },
// { name: "Valentin", score: 6 },
// { name: "Veselin", score: 3 },
// { name: "Genadi", score: 5 },
// { name: "Yavor", score: 3 },
// { name: "Marin", score: 5.5 },
// { name: "Kalin", score: 3 },
// { name: "Yavor", score: 6 }
// ];

// aStudents.push(students.filter((a) => a.score > 5.5));

// console.log(aStudents);




// Може да се направи и с for...in:

// let aStudents = [];

// let students = [
// { name: "Ivan", score: 5 },
// { name: "Dimitar", score: 5.5 },
// { name: "Kristian", score: 4 },
// { name: "Valentin", score: 6 },
// { name: "Veselin", score: 3 },
// { name: "Genadi", score: 5 },
// { name: "Yavor", score: 3 },
// { name: "Marin", score: 5.5 },
// { name: "Kalin", score: 3 },
// { name: "Yavor", score: 6 }
// ];

// for (const a in students) {
//     if (students[a].score > 5.50) {
//         aStudents.push(students[a]);
//     }
// }

// console.log(aStudents);
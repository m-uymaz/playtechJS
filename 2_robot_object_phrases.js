const robot1 = {
    name: "Roboty",
    color: "orange",
    type: "male",
    recievedPhrases: []
};

const robot2 = {
    name: "Robota",
    color: "purple",
    type: "female",
    recievedPhrases: []
};

robot1.recievedPhrases.push(`Hello there, ${robot1.name}!`);
robot2.recievedPhrases.push(`Hi there, ${robot2.name}!`);

//Mоже да се направи и с .push
//Грешна практика ли е да се използва += вместо .push?

console.log(typeof(robot1.recievedPhrases));
console.log(robot2.recievedPhrases);
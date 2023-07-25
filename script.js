var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money",
}

console.log(assistantManager);

console.log("---------------------------------")

var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

console.log(table)

// Using Dot Notation to access any individual property
console.log(table.color);
console.log(table.priceUSD);


// Alternative Approach
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

console.log(house2);

house2.floors = 3;
console.log(house2);

house2.color = "dark grey";
console.log(house2);
# Object Literals and the Dot Notation

By the end of this reading, you'll be able to:
- Explain one of the three common ways to build objects (using the object literal notation).
- Outline the common way to add new properties to objects (or update existing properties) using the dot notation.

One of the most common ways of building an object in JavaScript us using the object literal syntax: {}
To be able to access this object literal, it's very common to assign it to a variable, such as:

### Create an Object
~~~
var user = {}; 
~~~

Now an object literal is assigned to the variable user, which means that the object it is bound to can be extended and manipulated in a myriad of ways.

Sometimes, an entire object can immediately built, using the object literal syntax, by specifying the object's properties, delimited as key-value pairs.

### Creating an Object with Properties and their values

~~~
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money",
}
~~~

### Steps
1. Declare a new variable and assign an object literal to it
~~~
var assistantManager = {}
~~~

2. Assign the values to each of the object's keys using the assignment operator
~~~
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,

}
~~~

To access the table object, console log the entire object:

~~~
console.log(table);
~~~
The returned value is the entire table object:
~~~
{legs: 3, color: 'brown', priceUSD: 100}
~~~

Additionally, you can console log any individual property, like this:
~~~
console.log(table.color);
~~~

You can build any other object in a similar way:

~~~
var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}
~~~

An alternative approach of building objects is to first save an empty object literal to a variable, then use the dot notation to declare new properties on the fly, and use the assignment operator to add values to those properties; for example:

~~~
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
~~~

Additionally, you can combine the two approaches. For example:

~~~
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 1000, windows: 10}
~~~

This flexibility means that you can update already existing properties, not just add new ones:

~~~
house.windows = 11;
console.log(house); {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}
~~~
/* Advanced Array methods */

/* forEach , map, filter, reduce */

/* 
Was man vorher wissen sollte:

1. Was sind array Methoden.
2. Funktionen: 
    - wie werden sie deklariert?
    - arrow functions und return keyword.
    - wie man Funktionsparameter und Argumente verwendet

*/




 const users = [
    {
        name: "John", 
        surname: "Smith", 
        email: "john.smith@gmail.com", 
        nickname: "johnny123", 
        password: "johnnyxxx"
    },
    {
        name: "Bob",     
        surname: "Kowalski", 
        email: "bob.kowalski@gmail.com", 
        nickname: "bob123", 
        password: "bobyxxx"
    },
    {
        name: "Steven",     
        surname: "Harris", 
        email: "steven.harris@hotmail.com", 
        nickname: "steve79", 
        password: "stevexxx"
    },
];

const displayAnimals = function (ele,index,arr) {
    console.log(ele);
}

const arrowDisplayUsers = (el,i) => console.log(el.name,i); 

//FOREACH

animals.forEach( (el,i) => console.log(el.name,i) ); //Callback



//MAP

const mapedUsers = users.map( (user, index) => user.name +" "+ user.surname );

//console.log( mapedUsers );


//FILTER

const filteredUsers = users.filter( (user) => user.email.includes('gmail'))

const numbers = [1,0,3,4,1];
const animals = ["dog", "cat", "monkey", "elephant", "crocodile"]
//console.log(filteredUsers);


//REDUCE

const reduceedAnimals = animals.reduce( ( acc, el, i ) => {
    console.log("elemnt name:" +el +" - "+ acc);
    return acc + " " + el
} );

console.log(reduceedAnimals); 













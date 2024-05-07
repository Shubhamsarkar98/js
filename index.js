//JavaScript Array length

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.length)


//JavaScript Array Foreach vs Map

//foreach not return any thing
// const a=fruits.forEach((data)=>{
//     console.log(data)
// })

// const items = ["item1", "item2", "item3"];
// const copyItems = [];

// // before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }

// // after
// items.forEach((item) => {
//   copyItems.push(item);
// });

// console.log(copyItems)
//foreach if you print define new value you not print the value like that
// const items = ["item1", "item2", "item3"];

// const item=items.forEach((data)=>{
//     console.log(data)
// })

// console.log(item,'iteams')

//the item value is undfied

//----------------------------------Map----------------------------------------------//

// const arr2=fruits.map((data)=>{
//     console.log(data) 
//     return data
// })

// console.log(arr2)
//map is return the value but foreach not and if you define new arr map will do but foreach is not 
///-------------------- ----------     fliter and find--------------------------------//
//const arr=[1,6,3,1,2,1,6,8]

// const arr2=arr.filter((data)=>{
//     return (data%3==0)
// })

// console.log(arr2)




//////////-------------find--------------------//

// const arr3=arr.find((data)=>{
//     return (data%3==0)
// })

// console.log(arr3)

//filter can all value given result but find only first value given

///-------------------------------------Reduce mathod------------------------------------------//

// const arr=[20,2,3,1,2,2,10]

// const arr2=arr.reduce((acc,data)=>{
//     return acc+data
// },0)

// console.log(arr2)

//reduce mathod all data will be combined

////-------------include mathod-------------//

// const arr=[1,2,1,1,2,1,1,10]

// const arr2=arr.includes(9)
// console.log(arr2)

///----------include mathod use check the element will be or not


//////////-------------------------Spilce and slice mathod-----------------------------------------------//


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(0, 3);

// console.log(fruits)
// console.log(citrus)

//slice mathod not working original arr its make new array and their two pramater first one start which index and 
//second one end index but end index like(0,3) so 3 index not include only 0,1,2

// const arr=[1,2,2,1,1,1]

// const arr2=arr.slice(1)

// console.log(arr2)

//----------------without seccond pramater code only start postion


//-----------------splice mathod-------------------------------//

// const fruits =  ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.splice(3,2,'shu')

// console.log(fruits)

// const removeItem=fruits.splice(2,2,'shu')
// console.log(removeItem)


////////splice mathod is muniption original arr  and if you define the new arr its given remove item only----------//

////////-----------splice mathod three or mutiple parmeter first start the item to remove item,second count how mach
//  item remove , reset one add the item

///------------join mathod-----------------//

// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());

// console.log(elements.join(''));
// // Expected output: "FireAirWater"

// console.log(elements.join('-'));
// // Expected output: "Fire-Air-Water"

//------join mathod will use sparetor in array into string-------------//

///------------------flat mathod---//

// const arr1 = [0, 1, 2, [3, 4]];

// const arr2=arr1.flat()
// console.log(arr2)

// const arr3 = [0, 1, [2, [3, [4, 5]]]];

// const arr4=arr3.flat()

// console.log(arr4)

// const arr5=arr3.flat(Infinity)
// console.log(arr5)

//--------------flat mathod one arr mutiple array to its help to break the array flat(Infinity)  all arrary convert into array


///------------------sorting mathod------------------//////////

// const arr=['b','a','z','s','e']
// arr.sort()
// console.log(arr)
// const arr=[2,1,4,3,6,7,4,5,1,3,3,10,12,11,67,58,13,18]
// // console.log(arr.sort())//----its not working the sorting will  then comparing their sequences of UTF-16 code units values only so not working number.

// const arr1=arr.sort((a,b)=>{
//     return a-b
// })
// console.log(arr1)
//---perfect way sort the value

//////=============Array from-----------------------//
// creating a new array from string

//--------its convert string into array
// let newArray = Array.from("abc");

// console.log(newArray)

//------------array clone mathod------------------///

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // const arr=[...fruits,'shubham','ram','ta']
// // console.log(arr)

// const arr1=fruits.concat(arr)

///-----------Destructuring assignment------------//

// const foo = ["one", "two", "three"];
// const [red, yellow, green] = foo;
// console.log(red)

// const foo = ["one", "two"];

// const [red, yellow, green, blue] = foo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // undefined
// console.log(blue); // undefined
// const foo = ["one", "two", "three"];
// const [red,...rest] = foo;
// console.log(rest)
///---------Swapping variables----------//
// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1

// const arr = [1, 2, 3];
// [arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr); // [1, 3, 2]

//-------------------------push and pop-------------------//
// const a=[1,2,3,4,5]
// a.push(1)
// console.log(a)
///////---------push mathod original  array push in last not first
// const a=[1,2,3,4,5]
// a.pop()
// console.log(a)
///----pop mathod original  array pop in last not first

///---------------Array unshift()----------------------------//

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon","Pineapple");
// console.log(fruits)
//-----unshift meaning start  add the element not last in 
//-----The unshift() method adds new elements to the beginning of an array.
//The unshift() method overwrites the original array.


//////////---------------------------JavaScript Array shift()-----------------------------------------//
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits)
//The shift() method removes the first item of an array.
//The shift() method changes the original array.
//The shift() method returns the shifted element.
//-------------some advence mathod--------------------------///

// const arr=[
//     {
//         name:"shubham sarkar",
//         id:1,
//         salery:10000
//     },
//     {
//         name:"ram",
//         id:2,
//         salery:12000
//     },
//     {
//         name:"xyx",
//         id:3,
//         salery:13000
//     },
//     {
//         name:"yxz",
//         id:4,
//         salery:14000
//     },
//     {
//         name:"yxz11",
//         id:5,
//         salery:9000
//     },
//     {
//         name:"xyx",
//         id:6,
//         salery:8000
//     },

    
// ]
// const arr2=arr.map((data,index)=>{
//     return data.name
// })
// console.log(arr2)
// const arr3=arr.filter((data,i)=>{
//     return data.salery>10000
// }).map((t)=>{
//     return t.name
// })
//asc to desc sort
// const sort=arr.sort((a,b)=>{
//     return a.salery-b.salery
// })

// console.log(sort)
//add total the evary
// const addtotal=arr.reduce((acc,data)=>{
//     return acc+data.salery
// },0)
// console.log(addtotal)


///--------------Math mathod----------------------------------//
///------------------Math.round()----//

// const val=Math.round(4.6); answer 5
// const val=Math.round(4.4) answer 4
// const val=Math.round(4.5) answer will be 5
// console.log(val) 

//--Math.round() returns the nearest integer:
//math round will be nearest integer like (4.6) answer will 5 and 4.4 answer will be 4 becuse 4.4 nearest value will be 4

///------Math.ceil()------------------------------------------//
// console.log(Math.ceil(4.9)); answer will be 5
// console.log(Math.ceil(4.7)); answer will be 5
// console.log(Math.ceil(4.4)); answer will be 5
// console.log(Math.ceil(4.2)); answer will be 5
// console.log(Math.ceil(-4.2)) answer will be -4

//Math.ceil(x) returns the value of x rounded up to its nearest integer:

////======================================================Math.floor()====================================================//

// console.log(Math.floor(4.9)); answer 4
// console.log(Math.floor(4.7)); answer 4
// console.log(Math.floor(4.4)); answer 4
// console.log(Math.floor(4.2));  answer 4
// console.log(Math.floor(-4.2)); answer -5

//////////////===================================Math.floor(x) returns the value of x rounded down to its nearest integer:

///---------------------------------------------------------Math.trunc-------------------------------//

// console.log(Math.trunc(4.9));///----------------------answer will be 4
// console.log(Math.trunc(4.7));////---------------------answer will be 4
// console.log(Math.trunc(4.4));///----------------------answer will be 4
// console.log(Math.trunc(4.2));///----------------------answer will be 4
// console.log(Math.trunc(-4.2));///----------------------answer will be 4
//--Math.trunc(x) returns the integer part of x:
////--------------Math.sign(x)
// console.log(Math.sign(3));
// // Expected output: 1

// console.log(Math.sign(-3));
// // Expected output: -1

// console.log(Math.sign(0));
// // Expected output: 0

// console.log(Math.sign('-3'));
// // Expected output: -1
///------------The Math.sign() static method returns 1 or -1, indicating the sign of the number passed as argument. If the input is 0 or -0, it will be returned as-is.-------//

////------------------------------Math.random-----------------------------------------------------//

// console.log(Math.random()) output will 0 to 1
//console.log(Math.floor(Math.random() * 10)); output will be // Returns a random integer from 0 to 9:

///-------------------------Object-------------------------------------------//

// let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// console.log(person.firstName)
//The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
// const b=Object.entries(person).map((d)=>{
//     return d
// })
//entries given key-pair and convert into array 
// console.log(b)

// let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// const b=Object.keys(person).map((d)=>{
//     return d
// })
// //The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
// console.log(b)
// //---its given only key name in arrary

// let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// const d=Object.values(person).map((d)=>{
//     return d
// })
// console.log(d)
// let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// console.log(person.lastName)
//----------------///--------------object soma mathod---------------------------------------------------//
// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//   }
  
//   const myFather = new Person("John", "Doe", 50, "blue");
//   const myMother = new Person("Sally", "Rally", 48, "green");
//   console.log(myFather.age)

// const obj = { a: 1, b: 2 };

// const {a,b}=obj
// console.log(a)
//The keyword async before a function makes the function return a promise:
// async function myFunction() {
//     return "Hello";
//   }
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

const fruits =  ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.splice(3,2,'shu')

// console.log(fruits)

const removeItem=fruits.splice(2,2,'shu')
console.log(removeItem)


////////splice mathod is muniption original arr  and if you define the new arr its given remove item only----------//

////////-----------splice mathod three or mutiple parmeter first start the item to remove item,second count how mach
//  item remove , reset one add the item
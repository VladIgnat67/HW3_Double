// funcion declaration

// function sayHello() {
//     console.log("Hello");
// }
// sayHello()

// function getFullName(user) {
//     console.log(user);
// }

// const user = {
//     firstName: 'M',
//     lastName: 'N'
// }
// getFullName(user)



// function getFullname(user, age) {
//     if (age < 18) {
//         console.log('Close')
//     }else{
//         console.log(user.firstName, user.lastName);
//     }
// }

// const user1 = {
//     firstName: 'M',
//     lastName: 'M'
// }

// const user2 = {
//     firstName: 'V',
//     lastName: 'B'
// }

// getFullname(user1, 19)
// getFullname(user1, 22)
// getFullname(user1, 13)


// function expression

// let multy = function(a, b,) {
//     return a + b
// }

// let result = multy(50, 40)
// console.log(result);

// not information
// let sayHello = function (name) {
//     console.log('Hello' + ' ' + name);
// }
// sayHello('Vanya')

// CallBack funcion
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let doubleNum = num.map(function(number){
//     return number * 2
// })
// console.log(doubleNum);


// Sample function
// let res =(function () {
//     let a = 20
//     let b = 17
//     return a * b
// })()

// console.log(res);

// Cursor function 
// let multy = (a, b) => {
//     return a * b
// }
// console.log(multy(2,30));

// const arrow = (name) => console.log('Hello', name);
// arrow('House')

// function hight order

// function apply(num, operaton) {
//     return operaton(num)
// }
// let result = apply(5, function(num) {
//     return num * 2
// })
// console.log(result);

// Closes

// function getFullName(name) {
//     return function(lastName) {
//         console.log(name + ' ' + lastName);
//     }
// }

// const addLastName = getFullName("N")
// addLastName('R')
// addLastName('R6')

// Metod object
// let person = {
//     name: 'Alex',
//     age: 27,
//     sayHello: function () {
//         console.log(`Hello my name is ${this.name}. I am ${this.age}`);
//     }
// }
// person.sayHello()

/////////////////////////////////////////////////////

//Test1
// let multy = function(a, b,) {
//     if (a > b){
//         console.log(`${b} low ${a}`);
//     } else if (a < b){
//         console.log(`${a} low ${b}`);
//     } else if (a = b){
//         console.log(`${a} = ${b}`);
//     }
// }

// let result = multy(30, 30)
// console.log(result);

//Test 2 
// let array1 = ['Алекс', 'Анна', 'Олег']

// array1.push(1, 2, 3)

// array1.unshift('Geeks')

// array1.pop()

// array1.shift()


// let array1 = [1, true, false, ['Алекс', 'Анна',], 5]

// array1.splice(0, 3, 'Alina', 'Gen')
// console.log(array1);



// let mas1 = [1, 2, 3]
// let mas2 = [4, 5]

// mas1 = mas1.concat(mas2)
// console.log(mas1);

// let arr3 = [1, 2, 6, 3, 7, 4, 8, 0]
// console.log(arr3.sort());
// console.log(arr3);

// let arr2 = [1, true, false, ['Алекс', 'Анна',], 5]

// console.log(arr2.indexOf(true));
// console.log(arr2.lastIndexOf(1));
// console.log(arr2.includes(5));

// forEach

// const numbers = [1, 2, 3, 4, 5]

// let a = 0

// numbers.forEach(num => a += num)
// console.log(a);


// map 
// const numbers = [1, 2, 3, 4, 5, 6.7]

// const doubleNum = numbers.map((num) => num * 2)
// console.log(doubleNum);

// const names = ['алекс', 'анна', 'олег']

// const changeName = names.map((names) => names.toUpperCase())
// console.log(changeName);

// filter

// const sort = [
//     {
//         fruit:'Banana',
//         add:'16'
//     },
//     {
//         fruit:'Apple',
//         add:'17'
//     },
//     {
//         fruit:'Cherry',
//         add:'18'
//     },
// ]
// const check = sort.filter(function(sort) {
//     return sort.add < 17
// }) 
// console.log(check);


//Test3
// let arr5 = [[1, 2], [3, 4], [5, 6]]

// console.log(arr5.flat());
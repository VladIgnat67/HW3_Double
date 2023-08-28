
// 1 exercise

function equal(massiv1, massiv2) {
    if (massiv1.length !== massiv2.length) {
        console.log(false);
        return false;
    }

    for (let i = 0; i < massiv1.length; i++) {
        if (massiv1[i] !== massiv2[i]) {
            console.log(false);
            return false;
        }
    }

    console.log(true);
    return true;
}

let massiv1 = [1, 3, 5, 8];
let massiv2 = [1, 3, 5, 2];
equal(massiv1, massiv2);

// 2 exercise

function pow(number, degree) {
    return Math.pow(number, degree)
}
const result = pow (2, 3);
console.log(result);

// 3 exercise

function countChar(inputString){
const length = inputString.length;
console.log(`Длина строки: ${length}`);
}
const myString = "hello";
countChar(myString);

//////////////////////////////////////////////

// Доп 

// 1 Доп

let numbers =  [1,1,1,2,3,5,5,7,8,3];
let uniguenumburs = [...new Set (numbers)];

console.log(uniguenumburs);

// 2 Доп

const sms = (phone,text) => {
    alert(phone, text)
}

sms("+996500101010 Naela");
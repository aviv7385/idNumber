
// get ID number from the user
function getIdNumberFromUser() {
    const idNumBox = document.getElementById("idNum");
    return idCalc(idNumBox.value); // call the idCalc function
}

// check if id is legal 
function idCalc(str) {
    // convert the string to an array
    const arr = str.split("");
    // create a new array where each item is now a number
    const numsArr = arr.map(i => parseInt(i));
    // validate that the input is only numbers
    if (numsArr.some(isNaN)){
        alert("ID number should contain only digits");
        return;
    }
    // legal id number should have 9 digits
    if (numsArr.length !== 9) {
        alert("ID number should be 9 digits long");
        return;
    }

    // create a new empty array to which the multiplied number will be pushed
    let newArr = [];
    // for each number of the original array, if its index is even - do nothing and just push the number to the new array
    // if its index is odd - multiply the number by 2 and push it to the new array
    // important: though the length of the array is always 9 (legal id must have 9 digits), the 9th digit is used for inspection only,
    // so the new array will only contain the first 8 digits of the id number
    for (let i = 0; i <= 7; i++) {
        if (i % 2 === 0) {
            newArr.push(numsArr[i]);
        }
        else {
            const multipliedNum = numsArr[i] * 2;
            newArr.push(multipliedNum);
        }
    }

    // check if after the multiplication any of the numbers are larger than 9 (meaning - they have more than 1 digit)
    // if true - split this number to separated digits (eg. 14 will become [1,4]), and replace that number
    // with the array of digits (meaning [1,2,33] will become [1,2,[3,3]])
    for (let num of newArr) {
        if (num > 9) {
            // split the number to an array of 2 (or more) separated digits
            const splittedNum = num.toString().split("").map(i => parseInt(i)); // if num=18, splittedNum=[1,8]
           // find the index of the original number
            const indexToReplace = newArr.indexOf(num);
            // replace the original number with the array of the splitted number
            newArr[indexToReplace] = splittedNum; // [2, 18, 9, 5] will become [2, [1,8], 9, 5]
        }
    }

    // iterate through newArr and sum all the numbers
    // if one of the items is an array - iterate through that array and add its sum to sumOfArr
    let sumOfArr = 0;
    for (let i = 0; i <= newArr.length; i++) {
        if (Array.isArray(newArr[i])) {
            for (let j = 0; j <= newArr[i].length; j++) {
                if (newArr[i][j]) {
                    sumOfArr += newArr[i][j];
                }
            }
        }
        else {
            if (newArr[i]) {
                sumOfArr += newArr[i];
            }
        }
    }

    // the inspection - if the 9th digit of the original id number [index 8] plus the sumOfArr equals a number 
    // that is divided by 10 with no remain - the ID is legal. otherwise the ID isn't legal. 
    if ((sumOfArr + numsArr[numsArr.length - 1]) % 10 === 0) {
        alert("ID is correct");
        return true;
    }
    else {
        alert("ID is incorrect, please try again");
        return false;
    }
}

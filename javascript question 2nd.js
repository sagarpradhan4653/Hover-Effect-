// Write a JavaScript function that takes an array and a value and search that value in the given array. Write a function which takes two arguments - an array and a value. If the value provided in the argument is found in the array, the function should return the position of the element in an array. If the element is not found, the function should return "-1". 


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let val = 4;// we can change the value as per we need


function ls(arr, val) {
    for (i = 0; i < arr.length; i++)


        if (arr[i] == val) return i;
        
    return -1;
}
console.log(ls(arr, val))
 



const x = "Loki"; //value cannot be changed
let y = 6; // accessable only inside one function
var z = 6; // accessable globally

console.log(x,y,z);
let string = "Alpha college of Engineering";
console.log(string);

let array = ["apple","orange","grapes","mango"];

var arlength = array.length;

for(var i=0;i<arlength;i++){
    console.log(array[i]);
}
console.log("Length of the array: " + arlength);

console.log("\nThese are Numbers");
for(var i=1;i<=10;i++){
    console.log(i);
}


//Map function - Change of data from one array to another with/without modification
let array_1 = [1,2,3,4,8,6,7,8,9];
let array_2 = array_1.map((y) => y+y);

console.log("\nNew array using map");

// While Loop

let j = 0;
while (j < array_2.length){
    console.log(array_2[j]);
    j++;
}


//Filler is used to filter a value from the array.

let a = array_1.filter((y) => y === 8);
console.log(a);


// Filter returns boolean value

let b = array_1.some((x) => x === 8);
console.log(b);







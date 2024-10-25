//! JavaScript strings:
const fullName = 'Ibrahim Shipon';

const country = "Bangladesh";

const sen = "I'm from Bangladesh.";
const sen2 = 'I\'m from Bangladesh';
console.log(sen + ' ' + sen2);

const quatation = 'Bill Gates says "Some text"';
const quatation2 = "Bill Gates says \"Some text\" ";
console.log(quatation + ' ' + quatation2);

const quatation3 = " Bill Gates says \n \"Some text\" ";  //Line break => \n

const n = new String(`Shipon`);  // String to make object
console.log(n);

//! String Method:
let x = `I am ${fullName}. I'm from ${country}`;
console.log(x.length);
console.log(x.charAt(0));
console.log(x.toUpperCase());
console.log(x.toLowerCase());

const students = 'Ibrahim Shipon';
console.log(students.length);
console.log(students.slice(-14)); // - Value supported
console.log(students.substring(8)); // - Value not supported

const someText = '    Shipon    ';
console.log(someText);
console.log(someText.trim());
console.log(someText.trimEnd());
console.log(someText.trimStart());

const replace = 'Hi, I am Md Ibrahim';
console.log(replace.replace('Ibrahim','Shipon'));

const namee = 'Ibrahim Shipon';
console.log(namee.split(' '));



//! Best Practice of JS Strings:
let info = `I am ${fullName}. I'm from ${country}. ${8 + 2}`;

// let info = `I am ${fullName}. 
// I'm from ${country}. 
// ${8 + 2}`;
// console.log(info);
document.getElementById('title').innerText = info;

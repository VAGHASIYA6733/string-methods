//types of string writing
const data1 = "akshit";
const data2 = "av";
const data3 = `vaghasiya`;
console.log(data1, data2, data3);
//string method
//--1--string.at method
const data4 = "hello world";
console.log(data4.charAt(6));


//--2-- string.charAt method
const data5 = "this is new world";
console.log(data5.charCodeAt("i"));


//--3-- string.charCodeAt method
const data6 = "akshit";
const data7 = "vaghasiya";
console.log(data6.concat("-", data7));


//--4-- string.includes method
const data8 = "this is john doe.";
console.log(data8.includes("doe"));


//--5-- string.endsWith method
const data9 = "this is john doe.";
console.log(data9.endsWith("doe"));


//--6-- string.indexof method
const data10 = "this is john doe.";
console.log(data10.indexOf("d"));


//--7-- string.lastindexof method
//[fint -end to start but output index is start to end]
const data11 = "this is john doe.he is programer.";
console.log(data11.lastIndexOf("is"));


//--8-- string.localcomapre method
const a = "akshit"; // With accents, lowercase
const b = "AKSHIT"; // No accents, uppercase
console.log(a.localeCompare(b)); //output -1
// Expected output: 1
const a1 = "akshit"; // With accents, lowercase
const b1 = "akshit"; // No accents, uppercase
console.log(a1.localeCompare(b1)); //output 0
// Expected output: 0


//--9-- string.concat method
const str1 = "Hello";
const str2 = "world";
const str3 = str1.concat(" ", str2);
console.log(str3); // Output: "Hello world"


//--10-- string.match method
const sentence = "The quick brown fox jumps over the lazy dog.";
const regex = /[a-z]/g;
const matches = sentence.match(regex);
console.log(matches); // ["the", "the"]


//--11-- string.padend method
let str = "Hello";
let paddedStr = str.padEnd(10, ".");
console.log(paddedStr); // "Hello....."


//--12--  string.regex method
const myString = "Hello World!";
const myRegex = /World/;
const result = myString.match(myRegex);
console.log(result); // Output: ["World"]


//--13--  string.repeat method
const str10 = "Hello";
const repeatedStr = str10.repeat(3);

console.log(repeatedStr);

//--14--  string.touppercase method
const str11 = "Hello, world!";
console.log(str11.toUpperCase()); // Output: "HELLO, WORLD!"

//--15--  string.tolowercase method
const str12 = "Hello, world!";
console.log(str12.toLowerCase()); // Output: "hello, world!"

//--16--  string.slice method
let str13 = "Hello, World!";
let slicedStr = str13.slice(7, 12);
console.log(slicedStr); // Output: World

//--16--  string.split method
const str14 = "Hello world, how are you?";
const words = str14.split(" ");
console.log(words); // Output: ["Hello", "world,", "how", "are", "you?"]

//--17--  string.startswitch method
const str15 = "Saturday night plans";
console.log(str15.startsWith("Sat"));
// Expected output: true
console.log(str15.startsWith("Sat", 3));
// Expected output: false

//--18--  string.substring method
const str18 = "Mozilla";
console.log(str18.substring(1, 3));
// Expected output: "oz"
console.log(str18.substring(2));
// Expected output: "zilla"

//--19--  string.tostring method
const stringObj = new String("foo");
console.log(stringObj);
// Expected output: String { "foo" }
console.log(stringObj.toString());
 // Expected output: "foo"

//--20--  string.trim  method
const greeting = "   Hello world!   ";
console.log(greeting);
// Expected output: "   Hello world!   ";
console.log(greeting.trim());
// Expected output: "Hello world!";

//--21--  string.trimend method
const greeting1 = "   Hello world!   ";
console.log(greeting1);
// Expected output: "   Hello world!   ";
console.log(greeting1.trimEnd());
// Expected output: "   Hello world!";

//--22--  string.trimstart method
const greeting2 = '   Hello world!   ';
console.log(greeting2);
// Expected output: "   Hello world!   ";
console.log(greeting2.trimStart());
// Expected output: "Hello world!   ";

//--23--  string.valueof method
const stringObj1 = new String('foo');
console.log(stringObj1);
// Expected output: String { "foo" }
console.log(stringObj1.valueOf());
// Expected output: "foo"

//--24--  string.padstart method
const str24 = '5';
console.log(str24.padStart(2, '0'));
// Expected output: "05"

//--25--  string.replace method
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));
const regex1 = /Dog/g;
console.log(p.replace(regex1, 'ferret'));


//--26--  string. method
const p1 = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p1.replaceAll('dog', 'monkey'));
const regex2 = /Dog/g;
console.log(p1.replaceAll(regex2, 'ferret'));

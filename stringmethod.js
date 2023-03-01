//types of string writing
const data1 = "akshit"
const data2 =  'av'
const data3 = `vaghasiya`
console.log(data1,data2,data3)
//string method 
//--1--string.at method
const data4 = "hello world"
console.log(data4.charAt(6))

//--2-- string.charAt method 
const data5 = "this is new world"
console.log(data5.charCodeAt("i"))

//--3-- string.charCodeAt method 
const data6 = "akshit"
const data7 = "vaghasiya"
console.log(data6.concat("-",data7))

//--4-- string.includes method 
const data8 = "this is john doe."
console.log(data8.includes("doe"))

//--5-- string.endsWith method 
const data9 = "this is john doe."
console.log(data9.endsWith("doe"))

//--6-- string.indexof method 
const data10 = "this is john doe."
console.log(data10.indexOf("d"))

//--7-- string.lastindexof method 
//[fint -end to start but output index is start to end]
const data11 = "this is john doe.he is programer."
console.log(data11.lastIndexOf("is"))
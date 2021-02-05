let employees=[
   {name:"Snadeep",age:25, role:"Developer"},
   {name:"Snadeep",age:25, role:"Developer"},
   {name:"Snadeep",age:25, role:"Developer"},
   {name:"Snadeep",age:25, role:"Developer"},
   {name:"Snadeep",age:25, role:"Developer"},
   {name:"Snadeep",age:25, role:"Developer"}

];
//every()
function isDeveloper(employee){
 return employee.role==="Developer";
}
console.log(employees.every(isDeveloper));//false

console.log(employees)



//add or remove element in between the array
//splice(start,deleteCount,item1,item2,....);
employees.splice(1,3);
console.log(employees);
employees.splice(3,0,{name:"Satya",age:25,role:"SSE"});
console.log(employees);


//sort()
let numbers=[1,2,3,4,7,5,6,11,10];
numbers.sort();
//asending order
console.log(numbers.sort((a,b)=>{
    return a=a-b;
}));
//descending order
console.log(numbers.sort((a,b)=>{
    return a=b-a;
}));

//remove from the last
numbers.pop();
console.log("After pop---->:"+ numbers);

//adding from the last.
numbers.push(1);
console.log("After push:--->"+numbers);

//adding element in begning of arry
numbers.unshift(12);
console.log("After adding to first element:--->"+numbers);

//remove from the begning;
numbers.shift();
console.log("After removing to first element:--->"+numbers);

//HOF or helper function in array

let no=[1,2,3,4,5,6,7];
no.forEach((no)=>{
 console.log(no*2);
})
console.log(no);
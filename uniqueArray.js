let array=[1,3,5,4,5,4,5,3,3,32,1,6,7,8,9];
let array2=[1,2,4,55,1,2,4,5];
let newArray=array2.filter((v,i,a)=>{
 return a.indexOf(v)===i
});
console.log(newArray);
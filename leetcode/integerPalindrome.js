const num=123;
//convert number to string then array.
//var numA=num.toString().split("").reverse().join('');
//var reverseNum=numA.reverse.join('');

//console.log(parseInt(numA));

//console.log(reverseNum);


const palindrome=num=>{
    var x=num;
    let array=x.toString().split("").reverse().join('');
//  let reverseArray=array.reverse();

return x===Number(array)
//  if( x===Number(array)){
//      return true;
//  }
}
console.log(palindrome(num));


//There is another way
//do it tommorw
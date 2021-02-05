let array=[1,3,5,6,7];
let target=6;

var twoSum=function(array,target){
   for (var i=0;i<array.length;i++){
        for(var j=i+1;j<array.length;j++){
            if(array[j]==target-array[i]){
                return new Array(i,j)
            }
        }
        
    }
}
console.log(twoSum(array,target));
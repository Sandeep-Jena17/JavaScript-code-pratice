let name={
    firstName:"Sandeep",
    lastName:"Jena",
    printFullname:function(){
        console.log(this.firstName+" "+this.lastName);
    }
}
console.log(name.printFullname());

let name2={
    firstName:"Satya",
    lastName:"brata",
}

//console.log(name.call(name2))
name.printFullname.call(name2);


let calculateBusFare={
     busName:"orange",
     ratePerKm:2,
     calculateFare:function(distance){
         console.log(this.busName +" "+"will cost "+" "+ this.ratePerKm * distance);
     }
}
calculateBusFare.calculateFare(200);

let DiwakarBusFare={
    busName:"Diwakar",
    ratePerKm:4,
}

calculateBusFare.calculateFare.call(DiwakarBusFare,300);



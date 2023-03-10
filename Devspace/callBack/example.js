//stock of ice cream parlour
let stocks = {
    fruits:["apple","banana","grapes","strawberry"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
}

//to access objects and arrays
//console.log(stocks.fruits[3]);

let order = (fruit_name,call_production)=>{
    //console.log("order placed, now move to production");
    setTimeout(()=>{
        console.log(`Cutomer choose ${stocks.fruits[fruit_name]}`)
        call_production();

    },2000)
    // if we call this function here the order will reversed
    // thats why we call it under the setTimeout function 
    //call_production(); 

}

let production = ()=>{
    //console.log("order accepted, production starts");
    setTimeout(() => {
        console.log("Production start...")
    }, 0000);
}

order(2,production);

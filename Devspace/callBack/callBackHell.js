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
        console.log("Production start...");

        setTimeout(()=>{
            console.log("the fruits has been chopped");
            
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
            
                setTimeout(()=>{
                    console.log("machine was started")
                    
                    setTimeout(()=>{
                        console.log(`${stocks.holder[0]} was selected`)
                        
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was selected`)

                            setTimeout(()=>{
                                console.log("serve ice cream");
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)

    }, 0000);
}

order(2,production);

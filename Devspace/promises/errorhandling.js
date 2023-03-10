//instead of callback hell we use promises
//promises make code easy to understand

//stock of ice cream parlour
let stocks = {
    fruits:["apple","banana","grapes","strawberry"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
}

let is_shop_open = true;

let order = (time,work)=>{
    return new Promise( (resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve( work() )
            },time)
        }
        else{
            reject(console.log("shop is closed!"))
        }
    } )
}

order(2000,()=>console.log(`${stocks.fruits[1]} was selected`))

.then(()=>{
    return order(0000,()=>console.log("production has started"))
})

.then(()=>{
    return order(2000,()=>console.log("fruits was chopped"))
})

.then(()=>{
    return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
})

.then(()=>{
    return order(1000,()=>console.log("start the machine"))
})

.then(()=>{
    return order(2000,()=>console.log(`${stocks.holder[0]} was selected`))
})

.then(()=>{
    return order(3000,()=>console.log(`${stocks.toppings[0]} was selected`))
})

.then(()=>{
    return order(2000,()=>console.log("Serve the ice cream"))
})

//this catch will only execute if the promise get reject
.catch(()=>{
    console.log("Customer left")
})

.finally(()=>{
    console.log("day ended, shop is closed");
})
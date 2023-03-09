let stocks = {
    fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
}

let shop_open = true;

let toppings_choice = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("which toppings would you love?")
        },3000)
    })
}

async function kitchen(){
    console.log("A");
    console.log("B");

    await toppings_choice();

    console.log("C");
    console.log("D");
    console.log("E");

}
kitchen();

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking others order");
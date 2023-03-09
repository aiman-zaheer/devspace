let stocks = {
    fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
}

let shop_open = true;

function time(ms){
    return new Promise((resolve,reject)=>{
        if(shop_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("shop is closed"));
        }

    })
}

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.fruits[0]}`);
     
        await time(1000);
        console.log("start the production");

        await time(1000);
        console.log("cut the first");


    }
    catch(error){
        console.log("customer left",error)
    }
    finally{
        console.log("day ended shop is closed")
    }

}
kitchen();
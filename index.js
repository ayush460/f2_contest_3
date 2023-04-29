// This async function fetches menu data from a JSON file hosted on GitHub, and then processes it to display the menu items and prices on the console.
(async function getMenu(){
    const url = 'https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json';
    let responce = await fetch(url);
    let data = await responce.json();
    data.forEach(obj => {
        console.log(obj.name," - ", obj.price);
    });

    // This promise is created to simulate a customer's order being taken.
    let order = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({order1: "burger", order2: "Pizza", order3: "Grilled Cheese Sandwich"})
        },2500)
    });
    // The 'TakeOrder' function is called when the order promise is resolved.
    order.then(TakeOrder);
}())

// This function is called when the order promise is resolved.
function TakeOrder(val){
    console.log(val);

    // This promise is created to simulate the order being prepared.
    let prepare = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({order_status:true, paid:false})
        },1500)
    });
    // The 'orderPrep' function is called when the prepare promise is resolved.
    prepare.then(orderPrep);
}

// This function is called when the prepare promise is resolved.
function orderPrep(val){
    console.log(val);

    // This promise is created to simulate the customer paying for the order.
    let pay = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({order_status:true, paid:true})
        },1000)
    });
    // The 'payOrder' function is called when the pay promise is resolved.
    pay.then(payOrder);
}

// This function is called when the pay promise is resolved, and the payment is successful.
function payOrder(val){
    console.log(val);

    // If the payment is successful, call the 'thankyouFnc' function to display a thank-you message.
    if(val.paid==true){
        thankyouFnc();
    }
}

// This function displays a thank-you message after the payment is successful.
function thankyouFnc(){
    alert("thankyou for eating with us today!");
}

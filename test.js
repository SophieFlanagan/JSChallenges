time = Math.floor(Math.random()*25)
console.log(time)



const holidayDestination = (country, month) =>{ 
    console.log(`Yay! I'm going on holiday! to ${country} in ${month}. I can't wait.`)
}
holidayDestination("Spain", "June")



const inventory = (productCode, departmentName, quantity) =>{
    console.log(`${quantity} of ${productCode} sold from ${departmentName} department, need to update stock by ${quantity}`)
}
inventory(412345, "baked goods", 65)



let text = "Hello world, welcome to the universe."
let result = text.indexOf("welcome")
console.log(result, "this is result")


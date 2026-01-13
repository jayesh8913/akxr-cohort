const data = require('./fe02_week2_challenge.json');
let some = [{}]

console.log("all employees based on their salary, from highest to lowest.")
const employees= data.sort((a,b)=>a.salary-b.salary)

console.log(employees)

console.log("employees who have fewer than 3 years of experience, as they are still in training.")

const lol = employees.filter((x)=>{
    return x.experience > 3
})
console.log(lol)

console.log("for calculatin bonuses");

const bonus = [];
employees.forEach((x)=>{
 let mul = x.salary*x.experience*0.1;
 bonus.push(["name:",x.name,",department:",x.department,",annual bonus:",mul])
 //console.log("name:",x.name,",department:",x.department,",annual bonus:",mul)
})

console.log(bonus)

console.log("total salary expenditure");

const total= employees.reduce((total,employees)=>{
    return total=total+employees.salary;
},0)
console.log(total)
//console.log(data)
// vars are const and let 
//string ,bool, numbers ,null
let jay= "top"
let hkm= jay.toUpperCase;
//template string 
console.log(`jay is ${hkm}`)   //use back ticks

// can manipulate string using jay.touppercase ,jay.tolowercase, s.substring(0,2), jay.split('')

const arr = ["hello","world","suppppppppp"]

arr.push("lolllll")
arr.unshift("sadddd     ")
// can also use arr.pop()  , arr.indexof("hello")
console.log(arr)
// objects
const person = {
    name:"jay",
    lastname:" patil",
    something : [],
    add: {
        street:"",
        flat:""
    }
}

const todo =[                   //array having objects
    {
        id:90,
        name:"jay",
        job:"best developer"
    },
     {
        id:90,
        name:"not jay",
        job:"decent developer"
    },
     {
        id:90,
        name:"hater",
        job:"worst developer"
    }
]
console.log(todo[2].name)

const todojson =JSON.stringify(todo);
console.log(todojson+"istodotojason")

// loops 
for(let i=0 ;i<todo.length;i++){
console.log("print ",todo[i].name);
}

//foreach,map,filter

todo.forEach((todosssss)=>{
    console.log(todosssss.name)
})

let fortodojob = todo.map((parameter)=>{
    return parameter.job;
})
console.log(fortodojob ,"  is the map fnx")

let fortodoname = todo.filter((parameter)=>{
    return parameter.name==="jay";
})
console.log(fortodoname)

// ternary operator
const x= 11;

const color = x>10 ? 'red' :'white';    // in this we use ternary operator (?:) where if the condition is true 
                                        // which is the statement before ? then the assign value would be of the one after that and if not then the value after: is set there

console.log(color)      // should give red (aka true)

switch (color){
    case 'red':
        console.log("is red");
        break;
    case 'white':
        console.log("is white");
        break;        
    default:
        console.log("nay") 
    }

   let number=  Number.MIN_SAFE_INTEGER;
   console.log(number)
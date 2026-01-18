let greetings:string = "tbsm";

// many times ts automatically assigns the type and there is no restrictive need to set types and make it more redundant

console.log(greetings.toLowerCase());
function add(num:number):number{        // we can define the type of return value in the fn its;ef
    num=num+2;
    return num;
}

let loginuser =(name:string, email:string, ispaid:boolean = false)=>{} // the fn arg can be also set as a defualt value at first

// obj 
const user:object = {
    name:"jayesh",
    course:"development",
    price:1000
}

function isuser(user:object):{}{        // functions can also have typecasting for its returbn type 
    return {user}
}
const l0l= console.log(isuser(user))

type users = {              // so instead of typecasting evertime we can make a standard type and use it when needed
    readonly name:string,       // meaning that once set , it cannot be changed afterwards
    class:string,
    paid:number,
    course:string,
    details ?:string        // make this detail optional in making the next object
}

let jayesh :users       // we can also use union(|) for keeping an or fn of one or more types 

const nums: readonly number[] = [1, 2, 3]; // this make the array immutable(no push pop is allowed) but when an array is created in an obj

type Box = {
  readonly items: number[];     // items reference is readonly,But the array itself is still mutable
  readonly name: readonly string[]      // make the items reference and the array both immutable
};

const box: Box = {
  items: [1, 2, 3],
  name:["tbsm","hmm"]
};

box.items.push(4); //  ALLOWED
//box.name.push("ifehduoc") // not allowed



export{}            // for some sort of error prevention in blockscope declaration as it makes this script file as a module
// or else the script file treat this as a global variable declaration and it can clash with other files with the same variable name
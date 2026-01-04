let user_obj = {
    name:'bob',
    age:30,
    email:'bob@gmail.com',
    blogs:['tbsm','yolo'],
    login: function(){                          // obj methods 
        console.log('the iuser has logged in ')
    },
    logblogs:function(){
       console.log( this.blogs)             // we use this for reference a property calling innside the original object itself
    }
}

user_obj.login()
// these properties can be accessed by both values
console.log(user_obj.name);
console.log(user_obj['name']);

user_obj.name='jay'
console.log(user_obj.name);
// we can add a new property by 
const key='12345675432';
user_obj[key]

// js prop Math

console.log(Math)
let area =10.9
console.log(Math.round(area));
console.log(Math.floor(area)); //rounds down
console.log(Math.ceil(area));       //rounds up
console.log(Math.trunc(area));      // only the integer prt

//primitive and reference types , while primitive types are (nums,str,bool,null,symbol)
//reference types are all types ofobjects like (arr,functions,dates etc)

// all primitive types are stored in stack and the the reference types are stored in stacks and pointed towards heaps
// when a copy is made of an var it does not change when the original copy is change but it is not the same for reference types as the copy of a reference type is also just a copy pointer from heap

// map filter and reduce
const arr =[5,3,7,0,3,7];
function double(x){
    return x*2;
}
const op= arr.map(double)

const op_filter_even= arr.filter((x)=>{
    return x%2===0
})

const op_reduce_summation= arr.reduce(function(accumulator,current){
 accumulator=accumulator+current;
 return accumulator
},0)                // this program is used to accumulate the whole array and in this case to calculate summation , the 0 in this is the initial value of the accumulator 



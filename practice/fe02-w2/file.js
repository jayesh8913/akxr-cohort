
const fs= require("fs");
//console.log(fs);

fs.writeFileSync('./test.txt','wassup mah boi');// used to make and enter data(replace the new data w the prev one )
fs.writeFileSync('./test.txt','yoyo');

//async
fs.writeFile('./test.txt',"hello world async",(err)=>{});  

const result=fs.readFileSync("./test.txt","utf-8");
console.log(result);

fs.readFile('./test.txt','utf-8',(err,result)=>{})

// in conclusion async fns doesnot result as same as sync fns do

fs.appendFileSync('./test.txt',`\n`,new Date().getDate().toLocaleString);

fs.cpSync('./test.txt','copy.txt');

fs.unlinkSync('copy.txt')//to del 
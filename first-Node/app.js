// let n = 5;
// for(let i=1;i<n;i++){
//     console.log("hello",i);
// }


//process object
// console.log(process.argv);

let arg = process.argv;
for (let i = 2; i<arg.length; i++){
    console.log("hello and welcome :", arg[i]);
}
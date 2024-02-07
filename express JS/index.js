const express = require("express")
const app = express();

// console.dir(app);
// console.log(app.listen);
// console.log(app.get);



let port = 8080;

//app.listen(port,callback)
app.listen(port, () => {
    console.log(`your server has started on port : ${port}`);
});

//app.use()
// app.use((req, res) => {
//     // console.log(req);
//     console.log("new incoming request");


//     // res.send("this my first response");//string response 

//     // res.send({  //object(=> JSON) data response
//     //     name:"Aditya",
//     //     age:18,
//     //     city:"Mau"
//     // });//this object will be converted into json formate so that other languages can also read this response data


//     // let code = "<h1>Aditya</h1> <ul> <li>18teen</li>  <l1>City : Mau</l1> </ul>"

//     // res.send(code)
// })

// app.get()
app.get("/", (req, res) => {
    console.log("recived request");
    res.send("you are on root path");
})
app.get("/me", (req, res) => {
    console.log("recived request");
    let code = "<h1>Aditya</h1> <ul> <li>18teen</li>  <l1>City : Mau</l1> </ul>"

    res.send(code)
})
app.get("/details", (req, res) => {
    console.log("recived request");
    res.send({
        name: "Aditya",
        age: 18,
        city: "Mau"
    });
})


// app.get("*",(req,res)=>{  //we use "*" is the path is not defined and you try to open it
//     res.send("Page doesn't exits or path is not correct")
// })


// app.post()
app.post("/", (req, res) => {
    res.send("you sent a post request")
})


app.get("/:username/:age", (req, res) => {  //here "username" is treated as a variable and stored in "res.params" .
    console.log(req.params);
    let {username, age } = req.params;
    console.log(age);
    res.send(`<h1>welcome to the page @${username} age : ${age}</h1>`);
})

app.get("/search",(req,res)=>{
    // console.log(req);
    console.log(req.query);
    let {q ,color}= req.query;
    if(!q){
        res.send(`<h1>no result found for this ${q}</h1>`);
    }
    console.log(color);
    res.send(`<h1>your search result for ${q} and color ${color} is below :</h1>`);
})
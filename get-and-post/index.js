const express = require("express")
const path = require("path");
const { escape } = require("querystring");
const app = express()


const port = 3000;
app.listen(port, () => {
    console.log(`server has started to ${port}`);
})


// app.set("view engine", "ejs")
// app.set("views", path.join(__dirname, "views"))
// app.use(express.static(path.join(__dirname, "public")))


app.use(express.urlencoded({extended: true})) //this will allow express to parse urlencoded to readable format
app.use(express.json())//this will allow express to parse json to readable format



app.get("/register", (req, res) => {
    let {user , password} = req.query;  //html "name" attribute should be same to save data in same variable 
    console.log(req.query);
    res.send(`You got the get response, welcome ${user}`);
})

app.post("/register",(req,res)=>{
    let {user, password} = req.body;//we need to pasre this req.body data for read to express
    console.log(req.body);
    res.send(`You got the post response, welcome ${user}`)
})

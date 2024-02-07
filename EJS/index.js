const express = require("express");
const app = express();//express has already acqired the ejs, not need to require externly
const path = require("path")

let port = 8080;
app.listen(port, () => {
    console.log(`listening on port : ${port}`);
})




app.set("view engine", "ejs"); //by default it will search for render file in "views" named file with ".ejs" extension name
app.set("views", path.join(__dirname, "/views")) //here path is actually a pakage which required to acqire using "require"
app.use(express.static(path.join(__dirname,"public")));




app.get("/", (req, res) => {
    // res.send("server has started");
    res.render("home.ejs")
})

app.get("/rolldice", (req, res) => {
    let randomNum = Math.floor(Math.random() * 6) + 1; //let' assume this data has come some database and we can use this data in ejs tag 
    res.render("rolldice", { randomNum }) // by giving give this data as a argument in render object 

})

//insta

// app.get("/ig/:username", (req, res) => {
//     let followers = ["Aditya", "Mohit", "Ajay", "Prazawal"]
//     let { username } = req.params;
//     console.log(username);
//     res.render("insta", { username, followers });
// })

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    // console.log(data);
    if (data){
        res.render("insta",{data});
    }else{
        res.render("page-not-found.ejs")
    }
})


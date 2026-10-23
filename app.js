const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("Home page");
});
app.get("/about",(req,res)=>{
    res.send("About page");
});
app.get("/project",(req,res)=>{
    res.send("Project page");
});
app.get("/skills",(req,res)=>{
    res.send("Skills page");
});
app.get("/contact",(req,res)=>{
    res.send("Contact page");
});
console.log("Server is running on Port number: 3000");

app.listen(3000);

// node
const express = require("express");

const app = express();



// Routing 
app.get("/", (req,res)=>{
    res.send("Hello");
});

app.get("/profile", (req,res,next)=>{
    return next (new Error("something went wrong"))
});

//error handler default
app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send('Something broke!')
});


app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});


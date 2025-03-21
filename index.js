// node
const express = require("express");

const app = express();

PORT = 5000


app.listen(5000, () => {
             console.log(`Server running on port ${PORT}`)
});  

app.use('/',(req,res)=>{
    console.log("Hello World!");

});
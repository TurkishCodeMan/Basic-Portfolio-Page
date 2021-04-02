const express=require("express");
const app=express();



app.use(express.static(__dirname + "/public/"));; // for serving the HTML file

app.get("/",(req,res,next)=>{
    res.render("index.html")
})
let port = process.env.PORT || 3000
var server_host = process.env.HOST || '0.0.0.0';
app.listen(port, server_host, (err) => {
    if (err)
        return console.log(err)

    console.log("Listening on port " + port)
})

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js')
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("static"));
app.use('/static', express.static('static'))

let items = ["Buy", "Cook", "Eat"];
let workItems = [];

app.get("/", function (req, res) {
    // res.sendFile(__dirname + "/index.html");
   
    let day = date.getDate(); // getting from the module date.js

    res.render("list", { listTitle: day, newList: items });
    // res.send()
});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newList: workItems })

});

app.get("/about" , function(req,res){
    res.render("about");

});

app.post("/", function (req, res) {

    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }

});





app.listen(3000, function () {
    console.log("Serving running at port 3000")
});
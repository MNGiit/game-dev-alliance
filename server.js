const express = require("express");

// Create Express app object
const app = express();
app.engine("jsx", require("express-react-views").createEngine());
app.set("view engine", "jsx");
//


app.get("/", (req, res) => {
    // res.send("<h1>Hello world!</h1>");
    res.render("Index");
});

app.get("/users", (req, res) => {
    res.render("users/Index");
})

app.get("/users/new", (req, res) => {
    res.render("users/New");
})

app.get("/users/:id", (req, res) => {
    res.render("users/Show");
})

app.get("/users/:id/edit", (req, res) => {
    res.render("users/Edit");
})

app.listen("3000", () => {console.log("Server is running on port 3000");});

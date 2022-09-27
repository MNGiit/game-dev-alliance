const express = require("express");

// Create Express app object
const app = express();
app.engine("jsx", require("express-react-views").createEngine());
app.set("view engine", "jsx");
//


app.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>");
});

app.listen("3000", () => {console.log("Server is running on port 3000");});

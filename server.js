require("dotenv").config();
const ArticleRouter = require("./controllers/article");
const UserRouter = require("./controllers/user");

const express = require("express");

// Create Express app object
const app = express();
app.engine("jsx", require("express-react-views").createEngine());
app.set("view engine", "jsx");
//

app.use("/users", UserRouter);
app.use("/articles", ArticleRouter);

app.get("/", (req, res) => {
    // res.send("<h1>Hello world!</h1>");
    res.render("Index");
});

app.listen("3000", () => {console.log("Server is running on port 3000");});

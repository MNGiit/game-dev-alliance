require("dotenv").config();
const ArticleRouter = require("./controllers/article");
const GameRouter = require("./controllers/game");
const UserRouter = require("./controllers/user");

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const methodOverride = require("method-override");
const session = require("express-session");     // session
const MongoStore = require("connect-mongo");    // session

// Create Express app object
const app = express();
app.engine("jsx", require("express-react-views").createEngine());
app.set("view engine", "jsx");
//

app.use(express.static('public'));              //tell express to try to match requests with files in folder called public

// Middleware
app.use(morgan("tiny"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
// app.use(express.static("public")); //


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// Session
app.use(
    session({
        secret: process.env.SECRET,
        store: MongoStore.create({mongoUrl: process.env.MONGO_URI}), // process.env.DATABASE_URL // mongoUrl: process.env.MONGO_URI
        saveUninitialized: true,
        resave: false
    })
)
//

app.use("/users", UserRouter);
app.use("/articles", ArticleRouter);
app.use("/games", GameRouter);

app.get("/", (req, res) => {
    // res.send("<h1>Hello world!</h1>");
    console.log("Logged in?", req.session.loggedIn);
    res.render("Index", {loggedIn: req.session.loggedIn});
});

app.listen("3000", () => {console.log("Server is running on port 3000");});

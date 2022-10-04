const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const router = express.Router();


router.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>");
    // res.render("users/Index");
})

router.get("/new", (req, res) => {
    res.render("users/New");
})

router.post("/new", async (req, res) => {
    // console.log(req.body);
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    );

    // create new user
    User.create(req.body)
    .then((user) => {
        // res.send("Send to /user/login");
        res.redirect("/users/login");
    })
    .catch((error) => {
        console.log(error);
        res.json({error});
    })
})

router.get("/login", (req, res) => {
    res.render("users/Login");
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body; // take from req.body
    User.findOne({ username })
      .then(async (user) => {
        if (user) { // does user exist?
          const result = await bcrypt.compare(password, user.password); // compare password using bcrypt
          if (result) {
            console.log("Log in was a success!");
            console.log("this user id is: ", user.id);
            // session // keep properties in session object
            req.session.username = username;
            req.session.loggedIn = true;
            // res.redirect("/users/:thisUserId") // console.log(user.id); // if user exists, and password check passes, redirect to a page
            res.redirect("/");
          } else {
            res.json({ error: "Uh oh, password check failed. Try again." });
          }
        } else {
          res.json({ error: "Uh oh, this user doesn't exist. Try again or make a new user." });
        }
      })
      .catch((error) => {
        console.log(error);
        res.json({ error }); // error is sent as a json
    });
});

// Destroy Session
router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        res.redirect("/");
    })
})

router.get("/:id", (req, res) => {
    res.render("users/Show");
})

router.get("/:id/edit", (req, res) => {
    res.render("users/Edit");
})

// Export
module.exports = router;
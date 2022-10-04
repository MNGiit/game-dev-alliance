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


router.get("/:id", (req, res) => {
    res.render("users/Show");
})

router.get("/:id/edit", (req, res) => {
    res.render("users/Edit");
})

// Export
module.exports = router;
const express = require("express");
// const User = require("../models/user");

const router = express.Router();


router.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>");
    // res.render("users/Index");
})

router.get("/new", (req, res) => {
    res.render("users/New");
})

router.get("/:id", (req, res) => {
    res.render("users/Show");
})

router.get("/:id/edit", (req, res) => {
    res.render("users/Edit");
})

// Export
module.exports = router;
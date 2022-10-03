const express = require("express");
// Article = require("../models/article");

const router = express.Router();

// Routes

router.get("/articles", (req, res) => {
    console.log("res send")
    res.send("<h1>Hello articles!</h1>");
    // res.render("Index");
});

// Export
module.exports = router;
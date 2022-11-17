const express = require("express");
const Game = require("../models/game");
const Comment = require("../models/comment");
const { route } = require("./user");

const router = express.Router();

// Routes
router.get("/", (req, res) => {
    Game.find({}, (error, allGames) => {
        res.render("games/Index", {games: allGames})
    })
});

router.get("/new", (req, res) => {
    res.render("games/New");
})

router.post("/new", (req, res) => {
    // add username to req.body to track related user
    if(req.session.username) {
        req.body.username = req.session.username;
    } else {
        req.body.username = "???"
    }

    Game.create(req.body)
        .then((games) => {
            res.redirect("/games");
        })
        .catch((error) => {
            console.log(error);
            res.json({ error });
        });    
})

// Show
router.get('/:id', function(req, res) {
    // res.render('Show', {fruits: fruits[req.params.indexOfFruitsArray]});
    // res.render('Show.jsx', {pokemon: pokemon[req.params.id]}); // without MongoDB
    // console.log("Article findbyId username", Article.findById(req.params.id).username)
    Game.findById(req.params.id, (err, foundGame)=>{
        res.render('games/Show.jsx', {game: foundGame});
    })

})

// Edit
router.get("/:id/edit", (req, res) => {
    const id = req.params.id; // get id
    Game.findById(id).then((game) => {
        res.render("games/Edit.jsx", { game } );
    })
    .catch((error) => {
        console.log(error);
        res.json( { error });
    })
});

// Update
router.put('/:id', (req, res)=>{
    const id = req.params.id;

    Game.findByIdAndUpdate(id, req.body, { new: true}).then((game) => {
        res.redirect("/");
    })
    .catch((error) => {
        console.log(error);
        res.json({error});
    })
})

// Delete
router.delete('/:id', (req, res)=>{
    // Article.findByIdAndDelete(req.params.id);
    // Article.findByIdAndRemove(req.params.id, (err, data) =>{
    //     res.redirect('/');
    // })

    Game.findByIdAndRemove(req.params.id).then((game) => {
        res.redirect("/");
    })
    .catch((error) => {
        console.log(error);
        res.json({error});
    })
})

// Export
module.exports = router;
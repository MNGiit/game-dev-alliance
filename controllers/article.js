const express = require("express");
const Article = require("../models/article");
const Comment = require("../models/comment");
const { route } = require("./user");
// Article = require("../models/article");

const router = express.Router();

// Routes
router.get("/", (req, res) => {
    // console.log("res send")
    // res.send("<h1>Hello articles!</h1>");
    Article.find({}, (error, allArticles) => {
        res.render("articles/Index", {articles: allArticles})
    })
});

router.get("/new", (req, res) => {
    res.render("articles/New");
})

router.post("/new", (req, res) => {

    // add username to req.body to track related user
    if(req.session.username) {
        req.body.username = req.session.username;
    } else {
        req.body.username = "???"
    }

    Article.create(req.body)
        .then((articles) => {
            res.redirect("/articles");
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
    console.log("Article findbyId username", Article.findById(req.params.id).username)
    Article.findById(req.params.id, (err, foundArticle)=>{
        res.render('articles/Show.jsx', {article: foundArticle});
    })

})

// Edit
router.get("/:id/edit", (req, res) => {
    console.log("session username", req.session.username);
    console.log("body username", req.body.username);
    console.log("body", req.body);
    console.log("article req params id username", Article.findById(req.params.id).username);
    console.log("article (req params id)", Article.findById(req.params.id));
    console.log("req params", req.params.id)
    let a = Article.findById(req.params.id);
    console.log(a.username);
    
    // if(req.session.username === Article.findById(req.params.id).username) { // req.body.username is empty
    //     // do edit
    //     Article.findById(req.params.id, (err, foundArticle) => {
    //         res.render("articles/Edit.jsx", {article: foundArticle});
    //     });
    // } else {
    //     res.redirect("/articles");
    // }

    const id = req.params.id; // get id
    Article.findById(id).then((article) => {
        res.render("articles/Edit.jsx", { article } );
    })
    .catch((error) => {
        console.log(error);
        res.json( { error });
    })
});

// Update
router.put('/:id', (req, res)=>{
    // res.send(req.body); // test to see if it works
    // article.push(req.body); // without MongoDB
    // Article.create(req.body, (error, createdArticle)=>{
    //     res.send(createdArticle);
    // });
    // console.log(req.body);
    // res.redirect('/articles');
    /*
        // If there are checkbox radio, put the code here before making changes
        Article.findByIdAnd
    */
    // Article.findById(req.params.id, (err, foundArticle)=>{
    //     res.render('articles/Show.jsx', {article: foundArticle});
    // })
    
    // console.log("Article findbyId username", Article.findById(req.params.id).username)
    // // verify the author of the article is the same as the user
    // if(req.session.username === Article.findById.username) {
    //     // Article.findByIdAndUpdate(req.params.id, req.body, {new: true});
    //     Article.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((article) => {
    //         res.redirect("/articles");
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         res.json({error});
    //     })
    //     // res redirect
    // }

    const id = req.params.id;

    Article.findByIdAndUpdate(id, req.body, { new: true}).then((article) => {
        res.redirect("/");
    })
    .catch((error) => {
        console.log(error);
        res.json({error});
    })
})

// Delete
router.delete('/:id/delete', (req, res)=>{
    // Article.findByIdAndDelete(req.params.id);
    Article.findByIdAndRemove(req.params.id, (err, data) =>{
        res.redirect('/');
    })
})

// Export
module.exports = router;
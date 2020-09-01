const router = require('express').Router();
const Comment = require('../db').import('../models/comment')
const validateSession = require('../middleware/validate-session');

// router.get('/', (req, res) => res.send('I love pies!')); // this was just a test 

router.get("/", validateSession, (req, res) => {
    Comment.findAll()
    .then(comment => res.status(200).json(comment))
    .catch(err => res.status(500).json({ error: err}))
});  




// ! POST
router.post("/create", validateSession, (req, res) => {
    const newComment = {

        nameOfCommenter: req.body.nameOfCommenter,
        descriptionOfComment: req.body.descriptionOfComment
    }

    Comment.create(newComment)
    .then(comment => res.status(200).json(comment))
    .catch(err => res.status(500).json({ error: err}))
})


//! GET by Name
router.get('/:name', validateSession, (req, res) => {
    comment.findOne({ where: {nameOfCommenter: req.params.name}})
        .then(comment => res.status(200).json(comment))
        .catch(err => res.status(500).json({error: err}))
})

//! UPDATE by ID
router.put("/:id", validateSession, (req, res) => {
    comment.update(req.body, { where: {id: req.body.params.id }})
        .then(comment => res.status(200).json(comment))
        .catch(err => res.json(req.errors))
})

//! DELETE 
router.delete("/:id", validateSession, (req,res) => {
    Comment.destroy({
        where: { id: req.params.id }
    })
    .then(comment => res.status(200).json(comment))
    .catch(err => res.status(500).json({error: err}))
})

module.exports = router;
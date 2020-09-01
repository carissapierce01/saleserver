const router = require('express').Router();
const Shop = require('../db').import('../models/shop')
const validateSession = require('../middleware/validate-session');

router.get('/practice', function(req, res){
    res.send('Hey!! This is a practice route!')
})


//! CREATE SHOP ITEM 
router.post('/new', validateSession,   (req, res) => {
    const newShop = {

        title: req.body.title,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description
    }

    Shop.create(newShop)
        .then(shop => res.status(200).json(shop))
        .catch(err => res.status(500).json({ error: err }))    
})

//! GET ALL ITEMS IN SHOP
router.get('/', (req, res) => {
    Shop.findAll()
        .then(shop => res.status(200).json(shop))
        .catch(err => res.status(500).json({ error: err }))
})

//! GET BY TITLE
router.get('/:title', (req, res) => {  
    Shop.findOne({ where: { nameOfShop: req.params.title }})  
      .then(shop => res.status(200).json(shop))
      .catch(err => res.status(500).json({ error: err }))
  })
  
//! UPDATE by ID
router.put('/:id', validateSession, (req, res) => {
    Shop.update(req.body, { where: { id: req.params.id }})  
      .then(shop => res.status(200).json(shop))
      .catch(err => res.status(500).json({error: err})) 
  })

//! DELETE
router.delete('/:id', validateSession, (req, res) => {
    Shop.destroy({
        where: { id: req.params.id }
    })
    .then(shop => res.status(200).json(shop))
    .catch(err => res.status(500).json({ error: err }))
})   

module.exports = router
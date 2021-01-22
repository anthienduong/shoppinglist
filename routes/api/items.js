const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');


//@route GET api/items
//@mota  GET all items
//@access Public 

 //already defined route at app.use('/api/items') in server.js

router.get('/',(req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items));
});    

//@route POST api/items
//@mota  Create a post
//@access Public 

 //already defined route at app.use('/api/items') in server.js

 router.post('/',(req, res) => {
   const newItem = new Item({
       name: req.body.name,
       price: req.body.price,
       quantity: req.body.quantity,
       imageSrc: req.body.imageSrc,
       decs: req.body.decs
   });

   newItem.save().then(item => res.json(item)); //create memory save it to database
});

//@route delete api/items/:id
//@mota  Delete a item
//@access Public 

 //already defined route at app.use('/api/items') in server.js

 router.delete('/:id',(req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success : false}));
 });

                        
module.exports = router; 
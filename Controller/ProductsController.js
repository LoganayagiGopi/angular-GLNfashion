const ProductsModel = require('../Models/Products');

module.exports = {

create: (req, res) => {
    let Products = new ProductsModel({
        image: req.body.image,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price
        
     })
     
     Products.save()
     .then(result => {
         res.json({ success: true, result: result})
     })
     .catch(err => {
          res.json({ success: false, result: err})
         })
},

update: (req, res) => {
    ProductsModel.findByIdAndUpdate({_id: req.body._id}, req.body)
    .then(Products => {
        res.send(Products)
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
},

get: (req, res) => {
    ProductsModel.find()
    .then(Products => {
        res.send(Products);
    })
    .catch(err => {
        res.json({ success: false, result: "No Product found"})
    })
},

delete: (req, res) => {
    ProductsModel.findByIdAndRemove({ _id: req.body._id})
    .then(Products => {
        if(!Products) {
            return res.status(404).send({
                message: "Product not found " + req.params._id
            });
        }
        res.send({message: "Product deleted successfully!"});
    })
    .catch(err => res.json({success: false, result: err}))
}
}

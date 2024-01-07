const Product = require('../models/product.model')








module.exports.getAll = (req, res) => {
    Product.find()
        .then((result) => {
            res.json(result)

        }).catch((err) => {
            res.json(err)
        });
}

module.exports.createNewProduct = (req, res) => {
    console.log('Request Body:', req.body);

    Product.create(req.body)
        .then((newlyCreatedProduct) => {
            res.json(newlyCreatedProduct);
        })
        .catch((err) => {
            console.error('Error:', err);
        });


    }


module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts =>res.status(200).json(allProducts))
        .catch(error =>res.status(404).json(error))
}

module.exports.findOneProductById = (req, res) => {
    Product.findById({ _id: req.params.id })
        .then(oneProduct =>res.status(200).json(oneProduct))
        .catch(error =>res.status(500).json(error))
}


module.exports.updateOneProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body,  {new:true, runValidators:true})
        .then(updatedProduct =>res.status(200).json(updatedProduct))
        .catch(error =>res.status(500).json(error))
}
module.exports.deleteOneProduct = (req,res) => {
    Product.findByIdAndDelete({_id: req.params.id})
    .then(deletedProduct =>res.status(200).json(deletedProduct))
    .catch(error =>res.status(500).json(error))
}
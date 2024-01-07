const {createNewProduct,findOneProductById,updateOneProduct,deleteOneProduct, getAll}  = require('../controllers/product.controller')

module.exports = (app) => {
    app.get('/api/products', getAll);
    app.post('/api/create', createNewProduct);
    app.get('/api/products/:id', findOneProductById);
    app.put('/api/products/:id', updateOneProduct);
    app.delete('/api/products/:id', deleteOneProduct);
}
const Product = require('../models/products-model');

exports.getAddProducts = (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'admin.html'));
    //res.sendFile(path.join(__dirname, '..', 'views', 'admin.html'));
    
    // with utils functionality
    //res.sendFile(path.join(rootDir, 'views', 'admin.html'));
    res.render('admin.pug', {pageTitle: 'Add product', path: 'admin-add-product'});
}

exports.postAddProduct = (req, res, next) => {
    console.log(req.body.name);
    let product = new Product(req.body.name)
    //products.push({title: req.body.name});
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    //res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));

    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //const prods = Product.fetchAll();
    
    Product.fetchAll(produccts => {
        res.render('shop.pug', {pageTitle: 'My Shop', prods: produccts, path: 'shop'});
    })
}
// import global modules
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');
const p = path.join(rootDir, 'data', 'products.json');

const getDataFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    })
}

//const products = [];
module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getDataFromFile((products) => {
            products.push(this);

            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log('Any wrror while writing', err);
            })
        });
    }

    static fetchAll(cb) {
        getDataFromFile(cb);
    }
}
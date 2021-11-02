const ProductModel = require("../models/product-model");

module.exports = class ProductService {
    constructor(db) {
        this.db = db;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this.db.execute('SELECT * FROM product')
                .then(([rows]) => {
                    const products = [];

                    rows.forEach(row => {
                        products.push(new ProductModel(
                            +(row.id),
                            row.name,
                            row.description,
                            +(row.price)
                        ));
                    });

                    resolve(products);
                })
                .catch(error => reject(error));
        });
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            if (typeof id !== 'number') {
                return reject(new Error('You provided invalid number value'));
            }

            if (id < 1) {
                return reject(new Error('An ID can\'t be a negative value'));
            }

            this.db.execute('SELECT * FROM product WHERE id = ?', [id])
                .then(([rows]) => {
                    const product = new ProductModel(
                        +(rows[0].id),
                        rows[0].name,
                        rows[0].description,
                        +(rows[0].price)
                    );

                    resolve(product);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}

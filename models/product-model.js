module.exports = class ProductModel {
    constructor(id, name, description, price) {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.price = 0.0;

        if (typeof id === 'number') {
            this.id = id;
        }

        if (typeof name === 'string') {
            this.name = name;
        }

        if (typeof description === 'string') {
            this.description = description;
        }

        if (typeof price === 'number') {
            this.price = price;
        }
    }
};

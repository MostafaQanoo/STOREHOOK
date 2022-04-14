const connection = require('../../config/connection');

const allProductsQuery = () => connection.query(
    `select p.id, p.name, p.description, p.price, p.image, c.name as category from products as p 
    join categories as c on c.id = p.category_id;`
);

module.exports = allProductsQuery;

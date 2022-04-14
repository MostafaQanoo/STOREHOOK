const { getSingleProductQuery } = require('../../database/queries');

const productInfoHandler = (req, res) => {
  getSingleProductQuery(req.params.id)
    .then((data) => res.json({ message: 'Product Sent successfully', status: 200, data: data.rows[0] }))
    .catch((error) => res.status(500).json({ message: error }))
};

module.exports = productInfoHandler;

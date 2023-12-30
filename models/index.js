// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// needs to relate by category_id from Product.js

// Categories have many Products
// needs to relate by category_id from Product.js

// Products belongToMany Tags (through ProductTag)
// needs to relate by product_id via joining of two tables as new table ProductTag (?)

// Tags belongToMany Products (through ProductTag)
// needs to relate by tag_id via joining of two tables as new table ProductTag (?)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// needs to relate by category_id from Product.js
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
// needs to relate by category_id from Product.js
Category.hasMany(Product, {
  foreignKey: 'category_id',
});
// Products belongToMany Tags (through ProductTag)
// needs to relate by product_id via joining of two tables as new table ProductTag (?)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});
// Tags belongToMany Products (through ProductTag)
// needs to relate by tag_id via joining of two tables as new table ProductTag (?)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// Resolvers
// class Product {
//   constructor(id, { name, description, price, stock, reviews, stores }) {
//     this.id = id;
//     this.name = name;
//     this.description = description;
//     this.price = price;
//     this.stock = stock;
//     this.reviews = reviews;
//     this.stores = stores;
//   }
// }

import { Products } from "./dbConnectors";

// const productDatabase = {};

const resolvers = {
  getProduct: async ({ id }) => {
    // return new Product(id, productDatabase[id]);
    try{
      const getProduct = await Products.findById(id);
      return getProduct;
    }catch(err){
      throw new Error(err);
    }
  },
  createProduct: async ({ input }) => {
    // let id = require("crypto").randomBytes(10).toString("hex");
    // productDatabase[id] = input;
    // return new Product(id, input);
    const newProduct = new Products({
      name: input.name,
      description: input.description,
      price: input.price,
      stock: input.stock,
      category: input.category,
      reviews: input.reviews,
      stores: input.stores,
    });

    newProduct.id = newProduct._id;
    // console.log(newProduct);

    try {
      const products = await newProduct.save();
      // console.log(products);
      return products;
    } catch (err) {
      throw new Error(err);
    }

  },
};

export default resolvers;

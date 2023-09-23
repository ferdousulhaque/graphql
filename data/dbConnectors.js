import mongoose, { mongo } from "mongoose";
import { Sequelize, DataTypes } from "sequelize";
import _ from 'lodash';
import casual from 'casual';

//Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://mongoadmin:secret@localhost/", {
  useNewUrlParser: true,
});

const ProductsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  reviews: {
    type: Array,
  },
  stores: {
    type: Array,
  },
});

const Products = mongoose.model('products', ProductsSchema);

export { Products }

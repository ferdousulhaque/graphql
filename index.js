import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import schema from './schema'

const app = express();

app.get('/', (req, res) => {
    res.send("Checking");
})

// Resolvers
class Product {
    constructor(id, {name, description, price, stock, reviews, stores}){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.reviews = reviews; 
        this.stores = stores;
    }
}

const root = { product: () => {
        return {
            "id": 1234,
            "name": "kitkat",
            "description": "a kind of chocklet",
            "price": 15.12,
            "stock": 150,
            "reviews": [
                {
                    "comment": "Very delicious",
                    "rating": 5
                }
            ],
            "stores": [
                {
                    "storeName": "Seven11",
                    "address": "Street 11",
                    "lat": 99.11,
                    "long": 11.99
                }
            ]
        }
    },
    createProduct: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        productDatabase[id] = input;
        return new Product(id, input);
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8080, () => console.log('server running'));
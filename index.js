import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import schema from './schema'

const app = express();

app.get('/', (req, res) => {
    res.send("Checking");
})

const root = { product: () => {
    return {
        "id": 1234,
        "name": "kitkat",
        "description": "a kind of chocklet",
        "price": 15.12,
        "stock": 150
    }
}};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8080, () => console.log('server running'));
import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Query {
        product: Product
    }

    type Product {
        id: ID,
        name: String,
        description: String,
        price: Float,
        stock: Int
    }
`)

export default schema;
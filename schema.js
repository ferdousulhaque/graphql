import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Query {
        product: Product
    }

    type Store {
        storeName: String,
        address: String,
        lat: Float,
        long: Float
    }

    type Review {
        comment: String,
        rating: Int
    }

    type Product {
        id: ID,
        name: String,
        description: String,
        price: Float,
        stock: Int,
        reviews: [Review]!
        stores: [Store]!
    }
`)

export default schema;
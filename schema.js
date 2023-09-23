import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Query {
        getProduct(id: ID): Product
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

    enum Category {
        BEVERAGE,
        SNACKS,
        SWEETS
    }

    type Product {
        id: ID,
        name: String,
        description: String,
        price: Float,
        stock: Int,
        category: Category
        reviews: [Review]!
        stores: [Store]!
    }

    input StoreInput {
        storeName: String,
        address: String,
        lat: Float,
        long: Float
    }

    input ReviewInput {
        comment: String,
        rating: Int
    }

    input ProductInput {
        id: ID,
        name: String,
        description: String,
        price: Float,
        stock: Int,
        category: Category,
        reviews: [ReviewInput]!
        stores: [StoreInput]!
    }

    type Mutation {
        createProduct(input: ProductInput): Product
    }
`);

export default schema;
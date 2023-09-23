# GraphQL Playground
This repository is for myself learning graphQL and playing around.

## Initial Product
You can add the following few records initially for local resolver without DB
```yml
{
    "id": 1234,
    "name": "kitkat",
    "description": "a kind of chocklet",
    "category": SWEETS
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
```

## Initial Query:

This will provide me the following information for a store. However, still now store is static.

```yml
{
  product{
    name
    description
    price
    stock
    category
    reviews{
      comment
      rating
    },
    stores{
      storeName
      address
    }
  }
}
```

## Query after adding resolvers
Query for getting a single product with product ID

```yml
query getProduct{
  getProduct(id:"650ece113bc48fc6def39aca"){
    name
    description
    price
  }
}
```

## After adding resolvers for Mutation:
For adding new Products to the mongodb database, you need to run the following mutation.

```yml
mutation {
  createProduct(input:{
    name: "kitkat2",
    description: "a kind of chocklet",
    category: SWEETS,
    price: 15.12,
    stock: 150,
    reviews: [
        {
            comment: "Very delicious",
            rating: 5
        }
    ],
    stores: [
        {
            storeName: "Seven11",
            address: "Street 11",
            lat: 99.11,
            long: 11.99
        }
    ]
  }){
    id
    name
    description
    reviews{
      comment
      rating
    }
  }
}
```

## Start mongo on docker:

`docker compose up --build -d`
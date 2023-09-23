# GraphQL Playground
This repository is for myself learning graphQL and playing around.

## Initial Product

```yml
{
    "id": 1234,
    "name": "kitkat",
    "description": "a kind of chocklet",
    "category": "SWEETS"
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

```yml
{
  getProduct
  	{
      id
    }
}
```

## After adding resolvers for Mutation:

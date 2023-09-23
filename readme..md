# GraphQL Playground
This repository is for myself learning graphQL and playing around.

# Initial Query:

This will provide me the following information for a store. However, still now store is static.

```yml
{
  product{
    name
    description
    price
    stock
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
var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema, assertInputType } = require("graphql");
const { URLSearchParams } = require('url');
global.URLSearchParams = URLSearchParams;
 
// Construct a schema, using GraphQL schema language
var restaurantlist = [
  {
    id: 1,
    name: "WoodsHill ",
    description:
      "American cuisine, farm to table, with fresh produce every day",
    dishes: [
      {
        name: "Swordfish grill",
        price: 27,
      },
      {
        name: "Roasted Broccily ",
        price: 11,
      },
    ],
  },
  {
    id: 2,
    name: "Fiorellas",
    description:
      "Italian-American home cooked food with fresh pasta and sauces",
    dishes: [
      {
        name: "Flatbread",
        price: 14,
      },
      {
        name: "Carbonara",
        price: 18,
      },
      {
        name: "Spaghetti",
        price: 19,
      },
    ],
  },
  {
    id: 3,
    name: "Karma",
    description:
      "Malaysian-Chinese-Japanese fusion, with great bar and bartenders",
    dishes: [
      {
        name: "Dragon Roll",
        price: 12,
      },
      {
        name: "Pancake roll ",
        price: 11,
      },
      {
        name: "Cod cakes",
        price: 13,
      },
    ],
  },
];

var schema = buildSchema(`
type Query{
  restaurant(id: Int): restaurant
  restaurants: [restaurant]
},
type restaurant {
  id: Int
  name: String
  description: String
  dishes:[Dish]
}
type Dish{
  name: String
  price: Int
}
input restaurantInput{
  id: Int
  name: String
  description: String
}
type DeleteResponse{
  success: Boolean!
}
type Mutation{
  setrestaurant(input: restaurantInput): restaurant
  deleterestaurant(id: Int!): DeleteResponse
  editrestaurant(id: Int!, name: String!): restaurant
}
`);



// The root provides a resolver function for each API endpoint

var root = {
  restaurant: ({id}) => {
    let result = restaurantlist.filter(item => item.id == id);
    console.log(result[0]);
    return result[0];
  },
  restaurants: () => restaurantlist,
  setrestaurant: ({ input }) => {
    restaurantlist.push({
      id: input.id,
      name: input.name,
      description: input.description,
      dishes: input.dishes
    })
    return restaurantlist[restaurantlist.length - 1];
  },
  deleterestaurant: ({ id }) => {
    let success = false;
    let restodelete = restaurantlist.filter(item => item.id == id);
    restodelete.length > 0 ? success = true : success = false;
    restaurantlist = restaurantlist.filter(item => item.id !== id);
    console.log('Deleting this restaurant: ', restodelete, '; success? ', success);
    return {success};
  },
  editrestaurant: ({ id, ...restaurant }) => {
    let result = restaurantlist.filter(item => item.id == id);
    console.log(result);
    let index = restaurantlist.indexOf(result[0]);
    console.log(index);
    if(result.length < 1) {
      throw new Error("This restaurant was not found in the database");
    } else {
      restaurantlist[index] = {
      ...restaurantlist[index],...restaurant
      }
      console.log(restaurantlist);
      return restaurantlist[index];
    }
  },
};

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
var port = 5500;
app.listen(5500, () => console.log("Running Graphql on Port:" + port));

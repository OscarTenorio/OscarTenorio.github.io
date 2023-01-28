// This is where the shopping cart code has been moved to --- look for NOTE's where we need to make some changes

// NOTE: These need to be imported manually now
import React from "react";
// NOTE: you also need to run "npm install react-bootstrap" and "npm install axios" in the directory created by create-react-app to use these
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~ import { ReactBootstrap } from "react-bootstrap"; ~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import axios from "axios";
// NOTE: these were moved here from the Products component on line 99
import {
  Card,
  Accordion,
  Button,
  Container,
  Row,
  Col,
  Image,
  Input,
  } from "react-bootstrap";

// NOTE: all methods and variables need to be included in the function that renders the component!
const Products = () => {
  // default products list
  const products = [
    { name: "Apples", country: "Italy", cost: 3, instock: 10},
    { name: "Oranges", country: "Spain", cost: 4, instock: 3,},
    { name: "Beans", country: "USA", cost: 2, instock: 5,},
    { name: "Cabbage", country: "USA", cost: 1, instock: 8,},
  ];

  const [restockAmount, setRestockAmount] = React.useState(0);
  const [initialized, setInitialized] = React.useState(false);
  const [items, setItems] = React.useState(products);
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  // NOTE: products, useDataApi, dataFetchReducer aso had to be moved into the Products component to read their values

  //=========Cart=============
  const Cart = (props) => {
    // const { Card, Accordion, Button } = ReactBootstrap;
    console.log(`data:${JSON.stringify(data)}`);
  
    return <Accordion defaultActiveKey="0">{list}</Accordion>;
  };
  
  const useDataApi = (initialUrl, initialData) => {
    const { useState, useEffect, useReducer } = React;
    const [url, setUrl] = useState(initialUrl);
  
    const [state, dispatch] = useReducer(dataFetchReducer, {
      isLoading: false,
      isError: false,
      data: initialData,
    });
    useEffect(() => {
      let didCancel = false;
      const fetchData = async () => {
        dispatch({ type: "FETCH_INIT" });
        try {
          const result = await axios(url);
          console.log("FETCH FROM URl");
          if (!didCancel) {
            dispatch({ type: "FETCH_SUCCESS", payload: result.data });
          }
        } catch (error) {
          if (!didCancel) {
            dispatch({ type: "FETCH_FAILURE" });
          }
        }
      };
      fetchData();
      return () => {
        didCancel = true;
      };
    }, [url]);
    return [state, setUrl];
  };
  const dataFetchReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_INIT":
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case "FETCH_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }
  };


  // NOTE: this is being moved outside of this scope (into global scope)
  // const {
  //   Card,
  //   Accordion,
  //   Button,
  //   Container,
  //   Row,
  //   Col,
  //   Image,
  //   Input,
  // } = ReactBootstrap;
  //  Fetch Data
  const { Fragment, useState, useEffect, useReducer } = React;
  const [query, setQuery] = useState("http://localhost:1337/api/products");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "http://localhost:1337/api/products",
    {
      data: [],
    }
  );
  console.log(`Rendering Products ${JSON.stringify(data)}`);

  // Fetch Data
  const addToCart = (e) => {
    let name = e.target.name;
    let item = items.filter((item) => item.name === name);
    if (item[0].instock === 0) return;
    item[0].instock = item[0].instock - 1;
    console.log(`add to Cart ${JSON.stringify(item)}`);
    setCart([...cart, ...item]);
  };
  const deleteCartItem = (delIndex) => {
    // this is the index in the cart not in the Product List

    let newCart = cart.filter((item, i) => delIndex !== i);
    let target = cart.filter((item, index) => delIndex === index);
    let newItems = items.map((item, index) => {
      if (item.name === target[0].name) item.instock = item.instock + 1;
      return item;
    });
    
    setCart(newCart);
    setItems(newItems);
  };

  let list = items.map((item, index) => {
    let n = index + 1049;
    let randomURL = "http://picsum.photos/" + n;
    let uhit = item.imgsource ? item.imgsource : randomURL;

    return (
      <li key={index} className="py-3">
        <Image src={uhit} width={70} height={70} roundedCircle alt={`img-${n}`}></Image>
        <div variant="primary" size="large">
          {item.name} ({item.country})<br/>${item.cost}<br/>Stock = {item.instock}
        </div>
        <Button name={item.name} type="submit" onClick={addToCart}>Add To Cart</Button>
      </li>
    );
  });
  let cartList = cart.map((item, index) => {
    return (
      <>
        <Card key={index}>
          <Accordion.Toggle as={Button} variant="" eventKey={1 + index}>
            <Card.Header>
                {item.name}
            </Card.Header>
          </Accordion.Toggle>  
          <Accordion.Collapse eventKey={1 + index}>
            <Card.Body>
              $ {item.cost} from {item.country}
              <Button
                onClick={() => deleteCartItem(index)} 
                className="float-right">Delete
              </Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </>
    );
  });

  let finalList = () => {
    let total = checkOut();
    let final = cart.map((item, index) => {
      return (
        <div key={index} index={index}>
          {item.name}
        </div>
      );
    });
    return { final, total };
  };

  const checkOut = () => {
    let costs = cart.map((item) => item.cost);
    const reducer = (accum, current) => accum + current;
    let newTotal = costs.reduce(reducer, 0);
    // cart.forEach((item, index) => deleteCartItem(index));
    return newTotal;
  };

  const restockProducts = (url) => {
    if (!initialized) doFetch(url);
    let newItemArray = [];
    data.data.forEach((item) => {
      newItemArray.push(item.attributes);
    });

    newItemArray.forEach((newItem) => {
      items.forEach((item) => {
        if (item.name === newItem.name && item.country === newItem.country && item.cost === newItem.cost) {
          console.log("Same Item: ", item.name, newItem.name);
          newItem.instock += restockAmount;
        };
      });
    });
    setItems([...newItemArray]);
    setInitialized(true);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Product List</h1>
          <ul style={{ listStyleType: "none" }}>{list}</ul>
        </Col>
        <Col>
          <h1>Cart Contents</h1>
          <Accordion>{cartList}</Accordion>
        </Col>
        <Col>
          <h1>CheckOut </h1>
          <Button onClick={checkOut}>CheckOut ${finalList().total}</Button>
          <div> {finalList().total > 0 && finalList().final} </div>
        </Col>
        <Col>
        <form
          onSubmit={(event) => {
            restockProducts(query);
            event.preventDefault();
          }}
        >
          <div>Pull Product Items From:</div>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <div>Restock Amount:</div>
          <input
            type="number"
            value={restockAmount}
            onChange={(event) => setRestockAmount(parseInt(event.target.value))}
          />
          <br/>
          {initialized ? 
            (<Button type="submit" className="my-3" >Restock</Button>)
           : (<Button type="submit" className="my-3" >Initialize Data</Button>)}
        </form>
        <a href="https://github.com/OscarTenorio/oscartenorio.github.io/tree/main/References/Notes/Module_19_shopping_cart/19.2_create_strapi_product_database/Shopping_Cart" target="_blank" rel="noreferrer">Github Link</a>
        <br/>
        <a href="https://www.youtube.com/watch?v=i8y8wy_dW2o" target="_blank" rel="noreferrer">Application Description Link</a>
      </Col>
      </Row>
    </Container>
  );
};
// ========================================
// NOTE: ReactDMO.render is no longer need (since it's handled in index.js now)


export default Products;
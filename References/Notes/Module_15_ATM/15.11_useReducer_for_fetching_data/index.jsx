const useDataApi = (initialUrl, initialData) => {           //<--- custom hook (ike how useState() is a hook), takes 2 arguments/parameters. See generalNotes "custom hook"
  const { useState, useEffect, useReducer } = React;        //<--- a little object destructuring to pull the methods from React
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {  //<--- state holds the state of 3 variables (defined at line 33) and dispatch changes these states
    isLoading: false,
    isError: false,                                         //<--- these are the 3 initialized states
    data: initialData
  });

  useEffect(() => {
    let didCancel = false;                      //<--- initializes to false so logic on lines 17 and 21 fire
    const fetchData = async () => {             //<--- defines fetchData() as an async function
      dispatch({ type: "FETCH_INIT" });         //<--- the function that changes these states, defined on line 5
      try {                                     //<--- attempt the defined code block  { 
        const result = await axios(url);        //<--- async promise, stored in result variable. Meat of the try code block
        if (!didCancel) {                       //<--- if didCancel = false (since it's opposite ! of true)...
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });    //<--- change the state to reflect that it was successful
        }
      } catch (error) {                         //<--- if line 16 failed (the main part of the try code block)...
        if (!didCancel) {                       //<--- and if didCancel = false
          dispatch({ type: "FETCH_FAILURE" });  //<--- set state to reflect that failure
        }
      }         //Note: The didCancel boolean is for us to use in case of the component unmounts before the API call resolves (completes). We can prevent the state from being updated.
    };
    fetchData();                                //<--- calls the method defined on line 13 (essentially calls itself within useEffect())
    return () => {                              //<--- return (then goes on to define an unnamed function with what will be returned)
      didCancel = true;                         //<--- ==== TODO: REVIEW ==== set didCancel = true (to prevent logic on lines 17 and 21 from firing when it goes back there on a URL change? Not sure...)
    };
  }, [url]);                                    //<--- watches for a change in URL to trigger the unnamed function, whose definition begins on line 11 ...() => {}...
  return [state, setUrl];
};
const dataFetchReducer = (state, action) => { //<--- here you can see dataFetchReducer() will return 3 states to keep track of - this is where error handling is happening
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,                 //<--- if action.type === "FETCH_INIT", grab all the existing states
        isLoading: true,          //    and change isLoading to true and isError to false
        isError: false
      };
    case "FETCH_SUCCESS":
      return {
        ...state,                 //<--- if action.type === "FETCH_SUCCESS", grab all the existing states
        isLoading: false,         //    and change isLoading to false, isError to false, and data to be the action.payload
        isError: false,
        data: action.payload
      };
    case "FETCH_FAILURE":
      return {
        ...state,                 //<--- if action.type === "FETCH_FAILURE", grab all the existing states
        isLoading: false,         //    and change isLoading to false and isError to true (since nothing was retrieved
        isError: true             //    the action.payload is null and doesn't need to be set)
      };
    default:
      throw new Error();          //<--- if none of the above, throw a new error (likely just a default error)
  }
};

function App() {
  const { Fragment, useState, useEffect, useReducer } = React; //<--- notice how much smaller the App() is now, since we're using useReducer() to 
  const [query, setQuery] = useState("MIT");
  const [{ data, isLoading, isError }, doFetch] = useDataApi( //<--- calling custom hook defined above, notice how it initializes 3 states (see useDataApi() to see what objects are returned, thus what gets saved into those 3 values) and changes them through doFetch()
    "https://hn.algolia.com/api/v1/search?query=MIT", //<--- first parameter
    {                                                 //<--- second parameter (object with "hits" attribute, holding an empty array)
      hits: []
    }
  );

  return (
    <Fragment>
      <form
        onSubmit={event => {                                              //<--- when submitting the form, 
          doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);  //    change the search query to match what you entered,
          event.preventDefault();                                         //    and prevent the page from refreshing
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}                //<--- sinec you used setQuery and state changed, the element rerenders
        />
        <button type="submit">Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}
      {/* ^ in case isError = true, display something notifying the user there was a problem */}
      {isLoading ? (                          //<--- check if isLoading is true,
        <div>Loading ...</div>                //    and display loading div
      ) : (                                   //<--- if isLoading is false, display an unordered list mapping the data into li elements
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}

// ========================================
ReactDOM.render(<App />, document.getElementById("root"));

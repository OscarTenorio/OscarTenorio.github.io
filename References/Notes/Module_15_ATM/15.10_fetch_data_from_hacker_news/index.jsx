function App() {
  const { Container } = ReactBootstrap;
  const { useState, useEffect } = React;
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("MIT");
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState(
    "https://hn.algolia.com/api/v1/search?query=MIT"
  );
  const [isLoading, setIsLoading] = useState(false);
  console.log("Rendering App");
  
  useEffect(() => {   // Handles the LifeCycle Events
    console.log("Fetching data...");
    const fetchData = async () => {
      setIsLoading(true); //<--- place where useState() is being called (using the setter function)
      try {
        const result = await axios(url);
        setData(result.data); //<--- place where useState() is being called (using the setter function)
      } catch (error) {
        setIsError(true); //<--- potential place where useState() is being called (using the setter function)
      }
      setIsLoading(false);
    };

    fetchData(); //<--- calls itself
  }, [url]);
  return (
    <Container>
      <form
        onSubmit={event => {
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`); {/* <---uses query state to determine where in Hacker News website it pulls information from */}

          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)} 
        />
        {/* ^ changes query state to trigger rerender and pull data from a part of Hacker News defined in this field (ex. Harvard) */}
        <button type="submit">Search</button>
      </form>
      {isError && <div>Something went wrong ...</div>}
      {/* ^ shows error if isError === true */}
      {isLoading ? (
        <div>Loading ...</div> /* <--- displayes if fetch is taking a while - look into async function to see how this value is erased once results are received */
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
          {/* ^ renders data into <li> if isLoading === false */}
        </ul>
      )}
    </Container>
  );
}
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));

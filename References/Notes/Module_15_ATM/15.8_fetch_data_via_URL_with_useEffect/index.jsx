function App() {
  const { useState, useEffect } = React; //<--- use destructuring to access method from the React file (see line 4 to watch it in action)
  const { Container } = ReactBootstrap;
  const [data, setData] = useState({ hits: [] });
  const [url, setUrl] = useState("data.json"); //<--- made change here to just find this file instead of passing a specific location
  const [query, setQuery] = useState("");

  console.log("Rendering App");

  useEffect(() => {
    console.log("Fetching data...");
    const fetchData = async () => { //<--- beginning asyncronous call
      const result = await axios(url); //<--- async promise defined with "await" stored in "result"
      setData(result.data);
    };
    fetchData();
  }, []); //<--- empty array passed, meaning it runs immediately, once
  

  return (
    <Container>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() => setUrl("http://localhost:8080/data.json")}
      >
        Search
      </button>

      {/* {isloading ? <div>Loading...</div>     <--- some of the older implementation changed while watching the video
      :  <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>} */}

      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>

    </Container>
  );
}
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));

//  // "https://hn.algolia.com/api/v1/search?query=redux"

const Pagination = ({ items, pageSize, onPageChange }) => {   //<--- new Pagination web component (grabbing variables through destructuring)
  const { Button } = ReactBootstrap;                          //<--- grab button element from ReactBootStrap
  if (items.length <= 1) return null;                         //<--- quick little error handling

  let num = Math.ceil(items.length / pageSize);               //<--- calculate number of pages needed (ex. 1.1 pages needed rounds up to 2)
  let pages = range(1, num + 1);                              //<--- returns an array tracking # of pages needed (ex. [1, 2])
  const list = pages.map(page => {                            //<--- generates buttons for those pages
    return (
      <Button key={page} onClick={onPageChange} className="page-item">
        {page}
      </Button>
    );
  });
  return (                                                    //<--- toss those buttons into an unordered list
    <nav>
      <ul className="pagination">{list}</ul>
    </nav>
  );
};
const range = (start, end) => {                               //<--- pagination helper function, creates an Array with
  return Array(end - start + 1)                               //    some numbers (ex. [1, 2, 3])
    .fill(0)
    .map((item, i) => start + i);
};
function paginate(items, pageNumber, pageSize) {              //<--- pagination helper function, pass it # of items, what page it's generating
  const start = (pageNumber - 1) * pageSize;                  //    them on, and the page total
  let page = items.slice(start, start + pageSize);
  return page;                                                //<--- return what's to be generated on that page
}
const useDataApi = (initialUrl, initialData) => {             //<--- our custom hook, used to manage multiple states
  const { useState, useEffect, useReducer } = React;
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData
  });

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(url);
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
        isError: false
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
};
// App that gets data from Hacker News url
function App() {
  const { Fragment, useState, useEffect, useReducer } = React;
  const [query, setQuery] = useState("MIT");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "https://hn.algolia.com/api/v1/search?query=MIT",
    {
      hits: []
    }
  );
  const handlePageChange = e => {
    setCurrentPage(Number(e.target.textContent));             //<--- set the current visible page to the page selected
  };
  let page = data.hits;
  if (page.length >= 1) {
    page = paginate(page, currentPage, pageSize);
    console.log(`currentPage: ${currentPage}`);
  }
  return (
    <Fragment>
      <form
        onSubmit={event => {
          doFetch("http://hn.algolia.com/api/v1/search?query=${query}");
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {page.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
      <Pagination                                   //<--- returns paginated elements
        items={data.hits}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      ></Pagination>
    </Fragment>
  );
}

// ========================================
ReactDOM.render(<App />, document.getElementById("root"));

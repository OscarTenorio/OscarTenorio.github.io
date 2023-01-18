// this file was renamed from books.js to index.js to match React convention

// this is now being changed into a React application format, this is the old way
// import './books.js'

// window.addEventListener('load', () => {
//     createBookList();
// });

// async function createBookList() {
//     const response = await fetch('./books.json');
//     const json = await response.json();
//     const books = document.getElementById('books');

//     json.books.forEach(book => {
//         const element = document.createElement('mit-book');
//         element.book = book;
//         books.appendChild(element);
//     });
// };

// and here is the React way of implementing the above
function App(){
    const [data, setData] = React.useState(null);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData() {                              // define getData()
            const response = await fetch('./books.json');
            const json = await response.json();
            setData(json);                                      // use state setter with json response to change Data state
            setLoaded(true);
        }
        getData();                                              // call getData()
    }, []);                                                     // no second parameter for useEffect() so fires once
    console.log(`loaded: ${loaded}, data: ${data}`);

    return (<>                                                                  {/* always gotta pass in a parent element to return something in React */}
        <div className="container">
        <h1>React Components</h1>
        {loaded && data.books.map((book,i) => <Book data={book} key={i}/>)}     {/* this is essentially "if loaded, then do this forEach()" */}
        </div>
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
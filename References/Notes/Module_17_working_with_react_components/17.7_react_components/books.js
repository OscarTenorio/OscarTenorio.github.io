// was...
// class Book extends HTMLElement {
// now...
function Book({data}){
  // constructor is no longer needed, shown below...
  // constructor() {
  //   super();
  // };
    
  // Note: React allows declarative code, so no need to make it into a string (backticks were removed)
  // Note 2: made some changes to the boostrap card template that React didn't like (removed <p> and added <tbody> elsewhere)
  return (
    <div className="card">
      <h5 className="card-header">{data.title}</h5>
      <div className="card-body">
        <h5>{data.subtitle}</h5>
          <table className="table">
            <tbody>
              <tr>
                <td className="text-success font-weight-bold">Title:</td>
                <td>{data.title}</td>
              </tr>
              <tr>
                <td className="text-success font-weight-bold">Subtitle:</td>
                <td>{data.subtitle}</td>
              </tr>
              <tr>
                <td className="text-success font-weight-bold">Author:</td>
                <td>{data.author}</td>
              </tr>
              <tr>
                <td className="text-success font-weight-bold">Publisher:</td>
                <td>{data.publisher}</td>
              </tr>
              <tr>
                <td className="text-success font-weight-bold">Description:</td>
                <td>{data.description}</td>
              </tr>
            </tbody> 
          </table>
      </div>
    </div>
  );
};

// below is also not needed...
// customElements.define('mit-book', Book);
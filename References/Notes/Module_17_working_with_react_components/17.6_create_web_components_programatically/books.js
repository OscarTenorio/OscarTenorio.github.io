class Book extends HTMLElement {
  constructor() {
    super();
  };                  //note: constructor is now closed here
    
    // instead of the below, objects will be used to pass in book data
    // const title         = this.getAttribute('title');
    // const subtitle      = this.getAttribute('subtitle');
    // const author        = this.getAttribute('author');
    // const publisher     = this.getAttribute('publisher');
    // const description   = this.getAttribute('description');

  set book(book) {
    // notice these are now accessing properties of the book object
    this.innerHTML = `
      <div class="card">
        <h5 class="card-header">${book.title}</h5>
        <div class="card-body">
          <h5>${book.subtitle}</h5>
          <p class="card-text">
            <table class="table">
              <tr>
                <td class="text-success font-weight-bold">Title:</td>
                <td>${book.title}</td>
              </tr>
              <tr>
                <td class="text-success font-weight-bold">Subtitle:</td>
                <td>${book.subtitle}</td>
              </tr>
              <tr>
                <td class="text-success font-weight-bold">Author:</td>
                <td>${book.author}</td>
              </tr>
              <tr>
                <td class="text-success font-weight-bold">Publisher:</td>
                <td>${book.publisher}</td>
              </tr>
              <tr>
                <td class="text-success font-weight-bold">Description:</td>
                <td>${book.description}</td>
              </tr>
            </table>
          </p>
        </div>
      </div>
    `;
  }
};
//needed to actually use/define the custom element, used to invoke it. Parameters: what to call it, what class it extends
customElements.define('mit-book', Book);
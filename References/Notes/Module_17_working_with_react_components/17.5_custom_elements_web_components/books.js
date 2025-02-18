class Book extends HTMLElement {
    constructor() {     //some boilerplate stuff needed to get this running,
        super();        // didn't give explanation

        const title         = this.getAttribute('title');
        const subtitle      = this.getAttribute('subtitle');
        const author        = this.getAttribute('author');
        const publisher     = this.getAttribute('publisher');
        const description   = this.getAttribute('description');

        // notice the backticks so template literals can be used (calling a variable amongst a string)
        this.innerHTML = `
          <div class="card">
            <h5 class="card-header">${title}</h5>
            <div class="card-body">
              <h5>${subtitle}</h5>
              <p class="card-text">
                <table class="table">
                  <tr>
                    <td class="text-success font-weight-bold">Title:</td>
                    <td>${title}</td>
                  </tr>
                  <tr>
                    <td class="text-success font-weight-bold">Subtitle:</td>
                    <td>${subtitle}</td>
                  </tr>
                  <tr>
                    <td class="text-success font-weight-bold">Author:</td>
                    <td>${author}</td>
                  </tr>
                  <tr>
                    <td class="text-success font-weight-bold">Publisher:</td>
                    <td>${publisher}</td>
                  </tr>
                  <tr>
                    <td class="text-success font-weight-bold">Description:</td>
                    <td>${description}</td>
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
const card = 
  <div class="container">
    <div class="card">
      <h5 class="card-header">Featured text here</h5>
      <div class="card-body">
        <h5 class="card-title">Special title treatment here</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere / Link</a>
      </div>
    </div>
  </div>

const element = React.createElement(
  'div', [], card
);

// ============================================================

ReactDOM.render(element, document.getElementById('root'));
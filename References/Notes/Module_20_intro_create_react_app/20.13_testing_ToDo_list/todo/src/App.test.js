import * as ReactDOM from 'react-dom';
import App from './App';

test('Todo', () => {
  // writing test to verify the app can render
  const root = document.createElement('div');
  ReactDOM.render(<App/>, root);

  //after rendering, we're using DOM APIs (query selector) to make assertions
  // NOTE: syntax
  expect(root.querySelector('h1').textContent).toBe('TODO');
  expect(root.querySelector('label').textContent).toBe('Add Todo: ');
  expect(root.querySelector('button').textContent).toBe('Add #1');
});

import * as ReactDOM from 'react-dom';
import { getQueriesForElement } from '@testing-library/dom';
import App from './App';

test('Todo', () => {
  // writing test to verify the app can render
  const root = document.createElement('div');
  ReactDOM.render(<App/>, root);
  const { getByText, getByLabelText } = getQueriesForElement(root);

  //after rendering, we're using DOM APIs (query selector) to make assertions
  // NOTE: syntax
  expect(getByText('TODO')).not.toBe(null);
  expect(getByLabelText('Add Todo:')).not.toBe(null);
  expect(getByText('Add #1')).not.toBe(null);

  // the above can be simplified even further into the following:
  getByText('TODO');
  getByLabelText('Add Todo:')
  getByText('Add #1')
});

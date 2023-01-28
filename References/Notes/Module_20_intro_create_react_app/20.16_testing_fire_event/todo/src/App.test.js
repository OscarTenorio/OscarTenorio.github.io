import { render } from '@testing-library/react';
import App from './App';

test('Todo', () => {
  const { getByText, getByLabelText } = render(<App/>);

  getByText('TODO');
  getByLabelText('Add Todo:')
  getByText('Add #1')
});

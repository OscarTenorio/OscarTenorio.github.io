//grabbing fireEvent from react testing library as well
import { render, fireEvent } from '@testing-library/react';
//grabbing an easier to read method for something similar to fireEvent
import userEvent from '@testing-library/user-event';
import App from './App';

test('Todo', () => {
  const { getByText, getByLabelText } = render(<App/>);

  getByText('TODO');
  getByLabelText('Add Todo:');
  getByText('Add #1');
});

//fireEvent() submits a form (it fires an event)
test('add items to list', () => {
  const { getByText, getByLabelText } = render(<App/>);

  getByText('TODO');
  const input = getByLabelText('Add Todo:');
  //NOTE: syntax, adds the text then clicks the button
  fireEvent.change(input, {target:{value:'wash car'}});
  fireEvent.click(getByText('Add #1'));

  //then you should confirm data appears on screen
  //reminder number increments based on index + 1
  getByText('Add #2');
  getByText('wash car');
});

//userEvent expresses intent better
test('user-events allows users to add...', () => {
  const { getByText, getByLabelText } = render(<App/>);

  const input = getByLabelText('Add Todo:');
  const button = getByText('Add #1');

  userEvent.type(input, 'Learn Spanish');
  userEvent.click(button);
  getByText('Learn Spanish');
  getByText('Add #2');
});

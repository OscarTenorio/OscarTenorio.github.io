//NOTE: with the SUPER clean way of importing methods even this import below is not needed
// import * as ReactDOM from 'react-dom';

//NOTE: where the getQueriesForElement() functions list comes from, but commented out for an even cleaner version of this just below
// import { getQueriesForElement } from '@testing-library/dom';

//NOTE: here is the SUPER clean way of rendering - others eft as comments for posterity
import { fireEvent, render, waitFor } from '@testing-library/react';
import App from './App';
// used in the API simulation, commented out for now
// import { api } from './api';

//abstract the rendering of the elements into a render() function

// function render(component){
//   const root = document.createElement('div');
//   ReactDOM.render(component, root);
//   //return the getQueriesForElement() functions once done rendering
//   return getQueriesForElement(root);
// };

// All of the above is commented out since there's an even CLEANER way to go about it
// render() from the React library already does this, so it's imported and then just called below on line 25 and wam bam all done!

// mock the API response NOTE: syntax is... interesting
// const mockCreateItem = (api.createItem = jest.fn());

test('Todo', () => {
  //destructure the needed methods from the returned functions list once the app is rendered
  const { getByText, getByLabelText } = render(<App/>);

  // NOTE: syntax
  expect(getByText('TODO')).not.toBe(null);
  expect(getByLabelText('Add Todo:')).not.toBe(null);
  expect(getByText('Add #1')).not.toBe(null);

  // the above can be simplified even further into the following:
  getByText('TODO');
  getByLabelText('Add Todo:')
  getByText('Add #1')
});

//test using API mock, commented out since everything else mock related is too
//NOTE: since the API mock has a promise in it, inorder to use 'await' to wait for the return on the promise this test function needs to be an async function
// test('add items to list using API mock', async () => {
//   const todoText = "Learn Spanish"
//   mockCreateItem.mockResolvedValueOnce(todoText);

//   const { getByText, getByLabelText } = render(<App/>);

//   const input = getByLabelText('Add todo:');
//   fireEvent.change(input, {target:{value:'wash car'}});
//   fireEvent.click(getByText('Add #1'));

//   await waitFor(() => getByText(todoText));

//   expect(mockCreateItem).toBeCalledTimes(1);
//   expect(mockCreateItem).toBeCalledWith(
//     expect.stringContaining('wash car')
//   );
// });


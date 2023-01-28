//NOTE: with the SUPER clean way of importing methods even this import below is not needed
// import * as ReactDOM from 'react-dom';

//NOTE: where the getQueriesForElement() functions list comes from, but commented out for an even cleaner version of this just below
// import { getQueriesForElement } from '@testing-library/dom';

//NOTE: here is the SUPER clean way of rendering - others eft as comments for posterity
import { render } from '@testing-library/react';
import App from './App';

//abstract the rendering of the elements into a render() function

// function render(component){
//   const root = document.createElement('div');
//   ReactDOM.render(component, root);
//   //return the getQueriesForElement() functions once done rendering
//   return getQueriesForElement(root);
// };

// All of the above is commented out since there's an even CLEANER way to go about it
// render() from the React library already does this, so it's imported and then just called below on line 25 and wam bam all done!

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

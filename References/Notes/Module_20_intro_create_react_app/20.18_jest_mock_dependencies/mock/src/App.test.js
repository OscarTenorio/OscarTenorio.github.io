import { render, screen } from '@testing-library/react';
import App from './App';

//here we add the mock
jest.mock('./MyComponent', () => () => (<div>Hello World!</div>));
                          //a    b    c
//a - callback function
//b - our component itelf written directly into the parentheses
//c - our component's return

test('mocking test', () => {
  const {container} = render(<App />);
  expect(container.textContent).toMatch("Hello World!");
});

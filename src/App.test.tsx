import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('should render a button', () => {
  render(<App />);
  const linkElement = screen.getByRole('button');
  expect(linkElement).toBeInTheDocument();
});

it('should render a button', () => {
  render(<App />);
  const linkElement = screen.getByRole('button');
  expect(linkElement).toBeInTheDocument();
});

// it('should render correctly with title and description', () => {
//   const wrapper = shallow(
//     <App title="Some title" description="Some description" />
//   );

//   expect(toJson(wrapper)).toMatchSnapshot();
// });

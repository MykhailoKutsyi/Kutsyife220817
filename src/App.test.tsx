import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
it('should render a heading', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading');
  expect(linkElement).toBeInTheDocument();
});

it('should render a list', () => {
  render(<App />);
  const linkElement = screen.getByRole('list');
  expect(linkElement).toBeInTheDocument();
});

it('should render a button', () => {
  render(<App />);
  const linkElement = screen.getByRole('button');
  expect(linkElement).toBeInTheDocument();
});

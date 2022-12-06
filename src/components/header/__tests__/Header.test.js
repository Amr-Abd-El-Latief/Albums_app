import { render, screen } from '@testing-library/react';
import Header from '../Header'

test('App should renders header', () => {
  render(<Header />);
  const headerElement = screen.getByTestId('header-1');
   expect(headerElement).toBeInTheDocument()
});
test('renders Title of app in Headerr', () => {
  render(<Header />);
  const labelElement = screen.getByText(/Albums/i);
   expect(labelElement).toBeInTheDocument();
});

import { render, screen,cleanup } from '@testing-library/react';
import Footer from '../Footer'

test('App should renders Footer', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('footer-1');
     expect(footerElement).toBeInTheDocument()
  });
  

test('renders App description in footer', () => {
  render(<Footer />);
  const labelElement = screen.getByText(/App for showing and reading about Albums/i);
   expect(labelElement).toBeInTheDocument();
});

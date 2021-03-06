import {render, screen} from '@testing-library/react';
import App from './App';

test('renders User Management', () => {
  render(<App />);
  const linkElement = screen.getByText(/User Management/i);
  expect(linkElement).toBeInTheDocument();
});

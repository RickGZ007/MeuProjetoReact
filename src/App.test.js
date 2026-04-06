import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calculator button', () => {
  render(<App />);
  const button = screen.getByText('=');
  expect(button).toBeInTheDocument();
});
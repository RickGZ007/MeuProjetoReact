import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza botão de login', () => {
  render(<App />);
  const button = screen.getByText('Acessar');
  expect(button).toBeInTheDocument();
});
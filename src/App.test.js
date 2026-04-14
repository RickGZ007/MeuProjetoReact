import { render, screen } from '@testing-library/react';
import App from './App';

test('rrenderiza botão de login', () => {
  render(<App />);
  const button = screen.getByText('Acessar');
  expect(button).toBeInTheDocument();
});
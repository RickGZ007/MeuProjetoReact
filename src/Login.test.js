import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

test("renderiza input de email", () => {
  render(<Login />);
  expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
});

test("renderiza input de senha", () => {
  render(<Login />);
  expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument();
});

test("digita email", () => {
  render(<Login />);
  const input = screen.getByPlaceholderText(/email/i);

  fireEvent.change(input, { target: { value: "teste@email.com" } });

  expect(input.value).toBe("teste@email.com");
});

test("digita senha", () => {
  render(<Login />);
  const input = screen.getByPlaceholderText(/senha/i);

  fireEvent.change(input, { target: { value: "123456" } });

  expect(input.value).toBe("123456");
});

test("mostra erro ao clicar entrar", () => {
  render(<Login />);

  fireEvent.click(screen.getByText(/entrar/i));

  expect(screen.getByText(/erro/i)).toBeInTheDocument();
});
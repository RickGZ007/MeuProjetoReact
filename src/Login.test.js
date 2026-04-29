import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "./pages/Login";

function renderLogin() {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
}

test("renderiza input de email", () => {
  renderLogin();

  expect(
    screen.getByPlaceholderText(/e-mail/i)
  ).toBeInTheDocument();
});

test("renderiza input de senha", () => {
  renderLogin();

  expect(
    screen.getByPlaceholderText(/senha/i)
  ).toBeInTheDocument();
});

test("digita email", () => {
  renderLogin();

  const input = screen.getByPlaceholderText(/e-mail/i);

  fireEvent.change(input, {
    target: { value: "teste@email.com" }
  });

  expect(input.value).toBe("teste@email.com");
});

test("digita senha", () => {
  renderLogin();

  const input = screen.getByPlaceholderText(/senha/i);

  fireEvent.change(input, {
    target: { value: "123456" }
  });

  expect(input.value).toBe("123456");
});

test("renderiza botão entrar", () => {
  renderLogin();

  expect(
    screen.getByText(/entrar/i)
  ).toBeInTheDocument();
});
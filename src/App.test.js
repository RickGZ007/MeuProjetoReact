import { render, screen } from "@testing-library/react";
import App from "./App";

test("renderiza tela login", () => {
  render(<App />);
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});
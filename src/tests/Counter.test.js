// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from "@testing-library/react";
import Counter from "../components/Counter";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test("renders counter message", () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText("Counter");
  expect(counterMessage).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  // Complete the unit test below based on the objective in the line above

  //count button
  const countElement = screen.getByTestId("count");

  //click increment
  const incrementButton = screen.getByRole("button", { name: "+" });
  userEvent.click(incrementButton);

  //check counter
  expect(countElement).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
  // Complete the unit test below based on the objective in the line above

  //count button
  const countElement = screen.getByTestId("count");

  //click increment
  const decrementButton = screen.getByRole("button", { name: "-" });
  userEvent.click(decrementButton);

  //check counter
  expect(countElement).toHaveTextContent("-1");
});

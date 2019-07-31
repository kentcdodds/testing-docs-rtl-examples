import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Toggle from "./toggle";

test("changes value when clicked", () => {
  const handleChange = jest.fn();
  const { getByText } = render(
    <Toggle initial={true} onChange={handleChange} />,
  );
  const button = getByText(/turn off/i);
  fireEvent.click(button);
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(button).toHaveTextContent(/turn on/i);
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  expect(handleChange).toHaveBeenCalledTimes(4);
  expect(button).toHaveTextContent(/turn off/i);
});

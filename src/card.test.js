import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import Card from "./card";

jest.useFakeTimers();

test("selects null after timing out", () => {
  const handleSelect = jest.fn();
  render(<Card onSelect={handleSelect} />);
  act(() => {
    jest.advanceTimersByTime(100);
  });
  expect(handleSelect).not.toHaveBeenCalled();
  act(() => {
    jest.advanceTimersByTime(10000);
  });
  expect(handleSelect).toHaveBeenCalledTimes(1);
  expect(handleSelect).toHaveBeenCalledWith(null);
});

test("cleans up on being removed", () => {
  const handleSelect = jest.fn();
  const { unmount } = render(<Card onSelect={handleSelect} />);
  unmount();
  act(() => {
    jest.advanceTimersByTime(10000);
  });
  expect(handleSelect).not.toHaveBeenCalled();
});

test("accepts selections", () => {
  const handleSelect = jest.fn();
  const { getByTestId } = render(<Card onSelect={handleSelect} />);

  fireEvent.click(getByTestId("card-button-2"));

  expect(handleSelect).toHaveBeenCalledTimes(1);
  expect(handleSelect).toHaveBeenCalledWith(2);
});

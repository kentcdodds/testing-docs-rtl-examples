import React from "react";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import User from "./user";

beforeEach(() => {
  // mock window.fetch so the unit tests don't actually make HTTP requests
  jest.spyOn(window, "fetch").mockImplementation(() => {});
});

afterEach(() => {
  // remove the mock to ensure tests are completely isolated
  window.fetch.mockRestore();
});

test("renders user data", async () => {
  const fakeUser = {
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue",
  };
  window.fetch.mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    }),
  );

  const { getByLabelText, getByText } = render(<User id="123" />);

  expect(window.fetch).toHaveBeenCalledTimes(1);
  expect(window.fetch).toHaveBeenCalledWith("/123");

  await waitForElementToBeRemoved(() => getByText(/loading/i));

  expect(getByLabelText(/name/i)).toHaveTextContent(fakeUser.name);
  expect(getByLabelText(/age/i)).toHaveTextContent(fakeUser.age);
  expect(getByLabelText(/address/i)).toHaveTextContent(fakeUser.address);
});

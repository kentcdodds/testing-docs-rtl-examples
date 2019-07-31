import React from "react";
import { render } from "@testing-library/react";
import Contact from "./contact";
import MockedMap from "./map";

jest.mock("./map", () => jest.fn(() => "DummyMap"));

test("renders contact information", () => {
  const center = { lat: 0, lang: 0 };
  render(<Contact name="" email="" site="" center={center} />);
  // ensure the mocked map component function was called correctly
  expect(MockedMap).toHaveBeenCalledWith({ center }, {});
});

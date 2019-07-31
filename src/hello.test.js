import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Hello from "./hello";

test("renders without a name", () => {
  const { container } = render(<Hello />);
  expect(container).toHaveTextContent("Hey, stranger");
});

test("renders with a name", () => {
  const { container } = render(<Hello name="Sophie" />);
  expect(container).toHaveTextContent("Hello, Sophie!");
});

test("preserves its structure", () => {
  expect(render(<Hello />).container).toMatchInlineSnapshot(`
    <div>
      <span>
        Hey, stranger
      </span>
    </div>
  `);

  expect(render(<Hello name="Sophie" />).container).toMatchInlineSnapshot(`
    <div>
      <h1>
        Hello, 
        Sophie
        !
      </h1>
    </div>
  `);
});

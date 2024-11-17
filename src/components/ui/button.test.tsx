import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import {Button} from "./button";

test("Button: got rendered correctly", () => {
  render(<Button  >My Button</Button>);
  expect(screen.getByText("My Button", )).toBeDefined();
});
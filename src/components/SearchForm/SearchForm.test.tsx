import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import SearchForm from ".";
const handleSearch = vi.fn()

describe("SearchForm components", () => {
  beforeEach(() => {
    render(<SearchForm handleSearch={handleSearch} />);
  });
  afterEach(() => {
    cleanup();
  });

  it("Displayes a Form", () => {
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
    expect(form.children.length).toBe(2);
  });

  it("Updates the value of the textbox when typed into", async () => {
    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("");
    await userEvent.type(input, "Under the Dome");
    expect(input).toHaveValue("Under the Dome");
  });

  it("Updates the input to be empty when the form is submitted andf calls hadnleSearch with the input value", async()=>{
      const input = screen.getByRole("textbox");

    await userEvent.type(input, "Under the Dome");
    expect(input).toHaveValue("Under the Dome");
    await userEvent.keyboard('{Enter}')
    expect(input).toHaveValue('')
    expect(handleSearch).toHaveBeenCalledWith("Under the Dome")
  })
});

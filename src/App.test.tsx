import React from "react";
import { describe, expect, it, afterEach, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import App from "./App";

describe("App routing", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the home page at /", () => {
    window.history.pushState({}, "", "/");
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const h1 = screen.getByRole("heading", { name: /top tv/i })
    expect(h1).toBeInTheDocument();
  });



  it("renders the search page at /search", () => {
    window.history.pushState({}, "", "/search");
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const form = screen.getByRole("form")
    expect(form).toBeInTheDocument();
  });

  it("renders a not-found page for an unknown route", () => {
    window.history.pushState({}, "", "/this-route-does-not-exist");
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const err = screen.getByText("404")
    expect(err).toBeInTheDocument();
  });

  it("renders the Header layout on every route", () => {
    window.history.pushState({}, "", "/shows");
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const nav = screen.getByRole("navigation")
    expect(nav).toBeInTheDocument();
  });
});
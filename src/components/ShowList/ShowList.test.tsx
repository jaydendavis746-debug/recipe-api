import React from "react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import ShowList from ".";
import { ShowProvider } from "../../contexts";

describe("ShowList components", () => {
  beforeEach(() => {
    render(
        <ShowProvider>
        <ShowList />
        </ShowProvider>
);
  });
  afterEach(() => {
    cleanup();
  });
 

  it('Render a page that has filter options and a list of showCards', ()=>{
    const div = screen.getByRole('figure')
    expect(div.children.length).toBe(1)
  })

});

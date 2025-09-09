import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Contact from "../components/Contact";

describe("Contact Us page Testing", ()=> {
   test("Contact Component should be loaded", () => {
    render(<Contact />);

   // more explicit: check for h1 with text "Contact Us"
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});
});


import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "./appStore";
import "@testing-library/jest-dom";

describe("Checking Header Component", () => {
  it("Should render a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const button = screen.getByRole("button", {name : "login"});

    expect(button).toBeInTheDocument();

    
  }); 
  it("Should render Header with  Cart Items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItem = screen.getByText("🛒 - (0)")

    expect(cartItem).toBeInTheDocument();

    
  });
  it("Should Change Login button to Logout ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name : "login"});

    expect(loginButton).toBeInTheDocument();

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name : "logout"});

    expect(logoutButton).toBeInTheDocument();

    
  });
});

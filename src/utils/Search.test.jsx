import MOCK_DATA from "./mock.json"
import { it, describe, expect, vi } from "vitest"
import "@testing-library/jest-dom"
import Body from "../components/Body"
import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

global.fetch = vi.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
})

describe("Checking Search Functionality", () => {
  it("should filter the restaurant list based on search text", async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )

    const searchBeforeInput = await screen.findAllByTestId("restaurant-card");

    expect(searchBeforeInput.length).toBe(20);

    // wait until the search button actually appears
    const searchBtn = await screen.findByRole("button", { name: /search/i })

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {
      target: {
        value: "burger",
      },
    });

    fireEvent.click(searchBtn);

    const restaurantList = screen.getAllByTestId("restaurant-card")

    expect(restaurantList.length).toBe(2);

    const searchAfterInput = screen.getAllByTestId("restaurant-card");

    expect(searchAfterInput.length).toBe(2);
  });

  it("should filter the restaurant which are top rated ", async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )

    const TopBtn = await screen.findByRole("button", { name: /Top Rated Restaurants/i })
    fireEvent.click(TopBtn);

    const ToprestaurantLists = screen.getAllByTestId("restaurant-card")

    expect(ToprestaurantLists.length).toBe(8);


  })
})

import mockData from "./mockData";
import RestaurantCard, {withOpenStatus} from "../components/RestaurantCard";
import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe ("Checking The RestaurantCard Component", () => {
    it("renders RestaurantCard component correctly", () => {

    render(
        <BrowserRouter>
            <RestaurantCard resData={mockData[0]} />
        </BrowserRouter>
    );

    const nameElement = screen.getByText("Pizza Hut");

    expect(nameElement).toBeInTheDocument();
});
    const OpenStatusRestaurantCard = withOpenStatus(RestaurantCard);

    it("should check if there is open or closed label", () => {

    render(
        <BrowserRouter>
            <OpenStatusRestaurantCard resData={mockData[0]} />
        </BrowserRouter>
    );

    
    const labelElement = screen.getByText(/OPEN|CLOSED/i);

    expect(labelElement).toBeInTheDocument();

});
});
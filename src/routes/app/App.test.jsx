import { describe, it, expect, afterEach } from "vitest";
import { render, screen, act, cleanup, waitFor } from "@testing-library/react";
import App, { DataContext, WishlistContext } from "./App";
import Homepage from "../../components/homepage/Homepage";

afterEach(cleanup);

const mockResponse = [
  { id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" },
  { id: 2, title: "Mens Casual Premium Slim Fit T-Shirts " },
  { id: 3, title: "Mens Cotton Jacket" },
];

// Update code to utilise MSW (Mock Service Worker), refer to React Testing Library example.

describe("Shopping cart", () => {
  it("Load App sidebar", async () => {
    await act(async () => {
      render(<App />);
    });

    const sidebar = await screen.findByTestId("sidebar");

    expect(sidebar).toBeInTheDocument();
  });

  it("Data is loaded in Homepage component", async () => {
    await act(async () => {
      <DataContext.Provider value={{ mockResponse }}>
        <WishlistContext.Provider value={{}}>
          <Homepage />
        </WishlistContext.Provider>
      </DataContext.Provider>;
    });

    const testElem = await screen.findByTestId("productsDiv");

    await waitFor(() => {
      expect(testElem).toBeInTheDocument();
    });
  });
});

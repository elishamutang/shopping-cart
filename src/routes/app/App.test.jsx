import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { render, screen, act, renderHook, waitFor, cleanup } from "@testing-library/react";
import useFakeData from "../../hooks/FakeData";
import App from "./App";

afterEach(cleanup);

describe("Shopping cart", () => {
  it("sidebar component exists", async () => {
    await act(async () => {
      render(<App />);
    });

    const sidebar = await screen.findByTestId("sidebar");

    expect(sidebar).toBeInTheDocument();
  });

  it("should return the initial values for items, loading and error ", async () => {
    const { result } = renderHook(() => useFakeData());
    console.log(result.current);

    expect(result.current.items).toEqual([]);
    expect(result.current.loading).toEqual(true);
    expect(result.current.error).toBe(null);
  });

  describe("when data is fetched succesfully", () => {
    let mockedData;
    let response;

    beforeEach(() => {
      mockedData = {
        items: [
          { id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" },
          { id: 2, title: "Mens Casual Premium Slim Fit T-Shirts " },
          { id: 3, title: "Mens Cotton Jacket" },
        ],
        loading: false,
        error: null,
      };

      response = { json: vi.fn().mockResolvedValue(mockedData) };

      global.fetch = vi.fn().mockResolvedValue(response);
    });

    it("it should return data", async () => {
      const { result } = renderHook(() => useFakeData());

      await waitFor(() => {
        expect(result.current.items).toEqual(mockedData);
      });
    });
  });
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import CartItem from '../UI/cart/CartItem';
import { cartActions } from "../../store/shopping-cart/cartSlice";

//This component tests the CartItem component

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
  }));
  
  describe("CartItem component", () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
  
    const item = {
      id: 1,
      title: "Product",
      price: 10,
      image01: "image01.jpg",
      quantity: 2,
      totalPrice: 20,
      selection: { topping: "Cheese", sauce: "Mayo" },
    };
  
    beforeEach(() => {
      render(<CartItem item={item} />);
    });
  
    test("renders item title", () => {
      const titleElement = screen.getByText("Product");
      expect(titleElement).toBeInTheDocument();
    });
  
    test("renders item toppings and sauces", () => {
      const toppingsElement = screen.getByText("toppings: Cheese");
      expect(toppingsElement).toBeInTheDocument();
  
      const saucesElement = screen.getByText("sauces: Mayo");
      expect(saucesElement).toBeInTheDocument();
    });
  
    test("renders item price and quantity", () => {
      const priceElement = screen.getByText("2x €20");
      expect(priceElement).toBeInTheDocument();
  
      const quantityElement = screen.getByText("2");
      expect(quantityElement).toBeInTheDocument();
    });
  
    test("calls incrementItem when increase button is clicked", () => {
      const increaseButton = screen.getByTitle("increase quantity");
      fireEvent.click(increaseButton);
  
      expect(mockDispatch).toHaveBeenCalledWith(
        cartActions.addItem({
          id: 1,
          title: "Product",
          price: 10,
          selection: { topping: "Cheese", sauce: "Mayo" },
          image01: "image01.jpg",
        })
      );
    });
  
    test("calls decreaseItem when decrease button is clicked", () => {
      const decreaseButton = screen.getByTitle("decrease quantity");
      fireEvent.click(decreaseButton);
  
      expect(mockDispatch).toHaveBeenCalledWith(
        cartActions.removeItem({ title: "Product", selection: { topping: "Cheese", sauce: "Mayo" } })
      );
    });
  
    test("calls deleteItem when delete button is clicked", () => {
      const deleteButton = screen.getByTitle("delete item");
      fireEvent.click(deleteButton);
  
      expect(mockDispatch).toHaveBeenCalledWith(
        cartActions.deleteItem({ title: "Product", selection: { topping: "Cheese", sauce: "Mayo" } })
      );
    });
});

// Import necessary modules and functions
import { act } from "react-dom/test-utils";
import { fireEvent, render } from "@testing-library/react";
import { auth, signInWithEmailAndPassword } from "../../config/firebase";
import Signin from '../../pages/AdminDash/Signin';

// Mock the signInWithEmailAndPassword function
jest.mock("../../config/firebase", () => ({
  auth: {
    signInWithEmailAndPassword: jest.fn(),
  },
}));

describe("Signin", () => {
  it("handles email and password login", async () => {
    // Render the Signin component
    const { getByLabelText, getByText } = render(<Signin />);

    // Fill out the email and password fields
    fireEvent.change(getByLabelText("Email address"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "password" },
    });

    // Mock the userCredential object and userId
    const userCredential = {
      user: {
        uid: "CWILkMa7dzRtvWPdrk7AYm859w52",
      },
    };
    signInWithEmailAndPassword.mockResolvedValue(userCredential);

    // Click the Sign in button
    fireEvent.click(getByText("Sign in"));

    // Wait for the async code to finish
    await act(async () => {
      // Check that signInWithEmailAndPassword was called with the correct arguments
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        auth,
        "test@example.com",
        "password"
      );

      // Check that alert was called with the correct message
      expect(window.alert).toHaveBeenCalledWith("Successfully logged in!");

      // Check that localStorage was set correctly
      expect(localStorage.getItem("isAuthenticated")).toBe("true");

      // Check that navigate was called with the correct path
      expect(navigate).toHaveBeenCalledWith("/admin/dashboard");

      // Check that the error message is not displayed
      expect(getByText("Wrong email-address or password!")).not.toBeVisible();
    });

    // Wait for the error message to clear
    await act(async () => {
      jest.advanceTimersByTime(3000);
    });

    // Check that the error message is cleared
    expect(getByText("Wrong email-address or password!")).not.toBeVisible();
  });
});


import { describe, it, expect, afterEach } from "vitest";
import {
  render,
  screen,
  cleanup,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "./UserForm";

afterEach(() => {
  cleanup();
});

describe("UserForm integration tests", () => {
  it("shows errors when the form is submitted empty", async () => {
    const user = userEvent.setup();
    render(<UserForm />);
    await user.click(
      screen.getByRole("button", { name: /submit/i })
    );
    expect(screen.getByText("Name is required"))
      .toBeInTheDocument();
    expect(screen.getByText("Email is required"))
      .toBeInTheDocument();
    expect(screen.queryByRole("status"))
      .not.toBeInTheDocument();
  });
  it("shows an error when the email is invalid", async () => {
    const user = userEvent.setup();
    render(<UserForm />);
    await user.type(
      screen.getByLabelText(/name/i),
      "Mohan"
    );
    await user.type(
      screen.getByLabelText(/email/i),
      "invalid-email"
    );
    await user.click(
      screen.getByRole("button", { name: /submit/i })
    );
    expect(
      screen.getByText("Enter a valid email address")
    ).toBeInTheDocument();
  });
  it("shows a success message after valid submission", async () => {
    const user = userEvent.setup();
    render(<UserForm />);
    await user.type(
      screen.getByLabelText(/name/i),
      "Mohan"
    );
    await user.type(
      screen.getByLabelText(/email/i),
      "mohan@example.com"
    );
    await user.click(
      screen.getByRole("button", { name: /submit/i })
    );
    expect(screen.getByRole("status"))
      .toHaveTextContent(
        "Form submitted successfully for Mohan"
      );
    expect(screen.queryByRole("alert"))
      .not.toBeInTheDocument();
  });
});
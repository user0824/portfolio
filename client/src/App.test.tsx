// >> APP TEST << //
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock heavy or problematic subcomponents here
vi.mock("./components/SplashCursor", () => ({
  default: () => <div data-testid="splash-cursor" />,
}));

describe("App Component", () => {
  it("renders Hello", () => {
    render(<App />);
    const heading = screen.getByText(/Hello/i);
    expect(heading).toBeInTheDocument();
  });
});

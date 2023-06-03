import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the About Us section", () => {
  render(<App />);

  const aboutUsSection = screen.getByTestId("about-us-section");
  const sectionContent = screen.getByText(/Niuzie platform was established/i);

  expect(aboutUsSection).toBeInTheDocument();
  expect(sectionContent).toBeInTheDocument();
});

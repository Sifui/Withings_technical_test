import { render } from "@testing-library/react";
import App from "../app/App";
test("App renders correctly", () => {
  const app = render(<App />);
  expect(app).toBeTruthy();
});

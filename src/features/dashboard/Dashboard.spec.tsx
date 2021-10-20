import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "../../app/store";
import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  let store;
  beforeEach(() => {
    store = makeStore();

    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  });

  describe("on did mount", () => {
    it("should render", () => {
      expect(screen.getByTestId("dashboard")).toBeInTheDocument();
    });
  });
});

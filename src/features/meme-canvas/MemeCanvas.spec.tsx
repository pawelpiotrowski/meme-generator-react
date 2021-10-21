import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "../../app/store";
import MemeCanvas, { CANVAS_ID } from "./MemeCanvas";

describe("<MemeCanvas />", () => {
  let store;
  beforeEach(() => {
    store = makeStore();

    render(
      <Provider store={store}>
        <MemeCanvas />
      </Provider>
    );
  });

  describe("on did mount", () => {
    it("should render", () => {
      expect(screen.getByTestId(CANVAS_ID)).toBeInTheDocument();
    });
  });
});

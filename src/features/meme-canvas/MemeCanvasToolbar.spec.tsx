import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "../../app/store";
import MemeCanvasToolbar, { dataTestId } from "./MemeCanvasToolbar";

describe("<MemeCanvasToolbar />", () => {
  let store;

  beforeEach(() => {
    store = makeStore();

    render(
      <Provider store={store}>
        <MemeCanvasToolbar />
      </Provider>
    );
  });

  describe("on did mount", () => {
    it("should render", () => {
      expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
    });
  });
});

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "../../app/store";
import MemeText, { dataTestId } from "./MemeText";

describe("<MemeText />", () => {
  let store;
  beforeEach(() => {
    store = makeStore();

    render(
      <Provider store={store}>
        <MemeText />
      </Provider>
    );
  });

  describe("on did mount", () => {
    it("should render", () => {
      expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
    });
  });
});

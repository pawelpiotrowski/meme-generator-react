import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "../../app/store";
import MemeTextInput, { dataTestId } from "./MemeTextInput";

describe("<MemeTextInput />", () => {
  let store;
  beforeEach(() => {
    store = makeStore();

    render(
      <Provider store={store}>
        <MemeTextInput text="test" index={0} />
      </Provider>
    );
  });

  describe("on did mount", () => {
    it("should render", () => {
      expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
    });
  });
});

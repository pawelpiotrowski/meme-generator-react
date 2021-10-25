import { EnhancedStore } from "@reduxjs/toolkit";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "../../app/store";
import MemeTextInput, { dataTestId } from "./MemeTextInput";

describe("<MemeTextInput />", () => {
  let store: EnhancedStore;

  beforeAll(() => {
    store = makeStore();
  });

  describe("on did mount", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <MemeTextInput text="test" index={0} hidden={false} />
        </Provider>
      );
    });

    it("should render", () => {
      expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
    });
  });

  describe("with property hidden", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <MemeTextInput text="test" index={0} hidden={true} />
        </Provider>
      );
    });
    it("should add class hidden to element", () => {
      expect(screen.getByTestId(dataTestId)).toHaveClass(
        "form-container__input--hidden"
      );
    });
  });

  describe("on input change", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <MemeTextInput text="test" index={0} hidden={false} />
        </Provider>
      );
    });

    it("should dispatch text to store", () => {
      fireEvent.change(screen.getByTestId(dataTestId).querySelector("input"), {
        target: { value: "23" },
      });

      const { dashboard } = store.getState();

      expect(dashboard.textBoxes[0]).toEqual("23");
    });
  });
});
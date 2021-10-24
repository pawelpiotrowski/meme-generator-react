import { render, screen, fireEvent, createEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "../../app/store";
import MemeText, { dataTestId } from "./MemeText";

describe("<MemeText />", () => {
  let store;
  beforeAll(() => {
    store = makeStore();
  });

  describe("on did mount", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <MemeText />
        </Provider>
      );
    });

    it("should render", () => {
      expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
    });
  });

  describe("on submit", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <MemeText />
        </Provider>
      );
    });

    it("should prevent default on submit", () => {
      const mockSubmitEvent = createEvent.submit(
        screen.getByTestId(dataTestId)
      );
      const spyOnPreventDefault = jest.spyOn(mockSubmitEvent, "preventDefault");

      fireEvent(screen.getByTestId(dataTestId), mockSubmitEvent);

      expect(spyOnPreventDefault).toBeCalled();
    });
  });
});

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "../../app/store";
import MemeCanvasExportButton, { dataTestId } from "./MemeCanvasExportButton";

describe("<MemeCanvasExportButton />", () => {
  let store;
  const mockOnClick = jest.fn();
  const mockDisabled = false;

  beforeEach(() => {
    store = makeStore();

    render(
      <Provider store={store}>
        <MemeCanvasExportButton disabled={mockDisabled} onClick={mockOnClick} />
      </Provider>
    );
  });

  describe("on did mount", () => {
    it("should render", () => {
      expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
    });
  });
});

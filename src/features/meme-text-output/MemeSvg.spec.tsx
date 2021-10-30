import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "../../app/store";
import MemeSvg, { SVG_ID } from "./MemeSvg";

jest.mock("../meme-canvas/utils", () => ({
  useCanvasSize: jest.fn().mockReturnValue({ width: 500, height: 500 }),
}));

describe("<MemeSvg />", () => {
  let store;
  beforeEach(() => {
    store = makeStore();

    render(
      <Provider store={store}>
        <MemeSvg />
      </Provider>
    );
  });

  describe("on did mount", () => {
    it("should render", () => {
      expect(screen.getByTestId(SVG_ID)).toBeInTheDocument();
    });
  });
});

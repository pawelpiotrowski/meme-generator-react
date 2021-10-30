import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "../../app/store";
import MemeSvgText, { dataTestId } from "./MemeSvgText";

describe("<MemeSvg />", () => {
  let store;
  beforeEach(() => {
    store = makeStore();

    render(
      <Provider store={store}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <MemeSvgText
            x={0}
            y={0}
            fontFamily="Anton"
            fontSize={30}
            box={{ text: "Test", color: "white", isReset: false }}
          />
        </svg>
      </Provider>
    );
  });

  describe("on did mount", () => {
    it("should render", () => {
      expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
    });
  });
});

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "../../app/store";
import MemeImagesList from "./MemeImagesList";

describe("<MemeImagesList />", () => {
  beforeEach(() => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: { memes: [] } }));
  });

  it("renders the component", () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <MemeImagesList />
      </Provider>
    );

    expect(
      screen.getByText("Meme Images List has 0 images")
    ).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "../../app/store";
import MemeImagesList from "./MemeImagesList";

const mockMemeImage = {
  id: "1",
  name: "test",
  url: "https://i.imgflip.com/1g8my4.jpg",
  width: 10,
  height: 20,
  box_count: 1,
};

describe("<MemeImagesList />", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe("on did mount", () => {
    it("should start fetching images", () => {
      const store = makeStore();
      fetchMock.mockResponseOnce(JSON.stringify({ data: { memes: [] } }));

      render(
        <Provider store={store}>
          <MemeImagesList />
        </Provider>
      );

      expect(screen.getByText("Loading meme images...")).toBeInTheDocument();
    });
  });

  describe("when images are loaded", () => {
    it("should display loaded images", async () => {
      const store = makeStore();
      const mockMemes = [mockMemeImage, { ...mockMemeImage, id: "2" }];
      fetchMock.mockResponseOnce(
        JSON.stringify({
          data: { memes: mockMemes },
          error: null,
        })
      );

      render(
        <Provider store={store}>
          <MemeImagesList />
        </Provider>
      );

      return new Promise((res, rej) => {
        store.subscribe(() => {
          const el = screen.getByTestId("memes-list");
          const elHasChildren = !!(el && el.children);
          const elChildrenLength = elHasChildren ? el.children.length : 0;

          if (elChildrenLength === mockMemes.length) {
            res(true);
          }
          rej("Displayed images length is incorrect");
        });
      });
    });
  });

  describe("when images failed to be loaded", () => {
    it("should display error", async () => {
      const store = makeStore();

      fetchMock.mockResponseOnce(
        JSON.stringify({
          data: null,
          error: {},
        })
      );

      render(
        <Provider store={store}>
          <MemeImagesList />
        </Provider>
      );

      return new Promise((res, rej) => {
        store.subscribe(() => {
          const el = screen.getByTestId("memes-list-error");

          if (el) {
            res(true);
          }
          rej("Displayed error is incorrect");
        });
      });
    });
  });
});

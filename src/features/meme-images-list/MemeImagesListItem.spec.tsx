import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Provider } from "react-redux";
import { makeStore } from "../../app/store";
import MemeImagesListItem from "./MemeImagesListItem";

const mockMemeImage = {
  id: "1",
  name: "Lorem ipsum test",
  url: "https://i.imgflip.com/1g8my4.jpg",
  width: 10,
  height: 20,
  box_count: 1,
};

describe("<MemeImagesListItem />", () => {
  let store;
  beforeEach(() => {
    store = makeStore();

    render(
      <Provider store={store}>
        <MemeImagesListItem image={mockMemeImage} />
      </Provider>
    );
  });

  describe("on did mount", () => {
    it("should render image with provided properties", () => {
      expect(screen.getByRole("img")).toBeInTheDocument();
      expect(screen.getByAltText(mockMemeImage.name)).toBeInTheDocument();
    });
  });

  describe("on click", () => {
    it("should mark image as selected", () => {
      user.click(screen.getByTestId("memes-list-item"));

      const {
        memeImages: { selected },
      } = store.getState();

      expect(selected.id).toEqual(mockMemeImage.id);
      expect(selected.name).toEqual(mockMemeImage.name);
    });
  });
});

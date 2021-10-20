import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadMemeImages } from "./memeImagesSlice";
import { RootState } from "app/rootReducer";
import MemeImagesListItem from "./MemeImagesListItem";

export default function MemeImagesList() {
  const dispatch = useDispatch();
  useEffect(() => {
    // on init
    dispatch(loadMemeImages());
  }, [dispatch]);

  const { list, hasError, isLoading } = useSelector(
    (state: RootState) => state.memeImages
  );

  if (isLoading) {
    return <div>Loading meme images...</div>;
  }
  if (hasError) {
    return (
      <div data-testid="memes-list-error">
        Uh oh an error occurred while fetching meme images...
      </div>
    );
  }

  return (
    <div data-testid="memes-list">
      {list.map((image) => (
        <MemeImagesListItem key={image.id} image={image} />
      ))}
    </div>
  );
}

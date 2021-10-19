import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadMemeImages } from "./memeImagesSlice";
import { RootState } from "app/rootReducer";

export default function MemeImagesList() {
  const dispatch = useDispatch();
  useEffect(() => {
    // on init
    dispatch(loadMemeImages());
  }, [dispatch]);

  const memeImages = useSelector((state: RootState) => state.memeImages);

  return <div>Meme Images List has {memeImages.length} images</div>;
}

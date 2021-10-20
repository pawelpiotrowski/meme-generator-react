import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { selectMemeImage } from "./memeImagesSlice";
import { MemeImagesListItemProps } from "./interface";
import styles from "./MemeImages.module.css";
import { RootState } from "app/rootReducer";

export default function MemeImagesListItem(props: MemeImagesListItemProps) {
  const dispatch = useDispatch();

  const { selected } = useSelector((state: RootState) => state.memeImages);

  function handleClick() {
    dispatch(selectMemeImage(props.image));
  }

  return (
    <div
      data-testid="memes-list-item"
      className={`${styles.item} ${
        selected && selected.id === props.image.id && styles["item--selected"]
      }`}
      onClick={handleClick}
    >
      <Image src={props.image.url} alt={props.image.name} layout="fill" />
    </div>
  );
}

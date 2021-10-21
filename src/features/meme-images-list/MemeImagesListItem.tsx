import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { selectMemeImage } from "./memeImagesSlice";
import { MemeImagesListItemProps } from "./interface";
import styles from "./MemeImages.module.css";
import { RootState } from "app/rootReducer";
import { uniqueId } from "lodash";

export default function MemeImagesListItem(props: MemeImagesListItemProps) {
  const dispatch = useDispatch();

  const { selected } = useSelector((state: RootState) => state.memeImages);

  const isSelected = () => selected && selected.id === props.image.id;

  const [refId] = useState(
    "ref" + uniqueId(Math.random().toString(36).substr(2, 5))
  );

  const handleClick = () => {
    if (isSelected()) {
      return;
    }
    dispatch(selectMemeImage({ ...props.image, refId }));
  };

  return (
    <div
      data-testid="memes-list-item"
      className={`${styles.item} ${isSelected() && styles["item--selected"]}`}
      onClick={handleClick}
      id={refId}
    >
      <Image
        src={props.image.url}
        alt={props.image.name}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}

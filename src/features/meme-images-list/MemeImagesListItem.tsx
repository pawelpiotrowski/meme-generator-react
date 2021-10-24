import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { selectMemeImage } from "../dashboard/dashboardSlice";
import { MemeImagesListItemProps } from "./interface";
import styles from "./MemeImages.module.css";
import { RootState } from "../../app/rootReducer";
import { getUniqueRefId } from "../../app/utils";

export default function MemeImagesListItem(props: MemeImagesListItemProps) {
  const dispatch = useDispatch();

  const { image: selectedImage } = useSelector(
    (state: RootState) => state.dashboard
  );

  const isSelected = () => selectedImage && selectedImage.id === props.image.id;

  const [refId] = useState(getUniqueRefId());

  const handleClick = () => {
    !isSelected() && dispatch(selectMemeImage({ ...props.image, refId }));
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

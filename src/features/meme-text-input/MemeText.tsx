import { RootState } from "../../app/rootReducer";
import { FormEvent } from "react";
import { useSelector } from "react-redux";
import { get } from "lodash";
import MemeTextInput from "./MemeTextInput";
import styles from "./MemeText.module.css";

export const dataTestId = "meme-text-form";

export default function MemeText() {
  const { image: selectedImage, textBoxes } = useSelector(
    (state: RootState) => state.dashboard
  );
  // const boxCount = get(selectedImage, "box_count", textBoxes.length);

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
  }

  return (
    <form
      data-testid={dataTestId}
      onSubmit={handleSubmit}
      className={styles.formContainer}
    >
      {textBoxes.map((box, index) => (
        <MemeTextInput key={index} box={box} index={index} />
      ))}
    </form>
  );
}

import { setTextBox } from "../dashboard/dashboardSlice";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import styles from "./MemeText.module.css";

export const dataTestId = "meme-text-input";

export default function MemeTextInput(props: { text: string; index: number }) {
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    dispatch(setTextBox({ text: event.target.value, index: props.index }));
  }

  return (
    <p data-testid={dataTestId} className={styles.formContainerInput}>
      <label>#{props.index + 1}</label>
      <input onChange={handleChange} />
    </p>
  );
}

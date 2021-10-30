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
      <button className={styles.buttonClear}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
        </svg>
      </button>
      <button className={styles.buttonTextBlack}>Aa</button>
      <button className={styles.buttonTextWhite}>Aa</button>
    </p>
  );
}

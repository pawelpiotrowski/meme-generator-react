import { setTextBox } from "../../features/dashboard/dashboardSlice";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import styles from "./MemeText.module.css";

export const dataTestId = "meme-text-input";

export default function MemeTextInput(props: {
  text: string;
  index: number;
  hidden: boolean;
}) {
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    dispatch(setTextBox({ text: event.target.value, index: props.index }));
  }

  function getCssClass(): string {
    return (
      styles["form-container__input"] +
      (props.hidden ? ` ${styles["form-container__input--hidden"]}` : "")
    );
  }

  return (
    <p data-testid={dataTestId} className={getCssClass()}>
      <label>#{props.index + 1}</label>
      <input onChange={handleChange} />
    </p>
  );
}

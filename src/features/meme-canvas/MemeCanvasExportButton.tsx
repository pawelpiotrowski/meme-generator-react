import styles from "./MemeCanvas.module.css";

export default function MemeCanvasExportButton(props: {
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={styles.exportCanvasButton}
      onClick={props.onClick}
      disabled={props.disabled}
      title={props.disabled ? "First select image" : "Download Meme"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
      >
        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7l7-7z" />
      </svg>
    </button>
  );
}

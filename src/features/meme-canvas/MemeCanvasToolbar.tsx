import styles from "./MemeCanvas.module.css";

export default function MemeCanvasToolbar() {
  return (
    <div className={styles.canvasToolbar}>
      <h1 className={styles.canvasToolbarTitle}>Meme Generator</h1>
      <ul className={styles.canvasToolbarButtons}>
        <li className={styles.liTransparent}>
          <i></i>
        </li>
        <li className={styles.liBlack}>
          <i></i>
        </li>
        <li className={styles.liWhite}>
          <i></i>
        </li>
      </ul>
    </div>
  );
}

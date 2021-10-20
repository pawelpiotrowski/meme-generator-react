import styles from "./Dashboard.module.css";
import MemeCanvas from "../../features/meme-canvas/MemeCanvas";

export default function Dashboard() {
  return (
    <div data-testid="dashboard" className={styles.dashboard}>
      <div className={styles["dashboard__canvas-container"]}>
        <MemeCanvas />
      </div>
      <div className={styles["dashboard__toolbox"]}></div>
    </div>
  );
}

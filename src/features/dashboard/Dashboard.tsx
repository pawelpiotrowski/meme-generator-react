import styles from "./Dashboard.module.css";
import MemeCanvas from "../../features/meme-canvas/MemeCanvas";
import MemeText from "../../features/meme-text/MemeText";

export default function Dashboard() {
  return (
    <div data-testid="dashboard" className={styles.dashboard}>
      <div className={styles["dashboard__canvas-container"]}>
        <MemeCanvas />
      </div>
      <div className={styles["dashboard__toolbox"]}>
        <MemeText />
      </div>
    </div>
  );
}

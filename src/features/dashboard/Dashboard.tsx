import styles from "./Dashboard.module.css";
import MemeCanvas from "../meme-canvas/MemeCanvas";
import MemeText from "../meme-text-input/MemeText";
import MemeSvg from "../meme-text-output/MemeSvg";

export default function Dashboard() {
  return (
    <div data-testid="dashboard" className={styles.dashboard}>
      <div className={styles.dashboardCanvasContainer}>
        <MemeSvg />
        <MemeCanvas />
      </div>
      <div className={styles.dashboardToolbox}>
        <MemeText />
      </div>
    </div>
  );
}

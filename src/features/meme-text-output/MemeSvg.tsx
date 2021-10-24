import { useCanvasSize } from "../meme-canvas/utils";
import styles from "./MemeSvg.module.css";

const SVG_ID = "meme-svg";

export default function MemeSvg() {
  const { height, width } = useCanvasSize();

  return (
    <div className={styles["meme-svg__wrapper"]}>
      <svg
        id={SVG_ID}
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
      >
        <text x="20" y="35">
          Hello
        </text>
      </svg>
    </div>
  );
}

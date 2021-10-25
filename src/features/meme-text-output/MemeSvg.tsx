import { useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { useCanvasSize } from "../meme-canvas/utils";
import styles from "./MemeSvg.module.css";
import { antonFont } from "./antonFontBase64";

export const SVG_ID = "meme-svg";
export const SVG_PARENT_ID = "meme-svg-parent";

export default function MemeSvg() {
  const { height, width } = useCanvasSize();
  const { image, textBoxes } = useSelector(
    (state: RootState) => state.dashboard
  );

  return (
    <div id={SVG_PARENT_ID} className={styles["meme-svg__wrapper"]}>
      <svg
        id={SVG_ID}
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
      >
        <defs>
          <defs>
            <style>{`@font-face {font-family: Anton; src: url(${antonFont});} .anton {font-family: "Courier";}`}</style>
          </defs>
        </defs>
        {textBoxes.map((box, index) => (
          <text
            key={index}
            x="20"
            y={60 * (index + 1)}
            fontFamily="Anton"
            fontSize={width / 16}
          >
            {box}
          </text>
        ))}
      </svg>
    </div>
  );
}

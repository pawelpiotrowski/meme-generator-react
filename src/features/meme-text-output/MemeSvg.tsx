import { useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { useCanvasSize } from "../meme-canvas/utils";
import styles from "./MemeSvg.module.css";
import { antonFont } from "./antonFontBase64";
import MemeSvgText from "./MemeSvgText";

export const SVG_ID = "meme-svg";
export const SVG_PARENT_ID = "meme-svg-parent";

export default function MemeSvg() {
  const { height, width } = useCanvasSize();
  const { image, textBoxes } = useSelector(
    (state: RootState) => state.dashboard
  );

  if (width === 0) {
    return null;
  }

  return (
    <div id={SVG_PARENT_ID} className={styles.memeSvgWrapper}>
      <svg
        data-testid={SVG_ID}
        id={SVG_ID}
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
      >
        <defs>
          <defs>
            <style>{`@font-face {font-family: Anton; src: url(${antonFont});}`}</style>
          </defs>
        </defs>
        {textBoxes.map((box, index) => (
          <MemeSvgText
            key={index}
            x={width / 2}
            y={60 * (index + 1)}
            fontFamily="Anton"
            fontSize={width / 16}
            text={box}
          />
        ))}
      </svg>
    </div>
  );
}

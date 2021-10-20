import { useEffect, useState } from "react";
import { Canvas2DRef } from "./interface";
import { setCanvas2D, setCanvasDimensions, isCanvasSet } from "./utils";
import styles from "./MemeCanvas.module.css";

const CANVAS_ID = "meme-canvas";
const CANVAS_PARENT_ID = `${CANVAS_ID}-parent`;
let canvasRef = {} as Canvas2DRef;

function onResize(): void {
  setCanvasDimensions(canvasRef);
  render();
}

function render() {
  console.log("CANVAS RENDER!! canvasRef", canvasRef);
}

function setCanvas(): void {
  if (isCanvasSet(canvasRef)) {
    return;
  }
  setCanvas2D(canvasRef, CANVAS_ID, CANVAS_PARENT_ID);
  console.log("canvas set?", canvasRef);
  setCanvasDimensions(canvasRef);
  render();
  window.addEventListener("resize", onResize);
}

function onDestroy(): void {
  window.removeEventListener("resize", onResize);
  canvasRef = {} as Canvas2DRef;
}

function onInit(): void {
  setCanvas();
}

export default function MemeCanvas() {
  useEffect(() => {
    onInit();
    return onDestroy;
  });

  return (
    <div id={CANVAS_PARENT_ID} className={styles["canvas-container"]}>
      <canvas id={CANVAS_ID}></canvas>
    </div>
  );
}

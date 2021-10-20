import { isEmpty } from "lodash";
import { Canvas2DRef } from "./interface";

export const isCanvasSet = (canvasRef: Canvas2DRef): boolean =>
  !isEmpty(canvasRef);

export function setCanvasDimensions(canvasRef: Canvas2DRef): void {
  canvasRef.width = canvasRef.parentElement.offsetWidth;
  canvasRef.height = canvasRef.parentElement.offsetHeight;
  canvasRef.element.width = canvasRef.width;
  canvasRef.element.height = canvasRef.height;
}

export function setCanvas2D(
  canvasRef: Canvas2DRef,
  canvasId: string,
  parentElementId: string
): void {
  canvasRef.element = document.getElementById(canvasId) as HTMLCanvasElement;
  canvasRef.context = canvasRef.element.getContext(
    "2d"
  ) as CanvasRenderingContext2D;
  canvasRef.parentElement = document.getElementById(
    parentElementId
  ) as HTMLElement;
}

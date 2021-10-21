import { isEmpty, isNil } from "lodash";
import { Canvas2DRef, EmbeddedImageRect } from "./interface";

export const isCanvasSet = (canvasRef: Canvas2DRef): boolean =>
  !isEmpty(canvasRef);

export const isCanvasImageSet = (canvasRef: Canvas2DRef): boolean =>
  !isNil(canvasRef.image);

export function getEmbeddedImageRect(
  image: HTMLImageElement,
  canvasRef: Canvas2DRef
): EmbeddedImageRect {
  const { height: maxHeight, width: maxWidth } = canvasRef;
  const { height, width } = image;
  const isImageBigger = height > maxHeight || width > maxWidth;
  const scale = Math.min(maxWidth / width, maxHeight / height);
  const scaledHeight = isImageBigger ? height * scale : height;
  const scaledWidth = isImageBigger ? width * scale : width;
  const x = scaledWidth < maxWidth ? (maxWidth - scaledWidth) / 2 : 0;
  const y = scaledHeight < maxHeight ? (maxHeight - scaledHeight) / 2 : 0;

  return { x, y, width: scaledWidth, height: scaledHeight };
}

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

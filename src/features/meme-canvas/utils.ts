import { useLayoutEffect, useState } from "react";
import { isEmpty, isNil, throttle } from "lodash";
import { Canvas2DRef, CanvasRefSize, EmbeddedImageRect } from "./interface";
import { CANVAS_PARENT_ID } from "./constants";

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

export function setCanvasDimensions(
  canvasRef: Canvas2DRef,
  { width, height }: CanvasRefSize
): Canvas2DRef {
  canvasRef.width = width;
  canvasRef.height = height;
  canvasRef.element.width = width;
  canvasRef.element.height = height;

  return canvasRef;
}

export function setCanvas2D(
  canvasRef: Canvas2DRef,
  canvasId: string
): Canvas2DRef {
  canvasRef.element = document.getElementById(canvasId) as HTMLCanvasElement;
  canvasRef.context = canvasRef.element.getContext(
    "2d"
  ) as CanvasRenderingContext2D;

  return canvasRef;
}

export function useCanvasSize() {
  const [size, setSize] = useState({ height: 0, width: 0 });
  // i know this isn't great
  // https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      const canvas = document.getElementById(CANVAS_PARENT_ID);

      function updateSize() {
        const { offsetHeight: height, offsetWidth: width } = canvas;

        setSize({ height, width });
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () =>
        window.removeEventListener("resize", throttle(updateSize, 100));
    }, []);
  }

  return size;
}

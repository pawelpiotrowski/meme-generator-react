import { MemeImage } from "features/meme-images-list/interface";

type CanvasRef = {
  element: HTMLCanvasElement;
  parentElement: HTMLElement;
  width: number;
  height: number;
  image?: MemeImage;
};

export type Canvas2DRef = CanvasRef & {
  context: CanvasRenderingContext2D;
};

export type CanvasWebGLRef = CanvasRef & {
  context: WebGL2RenderingContext;
};

export type EmbeddedImageRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

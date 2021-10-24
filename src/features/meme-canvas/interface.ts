import { MemeImage } from "../../features/meme-images-list/interface";

type CanvasRef = {
  element: HTMLCanvasElement;
  image?: MemeImage;
} & CanvasRefSize;

export type CanvasRefSize = {
  height: number;
  width: number;
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
} & CanvasRefSize;

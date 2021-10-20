type CanvasRef = {
  element: HTMLCanvasElement;
  parentElement: HTMLElement;
  width: number;
  height: number;
  image?: ImageData;
};

export type Canvas2DRef = CanvasRef & {
  context: CanvasRenderingContext2D;
};

export type CanvasWebGLRef = CanvasRef & {
  context: WebGL2RenderingContext;
};

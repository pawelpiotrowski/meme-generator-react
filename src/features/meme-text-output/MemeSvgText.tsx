import { useEffect, useState } from "react";
import { useCanvasSize } from "../meme-canvas/utils";

type MemeSvgTextProps = {
  x: number;
  y: number;
  fontFamily: string;
  fontSize: number;
  text: string;
};

export const dataTestId = "meme-svg-text";

export default function MemeSvgText(props: MemeSvgTextProps) {
  const canvasSize = useCanvasSize();
  const [position, setPosition] = useState({
    x: props.x,
    y: props.y,
    active: false,
    offset: {
      x: 0,
      y: 0,
    },
  });

  function handlePointerDown(e: any) {
    const el = e.target as SVGTextElement;
    const bbox = el.getBoundingClientRect();
    const x = e.clientX - bbox.left;
    const y = e.clientY - bbox.top;
    el.setPointerCapture(e.pointerId);
    setPosition({
      ...position,
      active: true,
      offset: {
        x,
        y,
      },
    });
  }

  function handlePointerMove(e: any) {
    const bbox = (e.target as SVGTextElement).getBoundingClientRect();
    const x = e.clientX - bbox.left;
    const y = e.clientY - bbox.top;
    if (position.active) {
      setPosition({
        ...position,
        x: position.x - (position.offset.x - x),
        y: position.y - (position.offset.y - y),
      });
    }
  }

  function handlePointerUp(e: any) {
    setPosition({
      ...position,
      active: false,
    });
  }

  //   function onResize() {
  //     setPosition({
  //       x: props.x,
  //       y: props.y,
  //       active: false,
  //       offset: {
  //         x: 0,
  //         y: 0,
  //       },
  //     });
  //   }

  // will update canvasSize
  // useEffect(onResize, [canvasSize]);

  return (
    <text
      data-testid={dataTestId}
      x={position.x}
      y={position.y}
      fontFamily={props.fontFamily}
      fontSize={props.fontSize}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      {props.text}
    </text>
  );
}

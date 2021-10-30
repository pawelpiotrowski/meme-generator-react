import { useEffect, useState } from "react";
import { TextBox } from "../dashboard/dashboardSlice";
import { useCanvasSize } from "../meme-canvas/utils";
import styles from "./MemeSvg.module.css";

type MemeSvgTextProps = {
  x: number;
  y: number;
  fontFamily: string;
  fontSize: number;
  box: TextBox;
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

  const [rotation, setRotation] = useState({
    deg: 0,
    active: false,
    angle: 0,
    startAngle: 0,
    center: {
      x: 0,
      y: 0,
    },
    r2d: 180 / Math.PI,
  });

  function handlePointerDownRotation(e: any) {
    const el = e.target as SVGTSpanElement;
    const parent = el.parentNode as SVGTextElement;
    const { width, height, top, left } = parent.getBoundingClientRect();
    const center = {
      x: left + width / 2,
      y: top + height / 2,
    };
    const x = e.clientX - center.x;
    const y = e.clientY - center.y;
    const startAngle = rotation.r2d * Math.atan2(y, x);

    el.setPointerCapture(e.pointerId);

    setRotation({
      ...rotation,
      active: true,
      center,
      startAngle,
    });
  }

  function handlePointerMoveRotation(e: any) {
    if (!rotation.active) {
      return;
    }
    const x = e.clientX - rotation.center.x;
    const y = e.clientY - rotation.center.y;
    const d = rotation.r2d * Math.atan2(y, x);
    const deg = d - rotation.startAngle;

    setRotation({
      ...rotation,
      deg,
    });
  }

  function handlePointerDown(e: any) {
    e.preventDefault();

    const el = e.target as SVGTextElement;
    const isRotator = el.hasAttribute("data-rotator");

    if (isRotator) {
      handlePointerDownRotation(e);
      return;
    }
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
    e.preventDefault();

    const el = e.target as SVGTextElement;
    const isRotator = el.hasAttribute("data-rotator");

    if (isRotator) {
      handlePointerMoveRotation(e);
      return;
    }

    const bbox = el.getBoundingClientRect();
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
    e.preventDefault();

    const active = false;

    setRotation({
      ...rotation,
      active,
    });

    setPosition({
      ...position,
      active,
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
      className={styles.memeSvgText}
      textAnchor="middle"
      dominantBaseline="central"
      transform={`rotate(${rotation.deg}, ${position.x}, ${position.y})`}
    >
      {props.box.text}
      <tspan
        fontSize={props.fontSize / 2}
        data-rotator
        dy={props.fontSize / 3}
        opacity={position.active || rotation.active ? 1 : 0}
      >
        {" "}
        ↺
      </tspan>
    </text>
  );
}

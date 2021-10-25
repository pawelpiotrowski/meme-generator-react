type MemeSvgTextProps = {
  x: number;
  y: number;
  fontFamily: string;
  fontSize: number;
  text: string;
};

export const dataTestId = "meme-svg-text";

export default function MemeSvgText(props: MemeSvgTextProps) {
  return (
    <text
      data-testid={dataTestId}
      x={props.x}
      y={props.y}
      fontFamily={props.fontFamily}
      fontSize={props.fontSize}
    >
      {props.text}
    </text>
  );
}

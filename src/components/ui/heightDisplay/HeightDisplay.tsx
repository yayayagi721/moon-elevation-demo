type Props = {
  height: number;
};

function HeightDisplay(props: Props) {
  const roundHeight = (height: number) => {
    return Math.round(height);
  };
  return <span>{roundHeight(props.height)} m</span>;
}

export default HeightDisplay;

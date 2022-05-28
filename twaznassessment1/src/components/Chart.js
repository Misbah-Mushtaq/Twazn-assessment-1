export const Chart = ({ children, width, height }) => (
  <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
    {children}
  </svg>
);

export const Bar = ({ x, y, width, height }) => (
  <rect x={x} y={y} width={width} height={height} />
);

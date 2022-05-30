export default interface DataChart {
  color: string;
  data : DataChartCoordonate[];
}
export interface DataChartCoordonate {
  x: number;
  y: number;
}

export interface CreateChart {
  minX: number;
  minY :number;
  maxX :number;
  maxY :number;
  unitsPerTickX :number;
  unitsPerTickY :number;
}


export interface DataDrawXAxis{
  width :number;
  numXTicks :number;
  tickSize :number;
  font :string;
  maxX:number;
  padding:number;
}

export interface DataDrawYAxis{
  numYTicks :number;
  tickSize :number; font :string;
  maxY :number;
  padding:number;
}


export interface DataDrawInterLine{
  numYTicks :number;
  numXTicks :number;
  width  :number;
}

export interface DataGetLongestValueWidth{
  numYTicks :number;
  unitsPerTickY :number;
  maxY :number;
 font :string;
}

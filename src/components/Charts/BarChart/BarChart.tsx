import * as React from 'react';
import { ResponsiveBar } from '@nivo/bar';

import './BarChart.css';

interface BarChartProps {
  data: any[];
  names: any[];
}

const BarChart: React.FC<BarChartProps> = ({ data, names }: BarChartProps) => (
  <div className="block w-full ds-barchart">
    <ResponsiveBar
      data={data}
      groupMode="grouped"
      keys={names}
      indexBy="name"
      margin={{
        top: 25, right: 50, bottom: 120, left: 50,
      }}
      padding={0.25}
      enableLabel={false}
      colors={{
        scheme: 'blue_purple',
      }}
      borderWidth={0.25}
      borderColor="purple"
      axisRight={{
        tickSize: 5, tickPadding: 5, tickRotation: 0, legend: '', legendOffset: 0,
      }}
      layout="vertical"
      axisBottom={{
        tickRotation: -90,
        tickSize: 10,
      }}
    />
  </div>
);

export default BarChart;

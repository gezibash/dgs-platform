import * as React from 'react';
import { ResponsiveBar } from '@nivo/bar';

import "./style.css";

const BarChart: React.FC = () => {
  const [data, setData] = React.useState([])
  const [names, setNames] = React.useState([])

  React.useEffect(() => {
    fetch("http://localhost:3050/bar/")
      .then(res => res.json())
      .then(res => {
        setNames(res.names);
        setData(res.data);
      })
      .finally(() => {
        console.log(data);
      })
  }, [])

  return (
    <div className="block w-full ds-barchart">
      <ResponsiveBar
        data={data}
        groupMode="grouped"
        keys={names}
        indexBy="name"
        margin={{ top: 25, right: 50, bottom: 120, left: 50 }}
        padding={0.25}
        enableLabel={false}
        colors={{
          scheme: "blue_purple"
        }}
        borderWidth={0.25}
        borderColor={'purple'}  
        axisRight={{ tickSize: 5, tickPadding: 5, tickRotation: 0, legend: '', legendOffset: 0 }}
        layout="vertical"
        axisBottom={{
          tickRotation: -90,
          tickSize: 10
        }}
      />
    </div>
  )
}

export default BarChart;
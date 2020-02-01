import * as React from 'react';
import { ResponsiveBar } from '@nivo/bar';

import "./style.css";

const data = [
  {
    "country": "AD",
    "hot dog": 69,
    "burger": 161,
    "sandwich": 144,
    "kebab": 8,
    "fries": 87,
    "donut": 128,
  },
  {
    "country": "AE",
    "hot dog": 136,
    "hot dogColor": "hsl(329, 70%, 50%)",
    "burger": 126,
    "burgerColor": "hsl(68, 70%, 50%)",
    "sandwich": 52,
    "sandwichColor": "hsl(41, 70%, 50%)",
    "kebab": 140,
    "kebabColor": "hsl(202, 70%, 50%)",
    "fries": 158,
    "friesColor": "hsl(109, 70%, 50%)",
    "donut": 83,
    "donutColor": "hsl(338, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 14,
    "hot dogColor": "hsl(322, 70%, 50%)",
    "burger": 127,
    "burgerColor": "hsl(274, 70%, 50%)",
    "sandwich": 8,
    "sandwichColor": "hsl(87, 70%, 50%)",
    "kebab": 170,
    "kebabColor": "hsl(76, 70%, 50%)",
    "fries": 125,
    "friesColor": "hsl(284, 70%, 50%)",
    "donut": 120,
    "donutColor": "hsl(283, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 172,
    "hot dogColor": "hsl(91, 70%, 50%)",
    "burger": 64,
    "burgerColor": "hsl(179, 70%, 50%)",
    "sandwich": 186,
    "sandwichColor": "hsl(34, 70%, 50%)",
    "kebab": 144,
    "kebabColor": "hsl(114, 70%, 50%)",
    "fries": 190,
    "friesColor": "hsl(201, 70%, 50%)",
    "donut": 129,
    "donutColor": "hsl(315, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 34,
    "hot dogColor": "hsl(127, 70%, 50%)",
    "burger": 115,
    "burgerColor": "hsl(108, 70%, 50%)",
    "sandwich": 116,
    "sandwichColor": "hsl(255, 70%, 50%)",
    "kebab": 88,
    "kebabColor": "hsl(246, 70%, 50%)",
    "fries": 110,
    "friesColor": "hsl(118, 70%, 50%)",
    "donut": 22,
    "donutColor": "hsl(83, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 5,
    "hot dogColor": "hsl(158, 70%, 50%)",
    "burger": 83,
    "burgerColor": "hsl(104, 70%, 50%)",
    "sandwich": 60,
    "sandwichColor": "hsl(54, 70%, 50%)",
    "kebab": 78,
    "kebabColor": "hsl(291, 70%, 50%)",
    "fries": 59,
    "friesColor": "hsl(144, 70%, 50%)",
    "donut": 134,
    "donutColor": "hsl(297, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 136,
    "hot dogColor": "hsl(261, 70%, 50%)",
    "burger": 123,
    "burgerColor": "hsl(180, 70%, 50%)",
    "sandwich": 198,
    "sandwichColor": "hsl(304, 70%, 50%)",
    "kebab": 28,
    "kebabColor": "hsl(27, 70%, 50%)",
    "fries": 150,
    "friesColor": "hsl(145, 70%, 50%)",
    "donut": 168,
    "donutColor": "hsl(158, 70%, 50%)"
  }
]

const BarChart: React.FC = () => {
  return (
    <div className="block w-full ds-barchart shadow-md border border-purple-300">
      <ResponsiveBar 
        data={data}
        groupMode="grouped"
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="country"
        margin={{ top: 25, right: 25, bottom: 50, left: 50 }}
        padding={0.25}
        enableLabel={false}
        colors={{
          scheme: "nivo"
        }}
      />
    </div>
  )
}

export default BarChart;
import * as React from 'react';
import { ResponsiveBarCanvas } from '@nivo/bar';

import './BarChart.css';
import Toggle from '../../Shared/Toggle/Toggle';

import BarchartFilters from './Filters/Filters';

interface BarChartProps {
  data: any[];
  names: any[];
  editMode: boolean;
  filterMode: boolean;
}

type GroupedMode = 'grouped' | 'stacked' | undefined;

const BarChart: React.FC<BarChartProps> = ({
  data, names, editMode, filterMode,
}: BarChartProps) => {
  const [groupedMode, setGroupedMode] = React.useState('grouped');
  const [isVertical, setVertical] = React.useState(true);

  const onClickGrouped: Function = () => {
    switch (groupedMode) {
      case 'grouped':
        setGroupedMode('stacked');
        break;
      case 'stacked':
        setGroupedMode('grouped');
        break;
      default:
        setGroupedMode('grouped');
    }
  };

  return (
    <>
      <div className={`block animated w-full px-5 ${filterMode ? 'fadeInDown' : 'hidden'} ds-settings pr-5`}>
        <BarchartFilters />
      </div>
      <div className="flex flex-row">
        <div className={`block animated ${editMode ? 'w-3/4' : 'w-full'} ds-barchart`}>
          <ResponsiveBarCanvas
            data={data}
            groupMode={groupedMode as GroupedMode}
            keys={names}
            indexBy="name"
            margin={{
              top: 25, right: 50, bottom: isVertical ? 150 : 50, left: 50,
            }}
            padding={0.25}
            enableLabel={false}
            enableGridX={false}
            enableGridY
            colors={{
              scheme: 'blue_purple',
            }}
            borderWidth={0.25}
            borderColor="purple"
            axisRight={isVertical ? {
              tickSize: 5, tickPadding: 5, tickRotation: 0, legend: '', legendOffset: 0,
            } : null}
            layout={isVertical ? 'vertical' : 'horizontal'}
            axisBottom={{
              tickRotation: -90,
              tickSize: 10,
            }}
            axisLeft={isVertical ? {} : null}
          />
        </div>
        <div className={`flex flex-col animated fadeInRight ${editMode ? 'w-1/4' : 'hidden'} ds-settings pr-5`}>
          <h2 className="">Chart Settings</h2>
          <hr className="my-2 mb-5" />
          <Toggle text="Stacked" clickFunction={() => onClickGrouped()} />
          <Toggle text="Horizontal Chart" clickFunction={() => setVertical(!isVertical)} />
        </div>
      </div>
    </>
  );
};

export default BarChart;

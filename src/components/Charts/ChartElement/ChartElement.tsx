import React from 'react';

import './ChartElement.css';

import SettingsModal from './SettingsModal/SettingsModal';
import BarChart from '../BarChart/BarChart';

interface IChartData {
  names: string[];
  data: any[];
}

const ChartElement: React.FC = () => {
  const initialData: IChartData = { names: [], data: [] };
  const [data, setData] = React.useState(initialData);
  const [hiddenSettings, setHiddenSettings] = React.useState(true);

  const fetchData = () => {
    fetch('http://localhost:3050/bar')
      .then((result) => result.json())
      .then((result) => {
        setData(result);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full shadow-md border border-purple-300 py-5">
      <div className="flex items-center flex-row mx-5 my-2">
        <h4 className="flex-grow text-purple-200">Barchart</h4>
        <button onClick={() => setHiddenSettings(!hiddenSettings)} type="button" className="flex items-center p-1 text-purple-300 focus:outline-none hover:text-purple-900">
          <i className="material-icons">settings</i>
        </button>
      </div>
      <div className="flex w-full">
        <BarChart data={data.data} names={data.names} />
      </div>
      <SettingsModal setHidden={setHiddenSettings} hidden={hiddenSettings} />
    </div>
  );
};

export default ChartElement;

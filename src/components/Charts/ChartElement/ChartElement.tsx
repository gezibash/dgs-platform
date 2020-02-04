import React from 'react';

import './ChartElement.css';

import BarChart from '../BarChart/BarChart';

interface IChartData {
  names: string[];
  data: any[];
}

const ChartElement: React.FC = () => {
  const initialData: IChartData = { names: [], data: [] };
  const [data, setData] = React.useState(initialData);
  const [editMode, setEditMode] = React.useState(true);
  const [filterMode, setFilterMode] = React.useState(false);

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
    <div className={`p-1 ${editMode ? 'being-edited' : ''}`}>
      <div className="flex flex-col w-full shadow-md border border-purple-300 bg-white py-5">
        <div className="flex content-end justify-end flex-grow items-center flex-row mx-5 my-2">
          <button
            onClick={() => setFilterMode(!filterMode)}
            type="button"
            className="flex items-center p-1 text-purple-300 focus:outline-none hover:text-purple-900"
          >
            <i className="material-icons">filter_list</i>
          </button>
          <button
            onClick={() => setEditMode(!editMode)}
            type="button"
            className="flex items-center p-1 text-purple-300 focus:outline-none hover:text-purple-900"
          >
            <i className="material-icons">settings</i>
          </button>
        </div>
        <div className="flex flex-col w-full">
          <BarChart
            data={data.data}
            names={data.names}
            editMode={editMode}
            filterMode={filterMode}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartElement;

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
  const [editMode, setEditMode] = React.useState(false);
  const [filterMode, setFilterMode] = React.useState(true);

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
    <div className={`p-1 ${editMode || filterMode ? 'being-edited' : ''}`}>
      <div className="flex flex-col w-full py-5 bg-white border border-purple-300 shadow-md">
        <div className="flex-row items-center content-end justify-end flex-grow hidden mx-5 my-2 sm:flex">
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

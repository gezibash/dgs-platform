import React from 'react';

import BarChart from "../BarChart";

const ChartElement: React.FC = () => {
  return (
    <div className="flex flex-col w-full shadow-md border border-purple-300 py-5">
      <div className="flex items-center flex-row mx-5 my-2">
        <h4 className="flex-grow text-purple-200">Barchart</h4>
        <button className="flex items-center p-1 text-purple-300 focus:outline-none hover:text-purple-900">
          <i className="material-icons">settings</i>
        </button>
      </div>
      <div className="flex w-full">
        <BarChart />
      </div>
    </div>
  )
}

export default ChartElement;
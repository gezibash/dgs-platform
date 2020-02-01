import React from 'react'

import "./style.css";

import Sidebar from "../Sidebar";
import BarChart from "../BarChart";

const Content: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="hidden lg:flex w-1/5">
        <Sidebar />
      </div>
      <div className="flex flex-grow p-10">
        <BarChart />
      </div>
    </div>
  )
}

export default Content;
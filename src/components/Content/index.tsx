import React from 'react'

import "./style.css";

import Sidebar from "../Sidebar";
import ChartElement from "../Charts/ChartElement";

const Content: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="hidden lg:flex w-1/5">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow p-10 text-left ds-notebook-content">
        <h3 className="my-3">Header 1</h3>
        <ChartElement />
      </div>
    </div>
  )
}

export default Content;
import React from 'react';

import './Content.css';

import Sidebar from '../Sidebar/Sidebar';
import ChartElement from '../Charts/ChartElement/ChartElement';

const Content: React.FC = () => {
  const [sidebarWidth, setSidebarWidth] = React.useState(true);

  const changeSidebarWidth = () => {
    setSidebarWidth(!sidebarWidth);
  };

  return (
    <div className="flex flex-row">
      <div className={`sidebar hidden lg:flex ${sidebarWidth ? 'w-2/12' : 'w-1/12'}`}>
        <Sidebar onClickButton={changeSidebarWidth} sidebarFullWidth={sidebarWidth} />
      </div>
      <div className="flex flex-col w-full sm:w-10/12 mx-auto p-10 text-left ds-notebook-content">
        <h3 className="my-3">Header 1</h3>
        <ChartElement />
      </div>
    </div>
  );
};

export default Content;

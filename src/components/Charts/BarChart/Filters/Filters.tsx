import React from 'react';

import './Filters.css';
import Filter from './Filter';


const BarchartFilters: React.FC = () => {
  let keystate = 0;
  const [filters, setFilters] = React.useState([1, 2, 3]);
  return (
    <>
      <h2>Filters</h2>
      <hr className="my-2 mb-3" />
      <div className={`flex flex-row ${filters.length > 4 ? 'overflow-x-scroll' : ''} py-3`}>
        {
          filters.map((filter, index) => (
            <Filter key={`barfil-${keystate++}`} parentKey={index} closeFunction={(idx: number) => { setFilters(filters.filter((f, i) => i !== idx)); }} />
          ))
        }
      </div>
    </>
  );
};

export default BarchartFilters;

import React from 'react';

import './Filters.css';
import Filter from './Filter';

const BarchartFilters: React.FC = () => {
  const [filters, setFilters] = React.useState([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
  return (
    <>
      <h2>Filters</h2>
      <hr className="my-2 mb-3" />
      <div className={`flex flex-row ${filters.length > 10 ? 'overflow-x-scroll' : ''} py-5`}>
        {
          filters.map((filter) => (
            <Filter title={filter} />
          ))
        }
      </div>
    </>
  );
};

export default BarchartFilters;

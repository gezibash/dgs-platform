import React from 'react';

import './Filters.css';
import uuid from 'uuid';
import Filter from './Filter';


interface IFilter {
  filterId: string;
  filterType: 'filter-by' | 'group-by' | 'none';
  filterVariable?: string;
  filterValue?: string;
}

const BarchartFilters: React.FC = () => {
  const initialFilter: IFilter = {
    filterId: uuid.v4(),
    filterType: 'none',
  };

  const [filters, setFilters] = React.useState([initialFilter]);

  const createNewFilter = () => {
    setFilters([...filters, initialFilter]);
  };

  const removeFilter = (idx: number) => {
    console.log(`Removing filter ${idx}`);
    console.table(filters);
    setFilters(filters.filter((val, index) => index !== idx));
  };

  return (
    <>
      <h2>Filters</h2>
      <hr className="my-2 mb-3" />
      <div className="flex flex-row flex-wrap py-3">
        {
          filters.map((filter) => (
            <Filter
              filterType={filter.filterType}
              filterVariable={filter.filterVariable}
              filterValue={filter.filterValue}
              key={filter.filterId}
              parentKey={filter.filterId}
              closeFunction={(idx: number) => removeFilter(idx)}
            />
          ))
        }
        <div className="relative flex flex-row items-center p-5 my-5 mr-2 border border-gray-200">
          <button type="button" className="flex items-center w-1/2 text-purple-200" onClick={() => createNewFilter()}>
            <i className="material-icons">add</i>
          </button>
        </div>
      </div>
    </>
  );
};

export default BarchartFilters;

import React from 'react';

import './Filters.css';
import Select from '../../../Shared/Select/Select';

interface FilterProps {
  filterType: 'filter-by' | 'group-by' | 'none';
  filterVariable?: string;
  filterValue?: string;
  parentKey?: string;
  closeFunction: Function;
}

const BarchartFilters: React.FC<FilterProps> = ({
  filterType, filterValue, filterVariable, parentKey, closeFunction,
}: FilterProps) => (
  <div className="animated zoomIn faster flex relative flex-row items-center border border-gray-200 mr-2 p-5 my-5" id={parentKey}>
    <div className="flex flex-col my-3">
      <Select
        options={[
          {
            optionId: 'none',
            optionText: '',
            selected: false,
          },
          {
            optionId: 'filter-by',
            optionText: 'Filter by',
            selected: true,
          },
          {
            optionId: 'group-by',
            optionText: 'Group by',
            selected: false,
          },
        ]}
        parentKey={parentKey}
      />
    </div>
    <div className="absolute right-0 top-0 flex items-center justify-end">
      <button type="button" className="flex text-purple-300" onClick={() => closeFunction(parentKey)}>
        <i className="material-icons">close</i>
      </button>
    </div>
  </div>
);

export default BarchartFilters;

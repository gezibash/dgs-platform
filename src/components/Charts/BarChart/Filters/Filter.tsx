import React from 'react';

import './Filters.css';
import Select from '../../../Shared/Select/Select';

interface FilterProps {
  parentKey?: number;
  closeFunction: Function;
}

const BarchartFilters: React.FC<FilterProps> = ({ parentKey, closeFunction }: FilterProps) => (
  <div className="flex relative flex-row items-center border border-gray-200 mr-2 p-5" id={parentKey?.toString()}>
    <div className="flex flex-col my-3">
      <Select
        options={[
          {
            optionId: 'filter-by',
            optionText: 'Filter by',
          },
          {
            optionId: 'group-by',
            optionText: 'Group by',
          },
        ]}
        parentKey={parentKey}
      />
      <Select
        options={[
          {
            optionId: 'filter-by',
            optionText: 'Filter by',
          },
          {
            optionId: 'group-by',
            optionText: 'Group by',
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

import React from 'react';

import './Filters.css';

interface FilterProps {
  title: number;
}

const BarchartFilters: React.FC<FilterProps> = ({ title }: FilterProps) => (
  <div className="block w-1/12 border border-gray-200 mr-2 p-5">
    <h4>
      Filter
      {' '}
      {title}
    </h4>
  </div>
);

export default BarchartFilters;

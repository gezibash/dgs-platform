import React from 'react';

import './Select.css';

interface ISelectOptions {
  optionText: string;
  optionId: string;
  selected: boolean;
}

interface SelectProps {
  parentKey?: string;
  options: ISelectOptions[];
}

const Select: React.FC<SelectProps> = ({ options, parentKey }: SelectProps) => {
  let keystate = 0;
  return (
    <div className="block relative w-full my-2">
      <select onChange={(e) => { console.log(e.target.value); }} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
        {
        options.map((option) => (
          <option defaultValue="" value={option.optionText} id={option.optionId} key={`${parentKey}-${keystate++}`}>{option.optionText}</option>
        ))
      }
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </div>
    </div>
  );
};

export default Select;

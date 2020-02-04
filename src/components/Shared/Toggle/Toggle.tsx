import React from 'react';

import './Toggle.css';

interface ToggleProps {
  text: string;
  clickFunction: Function;
}

const Toggle: React.FC<ToggleProps> = ({ text, clickFunction }: ToggleProps) => (
  <div className="flex items-center justify-left w-full mb-2">
    <label
      htmlFor={text}
      className="flex items-center cursor-pointer"
    >
      <div className="relative">
        <input role="button" id={text} type="checkbox" className="hidden" onClick={() => clickFunction()} />
        <div
          className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
        />
        <div
          className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
        />
      </div>
      <div
        className="ml-3 text-purple-900 font-medium"
      >
        {text}
      </div>
    </label>

  </div>
);

export default Toggle;

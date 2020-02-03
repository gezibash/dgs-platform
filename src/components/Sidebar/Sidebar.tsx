import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  onClickButton: Function;
  sidebarFullWidth: boolean;
}

const Sidebar : React.FC<SidebarProps> = ({ onClickButton, sidebarFullWidth }: SidebarProps) => (
  <div className="flex flex-col w-full h-screen shadow-md border border-purple-300 p-5 ds-sidebar">
    <div className="flex w-full justify-between items-center">
      <h3 className="sm:block xl:hidden">ToC</h3>
      <h3 className="hidden xl:block">{sidebarFullWidth ? 'Table of Contents' : 'ToC'}</h3>
      <button onClick={() => onClickButton()} type="button" className="flex p-1 items-center focus:outline-none">
        <i className="material-icons">{sidebarFullWidth ? 'skip_previous' : 'skip_next'}</i>
      </button>
    </div>
    <hr className="my-5" />
    <div className="flex ds-toc">
      <h4>Header 1</h4>
    </div>
  </div>
);

export default Sidebar;

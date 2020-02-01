import React from 'react'
import "./style.css";

const Sidebar : React.FC = () => {
  return (
    <div className="flex flex-col w-full h-screen shadow-md border border-purple-300 p-5 ds-sidebar">
      <div className="flex w-full justify-between items-center">
        <h3 className="sm:block xl:hidden">ToC</h3>
        <h3 className="hidden xl:block">Table of Contents</h3>
        <button className="flex p-1 items-center focus:outline-none">
          <i className="material-icons">menu_open</i>
        </button>
      </div>
      <hr className="my-5" />
      <div className="flex ds-toc">
        <h4>Header 1</h4>
      </div>
    </div>
  )
}

export default Sidebar;
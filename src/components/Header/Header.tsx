import React from 'react';
import './Header.css';

interface ILink {
  linkName: string;
  linkIcon?: string;
  css?: string;
  isActive: boolean;
}

const buttons: ILink[] = [{
  linkName: 'Notebook',
  linkIcon: 'dashboard',
  isActive: true,
}, {
  linkName: 'Datasets',
  linkIcon: 'dns',
  isActive: false,
}];

const Header : React.FC = () => {
  const [links] = React.useState(buttons);

  return (
    <div className="flex items-center justify-between flex-wrap p-4 border-indigo-300 shadow-sm ds-header">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <h2 className="ds-platform-name">
          Dig Stories
          {' '}
          <strong>Platform</strong>
        </h2>
      </div>
      <nav className="hidden sm:flex flex-grow items-center text-white ds-nav">
        {links.map((link) => (
          <button
            type="button"
            key={link.linkName}
            className={`${link.isActive ? 'border border-white-1 ' : ''
            }flex items-center p-1 px-2 mr-2 hover:bg-purple-900 rounded focus:outline-none focus:border-white ${
              link.css}`}
          >
            <i className="mr-3 material-icons">{link.linkIcon}</i>
            <h4 className="mr-2">{link.linkName}</h4>
          </button>
        ))}
      </nav>
      <div className="flex items-center text-white">
        <button type="button" className="flex items-center hover:bg-purple-900 focus:outline-none focus:border-white">
          <i className="material-icons">apps</i>
        </button>
      </div>
    </div>
  );
};

export default Header;

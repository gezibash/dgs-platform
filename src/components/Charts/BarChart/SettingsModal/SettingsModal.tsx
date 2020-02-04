import React from 'react';

import './SettingsModal.css';

interface SettingsModalProps {
  hidden: boolean;
  setHidden: Function;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ hidden, setHidden }: SettingsModalProps) => (
  <>
    <div className={`modal ${hidden ? 'opacity-0 pointer-events-none' : ''} fixed w-full h-full top-0 left-0 flex items-center justify-center`}>
      <div className="modal-overlay absolute w-full h-full bg-gray-900 flex items-center justify-center">
        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6 bg-white">
            <div className="flex justify-between items-center bg-white">
              <h3 className="flex w-full">Settings</h3>
              <button type="button" className="flex items-center flex-grow focus:outline-none text-purple-300" onClick={() => setHidden(!hidden)}>
                <i className="material-icons">close</i>
              </button>
              <hr className="mb-5 border border-gray-200" />
            </div>
            <div className="flex flex-grow flex-col">
              <div className="flex flex-row">
                <div>Toggle button</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default SettingsModal;

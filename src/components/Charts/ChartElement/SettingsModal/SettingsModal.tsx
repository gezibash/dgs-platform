import React from 'react';

import './SettingsModal.css';

interface SettingsModalProps {
  hidden: boolean;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ hidden }: SettingsModalProps) => (
  <div className={`modal ${hidden ? 'opacity-0 pointer-events-none' : ''} fixed w-full h-full top-0 left-0 flex items-center justify-center`}>
    <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50">
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <h3>Modal</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SettingsModal;

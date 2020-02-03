import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Content from './components/Content/Content';

const App: React.FC = () => (
  <div className="App">
    <Header />
    <Content />
  </div>
);

export default App;

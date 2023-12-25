import React from 'react';
import Tabs from './components/Showw';
import "./App.css";


const App = () => {
  const tabs = [
    { label: 'Tab 1', content: 'Tab 1 content is showing here' },
    { label: 'Tab 2', content: 'Tab 2 content is showing here' },
    { label: 'Tab 3', content: 'Tab 3 content is showing here' },
  ];

  return (
    <div className='dojo'>
      <h1>Tabs</h1>
      <Tabs items={tabs} className='raa' />
    </div>
  );
};

export default App;
import React from 'react';
import Dashboard from './Dashboard';
import Display from './Display';
import { DashboardProvider } from './DashboardContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <DashboardProvider>
        <Dashboard />
        <Display />
      </DashboardProvider>
    </div>
  );
}

export default App;

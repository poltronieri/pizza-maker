import React from 'react';
import './App.css';
import Routes from './routes';

function App() {
  return (
    <div className="container-fluid px-0 py-0">
      <header className="header mb-3">
        <h1 className="text-light text-center">PIZZA MAKER !</h1>
      </header>
      <Routes />
    </div>
  );
}

export default App;

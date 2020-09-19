import React from 'react';
import './App.css';
import Modal from './modal';

const Limits = {
  MIN: 0,
  MAX: 10,
};

const App = (props) => {  
  return (
    <div className="App">      
      <Modal limits={Limits} buttonLabel={`Widget`}/>
    </div>
  );
};

export default App;

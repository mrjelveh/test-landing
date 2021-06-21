
import React from 'react';
import './App.css'; 
import  CustomButton  from './components/custom-button/custom-button.component';



function App() {
  const printText = () => {
    alert('function called')
  }
  return (
    <div className="App">
      <button >Click Me</button>
      <CustomButton btnStyle="primary" firstButton={printText} text="hi"/>
    </div>
  );
}

export default App; 




import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hallo from './components/Hallo'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">

    {/* <Message /> */}
    {/* <Counter /> */}
     {/* <Greet name="jiwo" >
       <p>This is children props</p>
     </Greet>
     <Welcome name="mantap" /> */}
     {/* <Hallo/> */}
     {/* <Welcome name="jiwo" heroName="SpiderMan"></Welcome>
     <Welcome name="duduy" heroName="Moana"></Welcome> */}
     {/* <FunctionClick /> */}
     {/* <ClassClick /> */}
     <EventBind />
    </div>
  );
}

export default App;

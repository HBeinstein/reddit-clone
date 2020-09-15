import React from 'react';
import logo from './logo.svg';
import './App.css';
import ForumControl from "./ForumControl";
import Header from "./Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ForumControl />
    </React.Fragment>  
  );
}

export default App;
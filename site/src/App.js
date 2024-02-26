/* eslint-disable */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import {
  Routes, Route,
} from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Home';

function App() {
  const [currPage, setCurrPage] = useState('home');


  // const [title, setTitle] = useState("Sylvia Zhao");
  
  // useEffect(() => {
  //   // This will run when the page first loads and whenever the title changes
  //   document.title = title;
  // }, [title]);

  return (
    <div className="App">
      {/* <Scroll> */}
        <Routes>
          <Route exact path="/" element={<Home currPage={currPage} setCurrPage={setCurrPage}/>} />
        </Routes>
      {/* </Scroll> */}
    </div>
  );
}

export default App;

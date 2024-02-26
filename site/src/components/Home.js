/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

import '../assets/index.css';
import Hamburger from '../assets/hamburger.svg';
import Close from '../assets/close.svg';
import Leaf from '../assets/leaf.png';
import LeafSVG from '../assets/leaf.svg';

function Home({ currPage, setCurrPage }) {
    useEffect(() => {
        setCurrPage('work');
        document.title = 'Sylvia Zhao';
        window.scrollTo(0, 0);
        }, []);

  return (
    <div>
        <NavBar />
        <div className="grid-container">

        </div>
    </div>

  );
}

export default Home;

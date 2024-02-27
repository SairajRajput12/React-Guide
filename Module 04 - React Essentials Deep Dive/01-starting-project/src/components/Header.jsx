import React from "react";
import reactImg from '../assets/react-core-concepts.png'; 
import './Header.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max) {
  // In Lecture 41 they have taught the dynamic content genration. 
  return Math.floor(Math.random() * (max + 1));
}

export default function Header(){ 
  return(
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>Module 4: React Essentials (Deep Dive)</h1>
        <p>
          {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}


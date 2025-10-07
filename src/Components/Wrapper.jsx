import React from 'react';
import { Navbar } from './NavBar';
import {MainCenterBlock} from './MainCenterBlock';
import { SideBar } from './Sidebar';
import { TrackBar } from './TrackBar';

export function Wrapper() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
           <Navbar/>
           < MainCenterBlock />
          < SideBar />
        </main>
        <TrackBar/>
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default Wrapper;
import React from 'react';
import Navbar from './Navbar';

import './header.css';

class Header extends React.Component {

  render() {
    return (
      <header className="Header">
        <div className="container">
          <nav className="navbar">
           <div className="navbar--logo-holder">
             <h1>MyBackoffice</h1>
           </div>
           <div className="Menu-Action">
             <Navbar />
           </div>
         </nav>
       </div>
      </header>
    );
  }

}

export default Header;

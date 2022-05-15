import React from 'react';
import IconPlus from '../assets/icon-plus.png';
import { NavLink } from "react-router-dom";

class ButtonAddUser extends React.Component {

  render() {
    return (
      <NavLink to="/addUser" exact activeClassName="active">
         <button>
          <img src={IconPlus} alt="icon Plus"/> Ajouter un utilisateur
        </button>
      </NavLink>
    );
  }
}
// Render
export default ButtonAddUser;

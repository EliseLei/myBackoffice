import React, { Component } from 'react';
import './userDetail.css';
import { NavLink } from "react-router-dom";

class UserDetailLocal extends Component {

/*  constructor(props) {
    super(props);
    this.myUser();
  } */

/*  myUser() {
    const id = this.props.match.params.id;
    const user = this.props.usersLocal.find(function(element){
      console.log(element);
       if(element == id) {
          return true;
       }
       else {
          return false;
       }
    })
    console.log(user);
    return user;
  */

  render() {
    return (
      <div className="UserDetail">
        <div className="container">
        <NavLink to="/" exact activeClassName="active">
          <p>Revenir à la liste des utilisateurs</p>
        </NavLink>
          <div className="UserDetail-container">
            <div className="UserDetail-inner">
              Utilisateur n°
          
              {this.props.match.params.id}
              <div className="UserDetail-avatar">
                <img alt="avatar" key={this.props.usersLocal.avatar} src={this.props.usersLocal[this.props.match.params.id].avatar} />
              </div>

              <p>
                <strong> {this.props.usersLocal[this.props.match.params.id].firstname}</strong>
                <strong> {this.props.usersLocal[this.props.match.params.id].lastname}</strong>
              </p>

              <p>{this.props.usersLocal[this.props.match.params.id].email}</p>
              <div className="UserDetail-action" key={this.props.match.params.id}>
                  <NavLink className="button" to={`/EditUserLocal/${this.props.match.params.id}`}>Modifier les infos</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserDetailLocal;

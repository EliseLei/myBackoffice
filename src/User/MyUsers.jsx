import React, { Component } from 'react';
import MyUser from '../User/MyUser';
import './myUsers.css';


class MyUsers extends Component {

  renderCountPost() {
    return this.props.users.length;
  }

  renderUsers() {
    return this.props.users.map((user, indexOfUser) =>  {
      return (
        <div key={indexOfUser}>
          <MyUser indexOfUser={indexOfUser} user={user} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="MyUsers">
        <div className="MyUsers-User">
          <p className="MyUsers-Compter">Utilisateur(s) dans l'api <span>({this.renderCountPost()})</span> </p>
          {this.renderUsers()}
        </div>
      </div>
    );
  }
}

export default MyUsers;

import React, { Component } from 'react';
import MyUserLocal from '../UserLocal/MyUserLocal';
import '../User/myUsers.css';


class MyUsersLocal extends Component {

  renderCountPost() {
    return this.props.usersLocal.length;
  }

  renderUsers() {
    return this.props.usersLocal.map((user, indexOfUser) =>  {
      return (
        <div key={indexOfUser}>
        <MyUserLocal deleteUser={this.props.deleteUser} id={indexOfUser} indexOfUser={indexOfUser} user={user} />
    {/*   <MyUserLocal deleteUser={this.props.deleteUser} id={user.idUser} indexOfUser={user.idUser} user={user} /> */}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="MyUsers">
        <div className="MyUsers-User">
          <p className="MyUsers-Compter">Utilisateur(s) ajouté(s) <span>({this.renderCountPost()})</span></p>
          {this.renderUsers()}
        </div>
      </div>
    );
  }
}

export default MyUsersLocal;

import React, { Component } from 'react';
import MyUsers from '../User/MyUsers';
import ButtonAddUser from '../Components/ButtonAddUser';
import MyUsersLocal from '../UserLocal/MyUsersLocal';

class ListUsers extends Component {
  constructor(props) {
      super(props);
      this.state = {
        users: []
      }
     this.getUsersApi();
  }

  async getUsersApi() {
    // ici on appelle l'api sur la route où on veut récupérer les données
    const res = await fetch("https://reqres.in/api/users/");
    // on formatte la donnée en json
    const json = await res.json();
    // on remplace users dans notre state qui avant valait [] et qui maintenant contiendra la donnée issue de l'API
    this.setState({
        users: json.data,
    });
  }

  render() {
    return (
      <div className="ListUsers">
        <div className="container">
         <ButtonAddUser />

         {this.state.users  ?
           <MyUsers users={this.state.users}/>
          : ""
         }

         <MyUsersLocal deleteUser={this.props.deleteUser} usersLocal={this.props.usersLocal} />

         <ButtonAddUser />
        </div>
      </div>
    );
  }
}
export default ListUsers;

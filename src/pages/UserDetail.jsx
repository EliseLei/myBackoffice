import React, { Component } from 'react';
import './userDetail.css';
import { NavLink } from "react-router-dom";

class UserDetail extends Component {

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
        users: json.data[this.props.match.params.id -1],
    });

  }

  render() {
    return (
      <div className="UserDetail">
        <div className="container">
        <NavLink to="/" exact activeClassName="active">
          <p>Revenir à la liste des utilisateurs</p>
        </NavLink>
          <div className="UserDetail-container">
            <div className="UserDetail-inner" key={this.state.users.id}>
              Utilisateur n°{this.state.users.id}
              <div className="UserDetail-avatar">
                <img alt="avatar" key={this.state.users.avatar} src={this.state.users.avatar} />
              </div>
              <p>
                <strong>{this.state.users.first_name} </strong>
                <strong>{this.state.users.last_name}</strong>
              </p>
              <p>{this.state.users.email}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserDetail;

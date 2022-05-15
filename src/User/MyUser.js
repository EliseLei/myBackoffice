import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './myUser.css';

class MyUser extends Component {

  render() {
    return (
      <div className="MyUser" key={this.props.user.id}>
        <div className="MyUser-container">
          <div className="MyUser-info">
            n°{this.props.user.id}
            <div className="MyUser-avatar">
              <img alt="avatar" key={this.props.user.avatar} src={this.props.user.avatar} />
            </div>
            <div className="MyUser-nameemail">
              <strong>{this.props.user.first_name}</strong>
              {this.props.user.email}
            </div>
          </div>
          <div className="MyUser-action">
             <div key={this.props.user.id}>
              <NavLink className="button-showdetail" to={`/detailUser/${this.props.user.id}`}>Voir le détail</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MyUser;

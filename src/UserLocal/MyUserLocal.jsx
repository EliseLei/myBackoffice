import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../User/myUser.css';
import '../UserLocal/dropdown.css';


class MyUserLocal extends Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(event){
    event.preventDefault();
    this.props.deleteUser(this.props.indexOfUser);
  }

  render() {
    return (
      <div className="MyUser MyUserLocal" id={this.props.indexOfUser}>
        <div className="MyUser-container">
          <div className="MyUser-info">
            n°{this.props.indexOfUser}

            <div className="MyUser-avatar">
              <img alt="avatar" key={this.props.user.avatar} src={this.props.user.avatar} />
            </div>

            <div className="MyUser-nameemail">
              <strong>{this.props.user.firstname}</strong>
              {this.props.user.email}
            </div>
          </div>
          <div className="MyUser-action">
             <div key={this.props.indexOfUser}>
              <NavLink className="button-showdetail" to={`/detailUserLocal/${this.props.indexOfUser}`}>Voir le détail</NavLink>
            </div>

            <div className="dropdown">
              <span><svg aria-label="Plus d’options" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></span>
              <div className="dropdown-content">
                <span onClick={this.deleteUser}>
                  Supprimer
                </span>
              </div>
            </div>
            <span className="button-delete" onClick={this.deleteUser}>
              x
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default MyUserLocal;

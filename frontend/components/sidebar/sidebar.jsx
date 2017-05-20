import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.signout();
  }

  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar-top">
          <img
            src="http://res.cloudinary.com/dkuqs8yz1/image/upload/v1495083594/header-logo.png"
            alt="Whenevernote logo" />

          <Link
            to="/note/new"
            title="NEW NOTE"
            id="new-note"
            className="circle-button">+</Link>
        </div>

        <div className="sidebar-bot">
        <Link
          to="/"
          title="SIGN OUT"
          id="signout"
          className="circle-button"
          onClick={this.handleClick}><i class="fa fa-sign-out" aria-hidden="true"></i></Link>
      </div>
      </aside>
    );
  }
}

export default Sidebar;


// <button onClick={this.handleClick}>Sign Out</button>

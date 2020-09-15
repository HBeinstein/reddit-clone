import React from "react";
import PropTypes from "prop-types";

function Header(props){
  return(
    <React.Fragment>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <button className="navbar-brand btn" onClick = {props.onHomeButtonClick}>Home</button>
        </div>
        <form className="navbar-form navbar-right" action="/action!">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </nav>
    </React.Fragment>
  );
}

Header.propTypes = {
  onHomeButtonClick: PropTypes.func
}

export default Header;
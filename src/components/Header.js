import React from "react";

function Header(props){
  return(
    <React.Fragment>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <button className="navbar-brand btn" onClick = {props.firstButtonFunc}>{props.firstButtonText}</button>
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

Header.Proptypes = {
  firstButtonFunc: PropTypes.func,
  firstButtonText: PropTypes.string
}

export default Header;
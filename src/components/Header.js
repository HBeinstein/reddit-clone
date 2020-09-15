import React from "react";

function Header(){
  return(
    <React.Fragment>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Working Title</a>
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

export default Header;
"use strict";

import React from "react";

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="pure-menu pure-menu-horizontal">
          <a href="#" className="pure-menu-heading pure-menu-link">SABUN</a>
          <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">News</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Sports</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Finance</a></li>
          </ul>
        </div>
      </header>
    );
  }
}

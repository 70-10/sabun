"use strict";

import React from "react";
import Header from "./HeaderComponent.jsx";

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

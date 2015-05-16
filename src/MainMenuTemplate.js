"use strict";

import MenuTemplate from "./MenuTemplate";

export default class MainMenuTemplate extends MenuTemplate {
  constructor(label, submenu) {
    super(label);
    this.submenu = submenu;
  }
}

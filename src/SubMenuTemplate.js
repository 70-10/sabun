"use strict";

import MenuTemplate from "./MenuTemplate";

export default class SubMenuTemplate extends MenuTemplate {
  constructor(label, accelerator, click) {
    super(label);
    this.accelerator = accelerator;
    this.click = click;
  }
}

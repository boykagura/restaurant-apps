// app.js
import drawerInitiator from '../utils/drawer-intiator';

class Apps {
  constructor({ button, navDrawer, content }) {
    this._button = button;
    this._navDrawer = navDrawer;
    this._content = content;

    this._appShell();
  }

  _appShell() {
    drawerInitiator.init({
      button: this._button,
      navDrawer: this._navDrawer,
      content: this._content,
    });
  }
}


export default Apps;
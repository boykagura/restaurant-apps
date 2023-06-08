import drawerIntiator from "../utils/drawer-intiator";

class Apps {
constructor ({
    button,drawer, content,
}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._appShell();

}
_appShell() {
    drawerIntiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

}
export default Apps;
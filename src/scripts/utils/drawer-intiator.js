const drawerInitiator = {
  init({ button, navDrawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, navDrawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, navDrawer);
    });
  },

  _toggleDrawer(event, navDrawer) {
    event.stopPropagation();
    navDrawer.classList.toggle('open');
  },

  _closeDrawer(event, navDrawer) {
    event.stopPropagation();
    navDrawer.classList.remove('open');
  },
};

export default drawerInitiator;

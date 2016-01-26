FlowRouter.route('/', {
  name: 'Dashboard',
  action() {
    ReactLayout.render(App, {
      content: <Dashboard />,
      nav: <Nav />
    });
  }
});
FlowRouter.route('/request', {
  name: 'RequestForm',
  action() {
    ReactLayout.render(App, {
      content: <RequestForm />,
      nav: ''
    });
  }
});
FlowRouter.route('/new-ninja', {
  name: 'NewNinja',
  action() {
    ReactLayout.render(App, {
      content: <NewNinja />,
      nav: <Nav />
    });
  }
});

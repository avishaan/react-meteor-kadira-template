FlowRouter.route('/', {
  name: 'Dashboard',
  action() {
    ReactLayout.render(App, {
      content: <Dashboard />,
      nav: <Nav />
    });
  }
});
FlowRouter.route('/register', {
  name: 'Register',
  action() {
    ReactLayout.render(App, {
      content: <Register name="Register"/>
    });
  }
});
FlowRouter.route('/login', {
  name: 'Login',
  action() {
    ReactLayout.render(App, {
      content: <Login />,
      nav: <Nav />
    });
  }
});
FlowRouter.route('/ninjas', {
  name: 'NinjasList',
  action() {
    ReactLayout.render(App, {
      content: <NinjasList />,
      nav: <Nav />
    });
  }
});
FlowRouter.route('/request', {
  name: 'RequestForm',
  action() {
    ReactLayout.render(App, {
      content: <RequestForm name="Request" />
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
FlowRouter.route('/edit/:_id', {
  name: 'EditNinja',
  action(params) {
    ReactLayout.render(App, {
      content: <EditNinja name="EditNinja" ninja={params._id} />,
      nav: <Nav />
    });
  }
});

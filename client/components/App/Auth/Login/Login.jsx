Login = React.createClass({
  login(e) {
    e.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();
    Meteor.loginWithPassword(email, password, FlowRouter.go('/'));
  },
  render() {
    return (
      <div className="col-xs-6">
        <h1>Login to NinjaTracker</h1>
        <form onSubmit={this.login} id="login-form" action="#">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" className="form-control"/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    );
  }
});

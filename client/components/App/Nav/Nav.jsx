Nav = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      loggedIn: !!Meteor.user()
    }
  },
  logout() {
    Meteor.logout(function(err){
      FlowRouter.go('/login');
    });
  },
  getLoginLink() {
    if (this.data.loggedIn) {
      return <li><a onClick={this.logout} href="#">Logout</a></li>
  } else {
    return <li><a href="/register">Login</a></li>
  }
},
render() {
    return (
      <ul className="nav nav-pills nav-stacked">
        <li><a href="/">Dashboard</a></li>
        <li><a href="/new-ninja"> New Ninja</a></li>
        <li><a href="/ninjas"> List Ninjas</a></li>
        {this.getLoginLink()}
      </ul>
    );
  }
});

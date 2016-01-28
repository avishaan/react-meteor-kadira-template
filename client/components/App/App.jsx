App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    Meteor.subscribe('requests');
    return {
      loggedIn: !!Meteor.user()
    };
  },
  componentDidMount() {
    // runs when the component is rendered
    // tracker function will keep track of changes and run when the count of the requests change
    var count = 0;
    Tracker.autorun(function() {
      count++;
      var requests = Requests.find().count();
      if (count > 2 && Meteor.user()) {
        sAlert.success('New request. <a href="/"> Go to Dashboard</a>', {html: true, effect: 'genie'});
      }
    });
  },
  showLogin() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 text-center">
            <p>You must be logged in to do that.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-xs-offset-3">
            <Login />
          </div>
        </div>
      </div>
    );
  },
  allowedLayout() {
    var allowedLayouts = ['Request', 'Login', 'Register'];
    var layoutAllowed = false;
    if ($.inArray(this.props.content.props.name, allowedLayouts) > -1 || this.data.loggedIn){
      layoutAllowed = true;
    }
    return layoutAllowed;
  },
  showLayout() {
    if (this.props.content.props.name == 'Request') {
      return (
        <div className="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
          {this.props.content}
        </div>
      );
    } else {
      return (
        <div className="container-fluid main-container">
          <div className="col-xs-3">
            {this.props.nav}
          </div>
          <div className="col-xs-9">
            {this.props.content}
          </div>
        </div>
      );
    }
  },
  render() {
    return(
      <div className="container-fluid main-container">
        <div className="row">
          { this.allowedLayout() ? this.showLayout() : this.showLogin() }
        </div>
      </div>
    );
  }
});

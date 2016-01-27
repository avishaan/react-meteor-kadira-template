Ninja = React.createClass({
  getStatus() {
    if (this.props.ninja.status) {
      return 'Available';
    }
    return 'Busy';
  },
  render() {
    return (
      <div className="col-xs-12 col-sm-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3>{this.props.ninja.fullName()}</h3>
          </div>
          <div className="panel-body">
            <h4>Score: {this.props.ninja.score}</h4>
            <h4>Current Status: {this.getStatus()}</h4>
            <h4>Jobs Completed: {this.props.ninja.jobsCompleted}</h4>
          </div>
        </div>
      </div>
    );
  }
});

App = React.createClass({
  render() {
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
});

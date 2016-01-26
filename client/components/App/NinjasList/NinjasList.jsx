NinjasList = React.createClass({
  renderNinjas() {
    return <Ninja />
  },
  render() {
    return (
      <div className="row">
        {this.renderNinjas()}
      </div>
    );
  }
});

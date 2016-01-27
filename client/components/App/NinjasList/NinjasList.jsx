NinjasList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    Meteor.subscribe('ninjas');
    return {
      ninjas: Ninjas.find().fetch()
    };
  },
  renderNinjas() {
    return this.data.ninjas.map((ninja) => {
      return <Ninja key={ninja._id} ninja={ninja} />;
    });
  },
  render() {
    return (
      <div className="row">
        {this.renderNinjas()}
      </div>
    );
  }
});

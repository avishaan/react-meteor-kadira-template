EditNinja = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    Meteor.subscribe('ninja', this.props.ninja);
    return {
      ninja: Ninjas.findOne(this.props.ninja)
    };
  },
  editNinja(e) {
    e.preventDefault();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();

    var ninja = {
      _id: this.data.ninja._id,
      firstName: firstName,
      lastName: lastName
    };
    Meteor.call('editNinja', ninja, function(err, result){
      if (err) {
        return sAlert.error(err.reason, {effec: 'genie'});
      } else {
        $('#firstName').val('');
        $('#lastName').val('');
        return sAlert.success('User created successfully!', {effect: 'genie'});
      }
    });
  },
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h1>Edit User</h1>
            <form id="edit-ninja-form" action="#" onSubmit={this.editNinja}>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" defaultValue={this.data.ninja.firstName} className="form-control"/>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" defaultValue={this.data.ninja.lastName} className="form-control"/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Save Person</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});


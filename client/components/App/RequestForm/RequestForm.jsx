RequestForm = React.createClass({
  submitRequest(e) {
    e.preventDefault();
    var clientName = $('#name').val();
    var target = $('#target').val();

    var request = {
      clientName: clientName,
      target: target
    };

    Meteor.call('newRequest', request, function(err, result){
      if (err) {
        return sAlert.error(err.reason, {effect: 'genie'});
      } else {
        $('#clientName').val('');
        $('#target').val('');
        return sAlert.success('Your request has been received. Target will be eliminated.', {effect: 'genie'});
      }
    });
  },
  render() {
    return (
      <div>
        <h1>Client Request Form</h1>
        <form onSubmit={this.submitRequest} id="client-request-form" action="#">
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="target">Target's Full Name:</label>
            <input type="text" id="target" name="target" className="form-control" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Send Request</button>
          </div>
        </form>
      </div>
    );
  }
});

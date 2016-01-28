Requests = new Mongo.Collection('requests');

var Schemas = {};

Schemas.Requests = new SimpleSchema({
  clientName: {
    type: String,
    label: "Client Name"
  },
  target: {
    type: String,
    label: "Target"
  },
  fulfilled: {
    type: Boolean
  }
});

Requests.attachSchema(Schemas.Requests);

Meteor.methods({
  newRequest(request) {
    Requests.insert({
      clientName: request.clientName,
      target: request.target,
      fulfilled: false
    });
  }
});

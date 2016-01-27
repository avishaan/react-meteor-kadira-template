// publish models
Meteor.publish('ninjas', function() {
  return Ninjas.find();
});


// publish models
Meteor.publish('ninjas', function() {
  return Ninjas.find();
});

//publish specific ninja
Meteor.publish('ninja', function(id){
  return Ninjas.find({_id: id});
});

Meteor.publish('requests', function() {
  return Requests.find();
});

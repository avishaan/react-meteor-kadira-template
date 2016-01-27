Ninjas = new Mongo.Collection('ninjas');

var Schemas = {};
Schemas.Ninja = new SimpleSchema({
  firstName: {
    type: String,
    label: "First Name",
    max: 25
  },
  lastName: {
    type: String,
    label: "Last Name",
    max: 25,
    index: true,
    unique:true
  },
  score: {
    type: Number,
    label: "Score",
    min: 0
  },
  status: {
    type: Boolean,
    label: "Status"
  },
  jobsCompleted: {
    type: Number,
    label: "Jobs Completed",
    min: 0
  }
});

Ninjas.attachSchema(Schemas.Ninja);

Ninjas.helpers({
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
});

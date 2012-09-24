Threads = new Meteor.Collection("threads");

Meteor.publish('thread', function(id) {
  console.log("Found a thread: " + id);
  return Threads.findOne({_id: id});
});
Threads = new Meteor.Collection("threads");

Meteor.publish('threads', function(thread_id) {
  if (thread_id) {
    return Threads.findOne({_id: thread_id});
  }
  return Threads.find({});
  console.log("Found a thread: " + thread_id);
  
});

Meteor.publish('all_threads', function() {
  
});
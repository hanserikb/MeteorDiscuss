
/**
 * Thread = {
 *  _id: ObjectID,
 *  caption: String,
 *  body: String,
 *  created: Date,
 *  replies: [{
 *    author: ObjectID,
 *    body: String,
 *    created: Date,
 *    replies: [{
 *      author: ObjectID,
 *      body: String,
 *      created: Date
 *    }]
 *  }]
 * }
 */
Threads = new Meteor.Collection("threads");

// ID of selected thread
Session.set('thread_id', null);

Meteor.autosubscribe(function(){
  var thread_id = Session.get('thread_id');
  if (thread_id) {
    Meteor.subscribe('thread', thread_id);
  };  
  console.log('Current thread id is: ' + thread_id);
});

Template.threads.threads = function() {
  return Threads.find({}, {sort: {created: 1}});
}

Template.threads.events({
  'click .thread': function (e) {
    Session.set('thread_id', this._id);

  }
});
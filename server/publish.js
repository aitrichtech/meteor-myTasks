TaskList = new Meteor.Collection('tasklist');

Meteor.publish('all-tasks', function () {
	return TaskList.find({});
});

/*
 Meteor.publish('tasklist', function() {
        return TaskList.find({});
    });
    Meteor.publish('task',function(id){
    	 return TaskList.find({_id:id});
    });
*/

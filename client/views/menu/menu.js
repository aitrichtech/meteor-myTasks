Template.menu.helpers({
		// Helper to get the number of Tasks
        tasksHelper:function() {
                return TaskList.find().count();
        },
		// Get the number of task completed
        taskCompletedHelper:function() {
                return TaskList.find({status: 'Completed'}).count();
        },

        // Get the number of task not completed
        taskActiveHelper:function() {
                return TaskList.find({status: 'Active'}).count();
        },
        // Get the number of task Cancelled
        taskCancelHelper:function() {
                return TaskList.find({status: 'Cancelled'}).count();
        }
		
});
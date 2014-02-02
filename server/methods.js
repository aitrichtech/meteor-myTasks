
	Meteor.methods({
		insertTask: function (newTask) {
			
        // Perform validation
        if (newTask.title == "") {
            throw new Meteor.Error(413, "Missing title!");
        }
		var taskId=TaskList.find().count()+1;
		newTask.id=taskId;
		// Insert Task (simulate on client, do it on server)
        return TaskList.insert(newTask);
    },
		deleteTask : function(task) {
			TaskList.remove({
				id : task.id
			})
			return task.id
		},
		updateTaskStatus : function(id, task) {
			TaskList.update({
				id : id
			},task);
			return task.id;
		},
	});


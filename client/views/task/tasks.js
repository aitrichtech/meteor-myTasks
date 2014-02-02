TasksController = RouteController.extend({
	waitOn : function() {
		return Subscriptions.tasklist;
	},
	data : {
		taskList : function() {
			return TaskList.find(Session.get('filter'));
		},
		currentDate : function() {
			var today = new Date();
			var year, month, day;
			year = String(today.getFullYear());
			month = String(today.getMonth() + 1);
			if (month.length == 1) {
				month = "0" + month;
			}
			day = String(today.getDate());
			if (day.length == 1) {
				day = "0" + day;
			}
			return year + "-" + month + "-" + day;
		}
	},
	all : function() {
		Session.set('filter', {});
		this.render();
	},
	active : function() {
		Session.set('filter', {
			status : 'Active'
		});
		this.render();
	},
	completed : function() {
		Session.set('filter', {
			status : 'Completed'
		});
		this.render();
	},
	cancelled : function() {
		Session.set('filter', {
			status : 'Cancelled'
		});
		this.render();
	},
});

Template.tasks.events({
	'click button#btnAdd' : insertTask,
	'click a.btnDelete' : deleteTask,
	'change select.selstatus' : changeTaskStatus,
	'click a.btnShowEditForm' : showEditForm,

	'keydown #txttaskname' : function(evt, tmpl) {
		if (evt.which == 13) {
			insertTask(evt, tmpl);
		}
	}
});

function insertTask(evt, tmpl) {
	// create the new Task
	var newTask = {
		title : tmpl.find('#txttaskname').value,
		status : "Active",
		date : new Date(),
		duedate : tmpl.find('#txtDueDate').value
	}

	tmpl.find('#txttaskname').value = "";

	// add the task to the db
	Meteor.call("insertTask", newTask, function(err, result) {
		if (err) {
			console.log("Could not add task " + err.reason);
		}
	});
}

function deleteTask() {
	if (confirm('Are you Sure?')) {
		Meteor.call("deleteTask", this, function(error, result) {
			if (err) {
				console.log("Could not add task " + err.reason);
			}
		});
	}

}

function changeTaskStatus(e, tmpl) {
	var newStatus = $(e.target).val();
	this.status = newStatus;
	Meteor.call("updateTaskStatus", this.id, this, function(err, result) {
		if (err) {
			console.log("Could not add task " + err.reason);
		}
	});
}

function showEditForm() {
	Session.set('editing_task', TaskList.findOne({
		id : this.id
	}));
	$("#editForm").modal("show");
}

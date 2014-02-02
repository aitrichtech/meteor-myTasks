/**
 * @author shafi
 */
Template.taskEditForm.helpers({
    task:function() {
        return Session.get('editing_task');
    },
});

Template.taskEditForm.events({
	'click button#btnSave' : updateTask,
	'click #btnClose' : cancelUpdate,
});

function cancelUpdate() {
	Session.set('editing_task', null);
	$('#editForm').modal('hide');
}

function updateTask() {
	var taskEdit = Session.get('editing_task');
	var task = {
		id : taskEdit.id,
		title : $('#txttask').val(),
		date : taskEdit.date,
		duedate:$("#txteditduedate").val(),
		status : $("#selStatus").val()
	};
		
	Meteor.call("updateTaskStatus", taskEdit.id, task, function(err, result) {
		if (result > 0) {
			console.log("Successfully updated record with id:" + result);
		} else {
			alert('Update Failed');
		}
	});
	$("#editForm").modal("hide");
	Session.set('editing_task', null);
}
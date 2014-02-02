
TaskList = new Meteor.Collection('tasklist');

//Meteor Subscriptions
Subscriptions = {
	tasklist : Meteor.subscribe('all-tasks')
};

//Handlebar helper to format date
Handlebars.registerHelper('date', function(date) {
           return date ? moment(date).format('MMMM DD YYYY') : "";
});
//Handlebar helper to select drop down value
Handlebars.registerHelper('selected', function(status, value) {
  return status == value ? ' selected' : '';
});

//Handlebar helper for table row style
Handlebars.registerHelper('rowStyle', function(status) {
  switch(status) {
			case "Active" :{
				return 'info';
			}
			case "Completed" :{
				return 'warning striked';
			}
			case "Cancelled" :{
				return 'error';
			}
		}
});


// Session var to keep task which is currently in editing mode, if any
Session.set('editing_task', null);
// Session var to keep current filter type ("all", "active", "completed")
Session.set('filter', {});



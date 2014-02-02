
Router.map(function () {
    this.route('home', {
        path :  '/',
		template: 'tasks',
		controller:TasksController,
		action: 'all'
    });
	this.route('active', {
        path :  '/active',
		template: 'tasks',
		controller:TasksController,
		action: 'active'
    });
	this.route('completed', {
        path :  '/completed',
		template: 'tasks',
		controller:TasksController,
		action: 'completed'
    });
    this.route('cancelled', {
        path :  '/cancelled',
		template: 'tasks',
		controller:TasksController,
		action: 'cancelled'
    });
	
});
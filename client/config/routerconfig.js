Router.configure({
    layoutTemplate: 'defaultLayout',
    notFoundTemplate: 'notFound',
    loadingTemplate:'loading',
    yieldTemplates: {
		'menu': { to: 'menu' },
        'footer': { to: 'footer' }
    }
});


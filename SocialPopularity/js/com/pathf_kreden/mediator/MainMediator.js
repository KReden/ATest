puremvc.define
(
	// CLASS INFO
	{
		name: 'com.pathf_kreden.mediator.MainMediator',
		parent: puremvc.Mediator
	},
	
	// INSTANCE MEMBERS
	{
		/** @override */
		listNotificationInterests: function ()
		{
			return [
			
			]
		},
		
		/** @override */
		handleNotification: function (note)
		{
			switch ( note.getName() )
			{
				
			}
		},
		
		/** @override */
		onRegister: function ()
		{
			var self = this;
			// Initialize the TextComponentMediator's view component when its 
			// registered with the Facade and listen to its TEXT_CHANGED events
			this.setViewComponent( new com.pathf_kreden.mediator.components.Main );
			
			// this.viewComponent.setup_hash_change_handler();
			// // Check for initial hash
			// this.viewComponent.hash_changed(window.location.hash.substring(1));

			// $(this.viewComponent.navigation_links).click(function(event){
			// 	// Hide all validation error tooltips
			// 	$('.error').hide();
			// 	switch(event.currentTarget.id){
			// 		case "favorites_nav":

			// 		break;
			// 		case "profile_nav":
			// 		self.facade.sendNotification(com.cmap_user.AppFacade.POPULATE_PROFILE_VIEW);
			// 		break;

			// 		case "change_password_nav":

			// 		break;
			// 	}
			// });

		},					
		
		/** @override */
		onRemove: function ()
		{
			
		}
	},
	
	// STATIC MEMBERS
	{
		/**
		 * @static
		 * @type {string}
		 */
		 NAME: 'MainMediator'
	}
);
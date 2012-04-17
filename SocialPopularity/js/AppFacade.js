puremvc.define
(
	{
		name: 'com.pathf_kreden.AppFacade',
		parent: puremvc.Facade
	}, 
	
	{
		startup: function () {
			if (!this.initialized) {
				this.initialized= true;
				// associate the SetupCommand with the STARTUP notification
				this.registerCommand( com.pathf_kreden.AppFacade.STARTUP, com.pathf_kreden.controller.StartupCommand );
				// issue the SETUP notification to execute StartupCommand
				this.sendNotification( com.pathf_kreden.AppFacade.STARTUP );
			}
		}
	},
	{
		getInstance: function (multitonKey) {
			var instanceMap = puremvc.Facade.instanceMap;
			instance = instanceMap[multitonKey]; // read from the instance map
			
			if (instance) // if there is an instance...
				return instance; // return it
			return instanceMap[multitonKey]= new com.pathf_kreden.AppFacade(multitonKey);
		},
		NAME: 'GoogleAjaxWithFlex',
		STARTUP: "startup"
	}
)

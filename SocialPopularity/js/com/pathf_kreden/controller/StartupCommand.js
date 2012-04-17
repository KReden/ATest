/**
 * @class demo.controller.PrepareW3CViewCommand
 * @extends puremvc.SimpleCommand
 */
puremvc.define
(
	// CLASS INFO
	{
		name: 'com.pathf_kreden.controller.StartupCommand',
		parent: puremvc.SimpleCommand
	},
	
	// INSTANCE TRAITS
	{
		/** @override */
		execute: function (note)
		{
			this.facade.registerProxy(new com.pathf_kreden.proxy.MainProxy);
			this.facade.registerMediator(new com.pathf_kreden.mediator.MainMediator);
		}
	}
);				
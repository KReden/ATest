puremvc.define
(
	// CLASS INFO
	{
		name: 'com.pathf_kreden.mediator.components.Main',

		/** @constructor */
		constructor: function ()
		{
			var i_am_this = this;
			this.searchFeild = $("#search_btn_twitter")[0];
		// 	var self = this;
		// 	this.header = $("#header")[0];
		// 	this.notification = $("#notification")[0];
		// 	this.navigation_links = new Array();
		// 	$.each($("#navigation a"), function(indexInArray, valueOfElement){
		// 		self.navigation_links.push(valueOfElement);
		// 	});
		// 	this.favorites_nav = $("#favorites_nav")[0];
		// 	this.profile_nav = $("#profile_nav")[0];
		// 	this.change_password_nav = $("#change_password_nav")[0];
		 }
	},

	// INSTANCE MEMBERS 
	{
		/**
		 * @private
		 * @type {HTMLInputElement}
		 */

		 grab_text_from_search: function(){
		 	var query_params = this.searchFeild;
		 },		
		// show_notification: function(notification){
		// 	$(this.notification).html(notification);
		// },

		// hide_notification: function(){
		// 	$(this.notification).hide();
		// },

		prepare_nav: function(listObject){
			$("#navigation_bar li").removeClass("active");
			$("#"+listObject+"_nav").addClass("active");
			
			switch(listObject){
				case "#main_page_view":
					console.log(listObject);
				break;
				case "#profile":

				break;
				case "#change_password":

				break;
			}
		},
		prepare_view: function(listObject){
			// Prepare headers
			switch(listObject){
				case 'login':
		        	//this.set_header("Sign in with your CMAP ID","New user?","Create a free account","#create_account");
		        	break;
		        	case 'logout':
		        	//this.set_header("You have been logged out","Thank you for using MetroPulse.","Log back in","#login");
		        	break;
		        	case 'account_details':
		      		//this.set_header("Update your CMAP ID","Fill in details below","Change password","#change_password");
		      		break;
		      		case 'create_account':
		        	//this.set_header("Create a CMAP ID","Already have an account?","Sign in","#login");
		        	break;
		        	case 'change_password':
		        	//this.set_header("Change your CMAP password","","","");
		        	break;
		        	case 'forgot_password':
		        	// To be implemented once email server is resolved
		        	break;
		        	case 'inactivity_logged_out':
			        //this.set_header("Logged out due to inactivity","Thank you for using MetroPulse.","Log back in","#login");
			        break;
			        case 'favorites':

			        break;
			        case 'profile':
			        window.location.hash = "profile/account_details";
			        break;	    
			        default:

			        break;
			    }
			},
			hash_changed: function(listObject){
				nav_anchor = "";
				view_anchor = "";

				var url_elements = listObject.split("/");
				if(url_elements.length == 1){
					nav_anchor = listObject;
					view_anchor = listObject;
				} else if(url_elements.length == 2){
					nav_anchor = url_elements[0];
					view_anchor = url_elements[1];
				}
			// Hide all views
			this.views_collection().hide();
			// Prepare nav
			this.prepare_nav(nav_anchor);
			// Prepare view
			this.prepare_view(view_anchor);
			// Show view based on anchor	
			var view_id = "#"+view_anchor+"_view";
			if($(view_id).is("div")){ // If it is a view
				this.hide_notification();
				$(view_id).show();
			} else if(view_anchor == ""){ // If it is home 
				this.hide_notification();
				$("#login_view").show();
			} else { // If it is bad link
				this.show_notification("Invalid URL.");
				$("#login_view").show();
			}
		},
		setup_hash_change_handler: function(){
			var self = this;
			if ("onhashchange" in window) { // event supported?
				window.onhashchange = function () {
					self.hash_changed(window.location.hash.substring(1));
				}
			} else { // event not supported:
				var stored_hash = window.location.hash.substring(1);
				window.setInterval(function () {
					if (window.location.hash != stored_hash) {
						stored_hash = window.location.hash.substring(1);
						self.hash_changed(stored_hash);
					}
				}, 100);
			}
		},
		views_collection: function(){
			return $('div[id$="_view"]');
		}
	},
	
	// STATIC MEMBERS	
	{
		/**
		 * @static
		 * @type {string}
		 */
		//TEXT_CHANGED: 'textChanged'
	}
);

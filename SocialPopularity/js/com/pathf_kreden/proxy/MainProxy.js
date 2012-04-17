puremvc.define
(
	// CLASS INFO
	{
		name: 'com.pathf_kreden.proxy.MainProxy',
		parent: puremvc.Proxy
	},
	
	// INSTANCE MEMBERS
	{
		twitterFetch : function(query_params){
			var i_am_this = this;
			//Example query URL with hashbang
			// https://twitter.com/#!/search/twitterapi
			var url = "http://search.twitter.com/search.json?q=" + query_params + "&rpp=5&include_entities=true&result_type=mixed";
			$.ajax({
				//Twitter search call
				url: url,
				type: GET,
				dataType: "json",
				success: function(results){
					//do something with results
					console.log(results);
				}
			});
		}
// 		login: function(email, pass) {
// 			var self = this;
// 			// Set email and pass on user object right away
// 			this.user["-email"] = email;
// 			this.user["-pwd"] = pass;
// 			// Get user info
// 			var url = "http://data.cmap.illinois.gov/DEV/API/HTTPGET/Sysmaint/GetUserAccountInfo.aspx" +
// 			"?email=" + email +
// 			"&pwd=" + pass +
// 			"&authkey=admfrkgsawcgwxz&ReturnFormat=JSONP";
// 			$.ajax({
// 				url: url,
// 				type:"GET",
// 				dataType:"jsonp",
// 				success: function(res) {
// 					if(res.status_code == 1){
// 						self.setUserData(res.data.user);
// 					} else {
// 						alert(res.errors[0]);
// 					}
// 				},
// 				error: function(res) {
// 					alert("Your credentials are not valid. Please log back in with valid credentials.");
// 				}
// 			});
// 			return false;
// 		},
// 		user: { 
// 			"-userkey": "", 
// 			"-userstatus": "", 
// 			"-email": "",
// 			"-newemail": "",
// 			"-pwd": "",
// 			"-newpwd": "",
// 			"-lastname": "", 
// 			"-firstname": "", 
// 			"-mi": "", 
// 			"-address": "", 
// 			"-city": "", 
// 			"-state": "", 
// 			"-zip": "", 
// 			"-phone": "", 
// 			"-org": "", 
// 			"-role": "", 
// 			"-profile": "", 
// 			"-authpermissions": "", 
// 			"-subscribe_newsletter": ""
// 		},
// 		setUserData: function(user){
// 			this.user["-userkey"] = user["-userkey"];
// 			this.user["-userstatus"] = user["-userstatus"];
// 			this.user["-email"] = user["-email"];
// 			this.user["-lastname"] = user["-lastname"];
// 			this.user["-firstname"] = user["-firstname"];
// 			this.user["-mi"] = user["-mi"];
// 			this.user["-address"] = user["-address"];
// 			this.user["-city"] = user["-city"];
// 			this.user["-state"] = user["-state"];
// 			this.user["-zip"] = user["-zip"];
// 			this.user["-phone"] = user["-phone"];
// 			this.user["-org"] = user["-org"];
// 			this.user["-role"] = user["-role"];
// 			this.user["-profile"] = user["-profile"];
// 			this.user["-authpermissions"] = user["-authpermissions"];
// 			this.user["-subscribe_newsletter"] = user["-subscribe_newsletter"];
// 		},
// 		updateUserData: function(user_data){
// 			var self = this;
// 			// Update user model
// 			for(var key in this.user){
// 				if(user_data.hasOwnProperty(key)){
// 					this.user[key] = user_data[key];
// 				}
// 			}

// 			// Check if password or email changed
// 			var newemail = "";
// 			if(this.user["-newemail"] != ""){
// 				newemail = "&newemail=" + this.user["-newemail"];
// 			} 

// 			var newpwd = "";
// 			if( this.user["-newpwd"] != ""){
// 				newpwd = "&newpwd=" + this.user["-newpwd"];
// 			}

// 			var url = "http://data.cmap.illinois.gov/DEV/API/HTTPGET/Sysmaint/UpdateUserAccount.aspx" +
// 			"?email=" + this.user["-email"] + 
// 			newemail +
// 			"&pwd=" + this.user["-pwd"] +
// 			newpwd +
// 			"&firstname=" + this.user["-firstname"] + 
// 			"&lastname=" + this.user["-lastname"] + 
// 			"&org=" + this.user["-org"] + 
// 			"&address=" + this.user["-address"] + 
// 			"&city=" + this.user["-city"] + 
// 			"&state=" + this.user["-state"] + 
// 			"&zip=" + this.user["-zip"] + 
// 			"&phone=" + this.user["-phone"] +
// 			"&role=" + this.user["-role"] +  
// 			"&subscribe_newsletter=" + this.user["-subscribe_newsletter"] +
// 			"&authkey=admfrkgsawcgwxz&ReturnFormat=JSONP";
// 			$.ajax({
// 				url: url,
// 				type:"GET",
// 				dataType:"jsonp",
// 				success: function(res) {
// 					if(res.status_code == 1){
// 	          			// Clean newpwd and newemail
// 	          			if(self.user['-newemail'] != ""){
// 	          				self.user["-email"] = self.user['-newemail'];
// 	          				// Put this new email in the current email field
// 	          				// Then clean the new email field
// 	          				self.user['-newemail'] = "";
// 	          			}
// 	          			if(self.user['-newpwd'] != ""){
// 	          				self.user["-pwd"] = self.user['-newpwd'];
// 	          				self.user['-newpwd'] = "";
// 	          				console.log("Password if statement");
// 	          			}
// 	          			// Clean the email view layer
// 	          			self.facade.sendNotification(com.cmap_user.mediator.UpdateInfoMediator.CLEAN_NEW_EMAIL_AFTER_USER_INFO_UPDATE, self.user["-email"])
// 	          			self.facade.sendNotification(com.cmap_user.mediator.UpdateInfoMediator.FLIP_VIEW, "view");
	          			
// 	          			console.log("user data updated");


// 	          		}else{
// 	          			alert(res.errors[0]);
// 	          		}
// 	          	},
// 	          	error: function(res) {
// 	          		alert("Update was unsuccessful. Please try again later.");
// 	          	}
// 	          });
// 			},
// load_favorites: function(){
// 	var self = this;
// 	var url = "http://data.cmap.illinois.gov/DEV/API/HTTPGET/SYSMAINT/GetUserQueries.aspx?" + 
// 	"email=awilliams@ytown.com" + "&pwd=mickeymouse" + 
// 	"&userkey=SASHA_ROCK0001" + "&querytype=CHART" + 
// 	"&queryname=MyNewCoolerQuery" + "&authkey=admfrkgsawcgwxz";

// 	$.ajax({
// 		type: "GET",
// 		url: "http://localhost/cmap/user/ba-simple-proxy.php",
// 		dataType: "json",
// 		data: {
// 			"url":url
// 		},
// 		success: function(response){
// 			console.log("success!");
// 			var xml = response.contents;
// 			var xmlDoc = $.parseXML(xml);

// 			var queries = $(xmlDoc).find('query');
// 			var queries_data = [];

// 			for (var i=0; i < queries.length; i++ ){
// 				var query = {
// 					"id":$(queries[i]).attr("id"),
// 					"queryname":$(queries[i]).attr("queryname"),
// 					"querytype":$(queries[i]).attr("querytype"),
// 					"queryurl":$(queries[i]).attr("queryurl"),
// 					"urlparms":$(queries[i]).attr("urlparms")		
// 				}
// 				queries_data.push(query);
// 			}
// 			self.facade.sendNotification(com.cmap_user.mediator.FavoritesMediator.PROPAGATE_FAVORITES_DATA, queries_data);
// 		},
// 		error: function(jqXHR, textStatus, errorThrown){
// 			//console.log(errorThrown);
// 		}

// 	});

// }
},
	// CLASS MEMBERS	
	{
		/**
		 * The TextProxy's name.
		 * 
		 * @static
		 * @type {string}
		 */
		 NAME: 'MainProxy',
		/**
		 * Flag that denotes is the user logged in.
		 * 
		 * @static
		 * @type {bool}
		 */
		 //is_logged_in: false
	}
);
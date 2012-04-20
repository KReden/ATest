<?php
//GET the escaped fragment keys and values
$escaped_fragment = $_GET["_escaped_fragment_"];

//This is the same url from the javascript. Notice that I
//Got rid of the ? after json
$base_url = "https://api.twitter.com/1/users/lookup.json";

/*One way to split a large query string sent to this page.
I do it this way becasue the googlebot seems to do just that,
sends a giant string to the server that are the query params.*/
// SHORTCUT I'm simplifying for now
//$exploded_fragment = explode("&", $escaped_fragment);

/*This a probably not the best way to add the query parameters
into an array but I dont know of a better way to do so currently*/
// $params = array(
// 	'user_id' => $exploded_fragment[0],
// 	'include_entities' => $exploded_fragment[1],
// 	);


//This will be used later on to make our query
// SHORTCUT I'm simplifying for now
//$queryString = "";



//I am manually making the query string here from the exploded fragments 
//since I know exactly what they are. To do this dynamically you will probably 
//want to do a foreach loop similir to this:
		//For each loop to make the query string
		// foreach ($params as $key => $value){
		// 	$queryString .= "$key=" . urldecode($value) . "&";
		// }
// SHORTCUT I'm simplifying for now
//$queryString .= $exploded_fragment[0] . urldecode("&") . $exploded_fragment[1];

// Make the php call only if there is something in escaped_fragment url parameter
// Otherwise leave it up to JS
if($escaped_fragment != ""){
	//Append the query string to the base url
	$url = "$base_url?screen_name=$escaped_fragment&include_entities=true";

	//Using cURL(http://php.net/manual/en/book.curl.php) I set up a function to handle
	//the server request to twitter.
	function curl($url){
		$ch = curl_init(); 									//Initialize cURL
		curl_setopt($ch, CURLOPT_URL, $url);				//Set an option for a cURL transfer -Setting up the url to fetch-
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);		//Set an option for a cURL transfer -return the response as a string-
		$data = curl_exec($ch);								//Execute the request (GET). The response is stored in the data variable
		return json_decode($data, true);					//The response that twitter sends in JSON so we must decode this before the return. Makes it into an array
	}

	//Call curl. Pass it our built url, and set the returned value to response variable
	$response = curl(urldecode($url));
	// SHORTCUT targeting first match for simplicity
	$response = $response[0];
	//echo $output[0]["status"]["text"]; 
	//echo $output->error;

	//DEBUG LINE I used this to see the path I needed to take to get the data I wanted.
	//var_dump($output);	
}

?>
<!DOCTYPE html>
<head>
	<title><?php echo $response["name"];?></title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="css/bootstrap-responsive.min.css" />
	<meta name="fragment" content="!"></meta>
</head>
<body>
	<!-- Begin Nav Bar Section -->
	<div id="navigation_bar" class="navbar navbar-fixed-top">
		<div class="navbar-inner">
			<div class="container">
				<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</a>
				<a class="brand" href="/">Social Profilier</a>
			</div>
		</div>
	</div>
	<!-- End Nav Bar Section -->
	<div id="main_page_view" class="container" style="margin-top:40px;">
		<div class="hero-unit">
			<div id="introDiv">
				<h1 class="row">Search Something!</h1>
				<div>
					<input id="search_feild" type="text" class="input-xlarge" />
				</div>
				<p>
					<a id="testClicker" class="btn btn-primary btn-large row">Get the band back together</a>
				</p>	
			</div>
			<div id="resultsDiv">
				<img id="user_image" style="margin-bottom:10px;" alt="<?php echo $response["name"];?>" src="<?php echo $response["profile_image_url"];?>"/>
				<p id="user_name">Name: <span><?php echo $response["name"];?><span></p>
				<p id="user_description">Description: <span><?php echo $response["description"];?></span></p>
				<p id="user_location">Location: <span><?php echo $response["location"];?></span> </p>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript" src="js/lib/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="js/lib/jquery.tools.min.js"></script>
<script type="text/javascript" src="js/lib/bootstrap.min.js"></script>
<script type="text/javascript">
$(document).ready(function () {
	// Hide search form for now
	$("#introDiv").hide();
	$("#resultsDiv").hide();
	// Example URL: http://localhost/cmap/ATest/SocialPopularity/#!sashadzeletovic
	var screen_name = window.location.hash.substring(2);
	if(screen_name == ""){
		alert("Add a Twitte user name to this url after # to run this test.");
	}else{
		var url = "https://api.twitter.com/1/users/lookup.json?screen_name="+screen_name+"&include_entities=true";
		//This url isused for searching twitter by KEY word
		// var url = "http://search.twitter.com/search.json?q=" + $("#search_feild").val() + "&rpp=5&include_entities=true&result_type=mixed";
		//This url is used to search by user name - RESTful-
		//var url = "https://api.twitter.com/1/users/lookup.json?user_id=182810585&include_entities=true";
		//Twitter search call
		$.ajax({
			url: url,
			type: "GET",
			dataType: "jsonp",
			success: function(data){
				console.log(data);
				var first_match = data[0];
				$("title").text(first_match.name);
				$("#user_image").attr("alt", first_match.name);
				$("#user_image").attr("src", first_match.profile_image_url);
				$("#user_name span").html(first_match.name);
				$("#user_description span").html(first_match.description);
				$("#user_location span").html(first_match.location);
				$("#resultsDiv").fadeIn();
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log("jqXHR: " + jqXHR + "textStatus: " + textStatus + "errorThrown: " +  errorThrown);
			}
		});	
	}
	
	
});

</script>

</body>
</html>
<?php
$twitter_user_url = "https://api.twitter.com/1/users/lookup.json?user_id=185418292&include_entities=true";
$parsed_url = parse_url($twitter_user_url);
$count = count($parsed_url);
for($i = 0; $i < $count; $i++){
	echo $parsed_url[$i];
}
//echo $parsed_url[1];
// $twitter_response = ;
// $test = $twitter_response;
echo(file_get_contents($parsed_url));
?>


<!DOCTYPE html>
<head>
	<title><?php $title = ($test != "") ? $test : "Social Profiler"; echo $title; ?></title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="css/bootstrap-responsive.min.css" />
	<meta name="fragment" content="!">
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
				<a class="brand" href="http://www.kreden.com/SocialPopularity/">Social Profilier</a>
			</div>
		</div>
	</div>
	<!-- End Nav Bar Section -->
	<div id="main_page_view" class="container">
		<div class="hero-unit span8">
			<div id="introDiv">
				<h1 class="row">Search Something!</h1>
				<div>
					<input id="search_feild" type="text" class="input-xlarge" />
				</div>
				<p>
					<a href="#resultsDiv" id="testClicker" class="btn btn-primary btn-large row">Get the band back together</a>
				</p>	
			</div>
			<div id="resultsDiv">
				<p id="paragraph"></p>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript" src="js/lib/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="js/lib/jquery.tools.min.js"></script>
<script type="text/javascript" src="js/lib/bootstrap.min.js"></script>
<script type="text/javascript" src="js/lib/puremvc-1.0.1.js"></script>
<script type="text/javascript">
$(document).ready(function () {
	$("#introDiv").show();
	$("#resultsDiv").hide();
});

$("#testClicker").click(function(){
	//This url isused for searching twitter by KEY word
	// var url = "http://search.twitter.com/search.json?q=" + $("#search_feild").val() + "&rpp=5&include_entities=true&result_type=mixed";
	//This url is used to search by user name - RESTful-
	var url = "https://api.twitter.com/1/users/lookup.json?user_id=182810585&include_entities=true";
	//Some User ID's to use
	// "185418292",
	// "259489080",
	// "550392014", 
	// "182810585", 
	// "414398219", 
	// "14691200", 
	// "343132137", 
	// "18825961" 

		//Twitter search call
		$.ajax({
			url: url,
			type: "GET",
			dataType: "jsonp",
			success: function(data){
				console.log(data);
			//do something with results
				// var randomNum = Math.ceil(Math.random()* data.contents.results.length)
				// console.log(randomNum);
				// for (var i = data.contents.results.length - 1; i >= 0; i--) {
				// 	console.log(data.contents.results[i].from_user_id);
				// };
				// if ($("#paragraph").html() == ""){
				// 	$("#paragraph").html(data.contents.text + " ");
				// }
				// else{
				// 	$("#paragraph").append(data.contents.text + " ");
				// }
				// $("#introDiv").hide();
				// $("#resultsDiv").show();
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log("jqXHR: " + jqXHR + "textStatus: " + textStatus + "errorThrown: " +  errorThrown);
			}
		});
	});
$.ajax({
	url: "http://www.kreden.com/SocialPopularity/index.php",
	type: "GET",
	//dataType: "jsonp",
	success: function(data){
		console.log(data);
	},
	error: function(jqXHR, textStatus, errorThrown){
		console.log("jqXHR: " + jqXHR + "textStatus: " + textStatus + "errorThrown: " +  errorThrown);
	}
});

</script>

</body>
</html>
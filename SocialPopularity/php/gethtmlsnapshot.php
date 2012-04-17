<?php

$escaped_fragment = $_GET["_escaped_fragment_"];
echo $escaped_fragment;
$exploder = explode("&", $escaped_fragment);
$length = count($exploder);
for($i = 0; $i < $length; $i++)
{
	echo $exploder[$i];
}

flush();

?>
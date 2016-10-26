<?php

try{
	$json = json_decode(file_get_contents("config.json"), true);
	define('API_USERNAME', $json['username']);
	define('API_PASSWORD', $json['password']);
	unset($json);
}catch(Exception $e)
{
	die('API borked, geen valid config.json gevonden.');
}


require_once "libs/NS.php";
require_once "Trein.php";

$ns = new NS( new curl( new user( API_USERNAME, API_PASSWORD ) ) );

/* Gore, look away */
function NS()
{
	global $ns;
	return $ns;
}


$departures = NS()->getDepartures('Buitenpost');
$treinen = [];

foreach($departures->VertrekkendeTrein as $treinRow)
{
	$trein = new Trein('Buitenpost' , $treinRow);
	$trein->getRealtimeData();

	$treinen[] = $trein;

}

echo (json_encode($treinen, JSON_PRETTY_PRINT));


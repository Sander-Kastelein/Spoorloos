<?php

class Trein
{


	public $ritNummer, $vertrekTijd, $eindBestemming, $vertekStation, $treinSoort, $routeTekst, $vervoerder, $vertrekSpoor;


	public function __construct($vertekStation, $row)
	{

		$this->ritNummer = (int)$row->RitNummer;
		$this->vertrekTijd = strtotime($row->VertrekTijd);
		$this->eindBestemming = (string)$row->EindBestemming;
		
		$this->vertekStation = (string)$vertekStation;

		$this->treinSoort = ucfirst((string)$row->TreinSoort);
		$this->routeTekst = (string)$row->RouteTekst;
		$this->vervoerder = (string)$row->Vervoerder;
		$this->vertrekSpoor = (string)$row->VertrekSpoor;

		$this->getRealtimeData();
	}


	public $geplandeReisTijd, $actueleReisTijd, $geplandeVertrekTijd, $actueleVertrekTijd, $geplandeAankomstTijd, $actueleAankomstTijd, $status, $aankomstSpoor;

	public function getRealtimeData()
	{
		$dt = date('c', $this->vertrekTijd);
		$advice = NS()->getAdvise($this->vertekStation, $this->eindBestemming, false, false, false, $dt);

		$general = $advice->ReisMogelijkheid;

		

		$this->geplandeReisTijd = (string)$general->GeplandeReisTijd;
		
		$this->actueleReisTijd = (string)$general->ActueleReisTijd;
		

		$this->geplandeVertrekTijd = strtotime((string)$general->GeplandeVertrekTijd);
		$this->actueleVertrekTijd = strtotime((string)$general->ActueleVertrekTijd);
		$this->geplandeAankomstTijd = strtotime((string)$general->GeplandeAankomstTijd);
		$this->actueleAankomstTijd = strtotime((string)$general->ActueleAankomstTijd);
		$this->status = (string)$general->Status;

		// Aankomst spoor
		$this->aankomstSpoor = '?';

	
		$this->aankomstSpoor = (string)end($general->ReisDeel->ReisStop);
	}

}
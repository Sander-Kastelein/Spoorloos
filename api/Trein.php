<?php

class Trein
{


	public $ritNummer, $vertrekTijd, $eindBestemming, $vertrekStation, $treinSoort, $routeTekst, $vervoerder, $vertrekSpoor;


	public function __construct($vertrekStation, $row)
	{

		$this->ritNummer = (int)$row->RitNummer;
		$this->vertrekTijd = strtotime($row->VertrekTijd);
		$this->eindBestemming = (string)$row->EindBestemming;
		
		$this->vertrekStation = (string)$vertrekStation;

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
		$advice = NS()->getAdvise($this->vertrekStation, $this->eindBestemming, false, false, false, $dt);

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

	
		if(isset($general->ReisDeel) && isset($general->ReisDeel->ReisStop))
		{
			$this->aankomstSpoor = (string)end($general->ReisDeel->ReisStop);
		}
	}

}
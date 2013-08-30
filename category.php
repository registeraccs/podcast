<?php
$rows[] = array(
		"category_id" => 0,
                "category_name"=> "Classic",
	);

$rows[] = array(
		"category_id" => 1,
                "category_name"=> "Instrument",
	);

$rows[] = array(
		"category_id" => 3,
                "category_name"=> "Movie",
	);

$data = array(
		"total" => 5,
		"start" =>0,
		"limit" =>25,
		"rows" => $rows
	);

echo json_encode($data);

<?php
$rows[] = array(
		"podcast_id" => 0,
        "podcast_name"=> "Aj Hoge",
        "podcast_thumbnail"=>"http://media3.ak.yelpcdn.com/bpthumb/JAifIRY9JIV_Z5IrrD102Q/ms",
        "podcast_type"=>0,
        "podcast_description"=>'<p><div style="float: left; text-align:center;"><img width="100px" height="100px" src="http://media2.ak.yelpcdn.com/bpthumb/LPp9JaaGjXYIhIxIIoBI0A/ms" style="margin: 5px 10px 5px 5px;"> 	    <div><span style="float: none" class="music-toal">5</span><span style="float: none" class="video-toal">10</span></div> 	</div> 	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat.  more  </p>',
        "podcast_category"=>"Classical Music",
        "podcast_subscribe"=>0,
        "episodes" => array(
        		"total"=> 8,	
                "unwatched"=>4	
        	)
	);

$rows[] = array(
		"podcast_id" => 1,
        "podcast_name"=> "Toiec",
        "podcast_thumbnail"=>"http://media3.ak.yelpcdn.com/bpthumb/K_23zz6O6SeN1gX8Y5h8hA/ms",
        "podcast_type"=>1,
        "podcast_description"=>'<p><div style="float: left; text-align:center;"><img width="100px" height="100px" src="http://media2.ak.yelpcdn.com/bpthumb/LPp9JaaGjXYIhIxIIoBI0A/ms" style="margin: 5px 10px 5px 5px;"> 	    <div><span style="float: none" class="music-toal">5</span><span style="float: none" class="video-toal">10</span></div> 	</div> 	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat.  more  </p>',
        "podcast_category"=>"Classical Music",
        "podcast_subscribe"=>1,
        "episodes" => array(
        		"total"=> 14,	
                "unwatched"=>6	
        	)
	);

$rows[] = array(
		"podcast_id" => 3,
        "podcast_name"=> "Michael",
        "podcast_thumbnail"=>"http://media2.ak.yelpcdn.com/bpthumb/hBZ6N-xVIR6kWM1JKBR-iw/ms",
        "podcast_type"=>0,
        "podcast_description"=>'<p><div style="float: left; text-align:center;"><img width="100px" height="100px" src="http://media2.ak.yelpcdn.com/bpthumb/LPp9JaaGjXYIhIxIIoBI0A/ms" style="margin: 5px 10px 5px 5px;"> 	    <div><span style="float: none" class="music-toal">5</span><span style="float: none" class="video-toal">10</span></div> 	</div> 	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat.  more  </p>',
        "podcast_category"=>"Classical Music",
        "podcast_subscribe"=>1,
        "episodes" => array(
        		"total"=> 9,	
                "unwatched"=>3	
        	)
	);

$data = array(
		"total" => 5,
		"start" =>0,
		"limit" =>25,
		"rows" => $rows
	);

echo json_encode($data);

<?php
$podcast_id = $_GET['podcast_id'];
if($podcast_id == 0){
        $rows[] = array(
        		"episode_id"=>0,
                        "episode_html"=>'<p><div style="float: left; text-align:center;"><img width="100px" height="100px" src="http://media3.ak.yelpcdn.com/bpthumb/JAifIRY9JIV_Z5IrrD102Q/ms" style="margin: 5px 10px 5px 5px;">          <div><span style="float: none" class="music-toal">5</span><span style="float: none" class="video-toal">10</span></div>      </div>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat.  more  </p>'
        	);

        $rows[] = array(
                        "episode_id"=>1,
                        "episode_name"=> "Hotel California",
                        "episode_thumbnail"=>"http://media3.ak.yelpcdn.com/bpthumb/JAifIRY9JIV_Z5IrrD102Q/ms",
                        "episode_html"=>'',
                        "episode_date"=>"1377525960",
                        "episode_duration"=>"05:23",
                        "episode_type"=>0,
                        "episode_description"=>"hom nay troi dep lam",
                        "episode_played"=>1,
                        "episode_time_played"=>20
                );

        $rows[] = array(
                        "episode_id"=>2,
                        "episode_name"=> "Ngay khong binh yen",
                        "episode_thumbnail"=>"http://media3.ak.yelpcdn.com/bpthumb/JAifIRY9JIV_Z5IrrD102Q/ms",
                        "episode_html"=>'',
                        "episode_date"=>"1377610404",
                        "episode_duration"=>"05:23",
                        "episode_type"=>1,
                        "episode_description"=>"hom nay troi dep lam",
                        "episode_played"=>0,
                        "episode_time_played"=>50
                );
} elseif ($podcast_id == 1) {
        $rows[] = array(
                        "episode_id"=>0,
                        "episode_html"=>'<p><div style="float: left; text-align:center;"><img width="100px" height="100px" src="http://media3.ak.yelpcdn.com/bpthumb/K_23zz6O6SeN1gX8Y5h8hA/ms" style="margin: 5px 10px 5px 5px;">          <div><span style="float: none" class="music-toal">5</span><span style="float: none" class="video-toal">10</span></div>      </div>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat.  more  </p>'
                );

        $rows[] = array(
                        "episode_id"=>1,
                        "episode_name"=> "Tinh ca cho em",
                        "episode_thumbnail"=>"http://media3.ak.yelpcdn.com/bpthumb/K_23zz6O6SeN1gX8Y5h8hA/ms",
                        "episode_html"=>'',
                        "episode_date"=>"1377525960",
                        "episode_duration"=>"05:23",
                        "episode_type"=>0,
                        "episode_description"=>"hom nay troi dep lam",
                        "episode_played"=>1,
                        "episode_time_played"=>20
                );

        $rows[] = array(
                        "episode_id"=>2,
                        "episode_name"=> "Thanh pho buon",
                        "episode_thumbnail"=>"http://media3.ak.yelpcdn.com/bpthumb/K_23zz6O6SeN1gX8Y5h8hA/ms",
                        "episode_html"=>'',
                        "episode_date"=>"1377610404",
                        "episode_duration"=>"05:23",
                        "episode_type"=>1,
                        "episode_description"=>"hom nay troi dep lam",
                        "episode_played"=>0,
                        "episode_time_played"=>50
                );
        $rows[] = array(
                        "episode_id"=>3,
                        "episode_name"=> "Sao em no voi lay chong",
                        "episode_thumbnail"=>"http://media3.ak.yelpcdn.com/bpthumb/K_23zz6O6SeN1gX8Y5h8hA/ms",
                        "episode_html"=>'',
                        "episode_date"=>"1377525960",
                        "episode_duration"=>"05:23",
                        "episode_type"=>0,
                        "episode_description"=>"hom nay troi dep lam",
                        "episode_played"=>1,
                        "episode_time_played"=>20
                );

        $rows[] = array(
                        "episode_id"=>4,
                        "episode_name"=> "Em di chua huong",
                        "episode_thumbnail"=>"http://media3.ak.yelpcdn.com/bpthumb/K_23zz6O6SeN1gX8Y5h8hA/ms",
                        "episode_html"=>'',
                        "episode_date"=>"1377610404",
                        "episode_duration"=>"05:23",
                        "episode_type"=>1,
                        "episode_description"=>"hom nay troi dep lam",
                        "episode_played"=>0,
                        "episode_time_played"=>50
                );
        $rows[] = array(
                        "episode_id"=>5,
                        "episode_name"=> "Nguoi ngoai pho",
                        "episode_thumbnail"=>"http://media3.ak.yelpcdn.com/bpthumb/K_23zz6O6SeN1gX8Y5h8hA/ms",
                        "episode_html"=>'',
                        "episode_date"=>"1377525960",
                        "episode_duration"=>"05:23",
                        "episode_type"=>0,
                        "episode_description"=>"hom nay troi dep lam",
                        "episode_played"=>1,
                        "episode_time_played"=>20
                );

        $rows[] = array(
                        "episode_id"=>6,
                        "episode_name"=> "Bai thanh ca buon",
                        "episode_thumbnail"=>"http://media3.ak.yelpcdn.com/bpthumb/K_23zz6O6SeN1gX8Y5h8hA/ms",
                        "episode_html"=>'',
                        "episode_date"=>"1377610404",
                        "episode_duration"=>"05:23",
                        "episode_type"=>1,
                        "episode_description"=>"hom nay troi dep lam",
                        "episode_played"=>0,
                        "episode_time_played"=>50
                );
} else {
        $rows[] = array(
                        "episode_id"=>0,
                        "episode_html"=>'<p><div style="float: left; text-align:center;"><img width="100px" height="100px" src="http://media2.ak.yelpcdn.com/bpthumb/hBZ6N-xVIR6kWM1JKBR-iw/ms" style="margin: 5px 10px 5px 5px;">          <div><span style="float: none" class="music-toal">5</span><span style="float: none" class="video-toal">10</span></div>      </div>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat.  more  </p>'
                );

        $rows[] = array(
                        "episode_id"=>1,
                        "episode_name"=> "Noi tinh yeu bat dau",
                        "episode_thumbnail"=>"http://media2.ak.yelpcdn.com/bpthumb/hBZ6N-xVIR6kWM1JKBR-iw/ms",
                        "episode_html"=>'',
                        "episode_date"=>"1377525960",
                        "episode_duration"=>"05:23",
                        "episode_type"=>0,
                        "episode_description"=>"hom nay troi dep lam",
                        "episode_played"=>1,
                        "episode_time_played"=>20
                );

        $rows[] = array(
                        "episode_id"=>2,
                        "episode_name"=> "Dem thanh pho day sao",
                        "episode_thumbnail"=>"http://media2.ak.yelpcdn.com/bpthumb/hBZ6N-xVIR6kWM1JKBR-iw/ms",
                        "episode_html"=>'',
                        "episode_date"=>"1377610404",
                        "episode_duration"=>"05:23",
                        "episode_type"=>1,
                        "episode_description"=>"hom nay troi dep lam",
                        "episode_played"=>0,
                        "episode_time_played"=>50
                );
}

$data = array(
		"total" => 5,
		"start" =>0,
		"limit" =>25,
		"rows" => $rows
	);

echo json_encode($data);

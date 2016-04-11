<?php

$values = shortcode_atts(array(
	'type' => 'primary'
), $atts);

if($values['type'] == 'primary') {
	$socialType = 'social_image_primary';
}
else if($values['type'] == 'secondary') {
	$socialType = 'social_image_secondary';
}
else{
	$socialType = 'social_image_primary';
}

?>

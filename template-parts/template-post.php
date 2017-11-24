<?php
/**
 * Template Name: Posts Page
 *
 * @package WordPress
 * @subpackage Custom
 * @since Custom
 */
 $args = array(
 	'numberposts' => 10,
 	'offset' => 0,
 	'category' => 0,
 	'orderby' => 'post_date',
 	'order' => 'DESC',
 	'include' => '',
 	'exclude' => '',
 	'meta_key' => '',
 	'meta_value' =>'',
 	'post_type' => 'post',
 	'post_status' => 'draft, publish, future, pending, private',
 	'suppress_filters' => true
 );

 $recent_posts = wp_get_recent_posts( $args, ARRAY_A );

 ?>
 <h1>POSTS PAGE DUDE</h1>
 <h2>Recent Posts</h2>
 <ul>
 <?php
 	$recent_posts = wp_get_recent_posts();
 	foreach( $recent_posts as $recent ){
 		echo '<li><a href="' . get_permalink($recent["ID"]) . '">' .   $recent["post_title"].'</a> </li> ';
 	}
 	wp_reset_query();
 ?>
 </ul>

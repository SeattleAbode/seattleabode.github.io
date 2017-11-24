<?php
/**
 * Displays header media
 *
 * @package WordPress
 * @subpackage Custom
 * @since 1.0
 * @version 1.0
 */

?>
<div id="banner-container">
	<div id="title-container">
		<a href="<?php echo home_url(); ?>"><div id="brand-name"></div></a>
	</div> <!-- #title-container-->
	<div class="renaissance-header">

	</div><!-- .renaissance-header -->
</div> <!-- #banner-container -->
<?php
if(is_front_page()){
	get_template_part( 'template-parts/template-nav' );
};
?>

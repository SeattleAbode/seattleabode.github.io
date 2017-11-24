<?php
/**
 * The front page template file
 *
 * If the user has selected a static page for their homepage, this is what will
 * appear.
 * Learn more: https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage abode-theme
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>
<div id="primary" class="content-area">
	<main id="main test" class="site-main" role="main">
		<div id="main-content">
			<div id="overlay"></div>
			<?php
			get_template_part('template-parts/template-properties' );
			get_template_part('template-parts/template-saxony1');
			get_template_part('template-parts/template-saxony2');
			get_template_part('template-parts/template-saxony3');
			get_template_part('template-parts/template-tobira');
			get_template_part('template-parts/template-sunset');
			get_template_part('template-parts/template-clients');
			?>
		</div>
	</main><!-- #main -->
</div><!-- #primary -->

<?php get_footer();

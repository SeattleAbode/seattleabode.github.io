<?php
/**
 * Template Name: Home Page
 *
 * @package WordPress
 * @subpackage Custom
 * @since Custom
 */

?>
<?php echo "hello"; ?>
<div id="banner-container">
	<div id="title-container">
		<h1 id="brand-name">Rennaissance Housing</h1>
	</div> <!-- #title-container-->
	<div class="renaissance-header">

	</div><!-- .custom-header -->
</div> <!-- #banner-container -->
<div id="prop-wrap">
  <ul id="prop-container">
    <li class="prop-block">
      <a href="" target="_blank">
        <div class="prop-content">
          <h2>Condo 1</h2>
        </div>
      </a>
    </li>
    <li class="prop-block">
      <a href="" target="_blank">
        <div class="prop-content">
          <h2>Condo 2</h2>
        </div>
      </a>
    </li>
    <li class="prop-block">
      <a href="" target="_blank">
        <div class="prop-content">
          <h2>Condo 3</h2>
        </div>
      </a>
    </li>
    <li class="prop-block">
      <a href="" target="_blank">
        <div class="prop-content">
          <h2>Condo 4</h2>
        </div>
      </a>
    </li>
    <li class="prop-block">
      <a href="" target="_blank">
        <div class="prop-content">
          <h2>Condo 5</h2>
        </div>
      </a>
    </li>
  </ul>
</div>
<?php
if ( have_posts() ) :

  /* Start the Loop */
  while ( have_posts() ) : the_post();

    /*
     * Include the Post-Format-specific template for the content.
     * If you want to override this in a child theme, then include a file
     * called content-___.php (where ___ is the Post Format name) and that will be used instead.
     */
    get_template_part( 'template-parts/post/content', get_post_format() );

  endwhile;

  the_posts_pagination( array(
    'prev_text' => twentyseventeen_get_svg( array( 'icon' => 'arrow-left' ) ) . '<span class="screen-reader-text">' . __( 'Previous page', 'twentyseventeen' ) . '</span>',
    'next_text' => '<span class="screen-reader-text">' . __( 'Next page', 'twentyseventeen' ) . '</span>' . twentyseventeen_get_svg( array( 'icon' => 'arrow-right' ) ),
    'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'twentyseventeen' ) . ' </span>',
  ) );

else :

  get_template_part( 'template-parts/post/content', 'none' );

endif;
?>

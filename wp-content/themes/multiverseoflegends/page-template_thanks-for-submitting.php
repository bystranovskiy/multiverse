<?php /* Template Name: Thanks for submitting */ ?>

<?php get_header(); ?>
    <main id="primary" class="site-main">
        <section class="section-thanks-for-submitting">
            <div class="container">
                <div class="checkViewport fadeIn">
                    <?php the_content();?>
                </div>
                <div class="buttons checkViewport fadeIn">
                    <a class="btn" href="<?php the_field('twitter_url', 'option');?>" target="_blank"><?php echo __("Subscribe to Twitter", "multiverseoflegends");?></a>
                    <a class="btn btn--secondary" href="<?php echo apply_filters( 'wpml_home_url', get_option( 'home' ) );?>" target="_self"><?php echo __("Back to main page", "multiverseoflegends");?></a>
                </div>
            </div>

        </section>
    </main>
<?php
get_footer();
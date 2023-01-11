<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package multiverseoflegends
 */

get_header();
?>

    <main id="primary" class="site-main">
        <div class="page-bg"></div>
        <section class="error-404 not-found">
            <div class="container">
                <div class="section-content">
                    <div class="section-top-image">
                        <img src="<?php echo THEME_URI . '/src/img/contact-us-img-01-min.png'; ?>"
                             alt="contact-us - img-01" width="535" height="623">
                    </div>
                    <div class="content-wrapper">
                        <h1><em>404</em></h1>
                        <h2><em><?php echo __('Oooops! There is nothing found', 'multiverseoflegends'); ?></em></h2>
                    </div>
                    <div class="section-under-image">
                        <img src="<?php echo THEME_URI . '/src/img/contact-us-img-02-min.png'; ?>"
                             alt="contact-us - img-02" width="610" height="364">
                    </div>
                </div>
            </div>
        </section>

    </main>

<?php wp_footer(); ?>
</div>
</body>
</html>

<?php get_header(); ?>

<?php if (have_rows('page_builder')):
    $layouts = []; ?>

    <main>
        <?php while (have_rows('page_builder')) : the_row();
            $row = get_row_layout();
            get_template_part('/template-parts/sections/' . $row);
            if (!in_array($row, $layouts)) {
                $layouts[] = $row;
            }
        endwhile; ?>
    </main>

    <?php
    // enqueue slick if needed
    if (in_array_any(['join', 'evolution', 'products'], $layouts)) {
        wp_enqueue_style('slick', THEME_URI . '/src/vendors/slick/slick.css', array());
        wp_enqueue_script('slick', THEME_URI . '/src/vendors/slick/slick.min.js', array('jquery'));
    }

    // enqueue sections css and js
    enqueue_sections_build($layouts);

endif; ?>
<?php
get_footer();

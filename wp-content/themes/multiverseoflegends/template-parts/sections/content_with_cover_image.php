<?php
$image = get_sub_field('image');
$anchor = get_sub_field('anchor');
?>

<section class="content_with_cover_image"<?php echo $anchor ? ' data-anchor="' . $anchor . '"' : '' ?><?php if ($image) { ?> style="background-image:url(<?php echo esc_url($image['sizes']['2048x2048']); ?>)"<?php } ?>>
    <div class="container">
        <div class="section-content<?php echo get_sub_field('content_position') === 'center' ? ' align-center' : ''; ?>">
            <?php the_sub_field('content'); ?>
        </div>
    </div>
</section>

<section class="about"<?php if (get_sub_field('anchor')) { ?> data-anchor="<?php the_sub_field('anchor'); ?>"<?php } ?>>
    <div class="container">
        <div class="section-content"><?php the_sub_field('content'); ?></div>

        <div class="section-info">
            <?php
            $image = get_sub_field('image');
            if ($image): ?>
                <div class="block-image">
                    <div class="image-wrapper">
                        <img src="<?php echo esc_url($image['sizes']['large']); ?>"
                             alt="<?php echo esc_attr($image['alt']); ?>"
                             width="<?php echo esc_attr($image['width']); ?>"
                             height="<?php echo esc_attr($image['height']); ?>"/>
                    </div>
                </div>
            <?php endif; ?>

            <?php if (have_rows('items')): ?>
                <div class="block-list">
                    <?php while (have_rows('items')): the_row(); ?>
                        <div class="list-item">

                            <div class="item-title">
                                <?php
                                $image = get_sub_field('icon');
                                if ($image): ?>
                                    <div class="item-image checkViewport fadeIn">
                                        <img src="<?php echo esc_url($image['sizes']['large']); ?>"
                                             alt="<?php echo esc_attr($image['alt']); ?>"
                                             width="<?php echo esc_attr($image['width']); ?>"
                                             height="<?php echo esc_attr($image['height']); ?>"/>
                                    </div>
                                <?php endif; ?>
                                <h3><em><?php the_sub_field('title'); ?></em></h3>
                            </div>
                            <p class="item-description checkViewport fadeIn"><?php the_sub_field('description'); ?></p>

                        </div>
                    <?php endwhile; ?>
                </div>
            <?php endif; ?>


        </div>

    </div>
</section>

<section
        class="evolution"<?php if (get_sub_field('anchor')) { ?> data-anchor="<?php the_sub_field('anchor'); ?>"<?php } ?>>
    <div class="container">
        <div class="section-content"><?php the_sub_field('content'); ?></div>
        <?php $items = get_sub_field('items');
        if (have_rows('items')):
            $itemsCount = count($items); ?>
            <div class="items-list">
                <div class="items-scroll-status">
                    <div class="scrollbar-track"></div>
                    0<i class="current-slide">1</i>/<span>0<?php echo $itemsCount;?></span>
                </div>
                <div class="items-list-inner">
                    <?php $i = 1; while (have_rows('items')): the_row(); ?>
                        <div class="item checkViewport fadeIn">
                            <?php
                            $image = get_sub_field('image');
                            if ($image): ?>
                                <div class="item-image">
                                    <img src="<?php echo esc_url($image['sizes']['large']); ?>"
                                         alt="<?php echo esc_attr($image['alt']); ?>"
                                         width="<?php echo esc_attr($image['width']); ?>"
                                         height="<?php echo esc_attr($image['height']); ?>"/>
                                </div>
                            <?php endif; ?>
                            <div class="item-num"><?php echo '0' . $i; ?></div>
                            <h4 class="item-title"><?php the_sub_field('title'); ?></h4>
                            <p><?php the_sub_field('description'); ?></p>
                        </div>
                    <?php $i++; endwhile; ?>
                </div>
            </div>

        <?php endif; ?>
    </div>
</section>

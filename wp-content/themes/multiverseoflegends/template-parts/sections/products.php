<section
        class="products"<?php if (get_sub_field('anchor')) { ?> data-anchor="<?php the_sub_field('anchor'); ?>"<?php } ?>>
    <div class="container">
        <div class="section-content">
            <?php the_sub_field('content'); ?>
        </div>
        <?php $items = get_sub_field('items');
        if (have_rows('items')):
            $itemsCount = count($items); ?>
            <div class="items-list">
                <div class="items-scroll-status">
                    <div class="scrollbar-track"></div>
                    0<i class="current-slide">1</i>/<span>0<?php echo $itemsCount;?></span>
                </div>
                <div class="items-list-inner">
                    <?php while (have_rows('items')): the_row(); ?>
                        <div class="item checkViewport fadeIn">
                            <div class="item-inner">
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
                                <h4 class="item-title">
                                    <em><?php the_sub_field('title'); ?></em><br/><?php echo __('member card','multiverseoflegends')?>
                                </h4>
                                <div class="item-description"><?php the_sub_field('description'); ?></div>
                                <div class="item-price-btn-wrapper">
                                    <div class="item-price"><b><?php the_sub_field('price'); ?></b> <?php echo __('ETH', 'multiverseoflegends')?></div>
                                    <?php
                                    $link = get_sub_field('button');
                                    if ($link):
                                        $link_url = $link['url'];
                                        $link_title = $link['title'];
                                        $link_target = $link['target'] ?: '_self';
                                        ?>
                                        <a class="btn btn--sm" href="<?php echo esc_url($link_url); ?>"
                                           target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?></a>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    <?php endwhile; ?>
                </div>
            </div>
        <?php endif; ?>
        <div class="remark checkViewport fadeIn"><?php the_sub_field('remark'); ?></div>
    </div>
</section>

<section class="roadmap collapsed"<?php if (get_sub_field('anchor')) { ?> data-anchor="<?php the_sub_field('anchor'); ?>"<?php } ?>>
    <div class="container">
        <div class="section-content">
            <?php the_sub_field('content'); ?>
        </div>

        <?php $items = get_sub_field('items');
        if (have_rows('items')):
            $itemsCount = count($items); ?>
            <div class="roadmap-list checkViewport fadeIn<?php echo $itemsCount % 2 === 0 ? ' even-num' : ' odd-num'; ?>">
                <?php while (have_rows('items')): the_row(); ?>

                    <div class="roadmap-item">
                        <div class="inner-wrapper">
                            <h4 class="item-title">
                                <?php the_sub_field('title'); ?>/<em><?php the_sub_field('year'); ?></em>
                            </h4>
                            <?php if (have_rows('stages')): ?>
                                <div class="item-description">
                                    <ul>
                                        <?php while (have_rows('stages')): the_row(); ?>
                                            <li<?php if (get_sub_field('completed')) { ?> class="completed"<?php } ?>><?php the_sub_field('description'); ?></li>
                                        <?php endwhile; ?>
                                    </ul>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>

                <?php endwhile; ?>
            </div>
            <div class="items-scroll-status"><div class="scrollbar-track"></div></div>
        <?php endif; ?>
    </div>

    <div class="btn btn-show-more"><?php echo __('Show more','multiverseoflegends');?></div>

</section>

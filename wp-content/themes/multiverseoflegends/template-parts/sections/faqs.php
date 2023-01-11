<section class="faqs"<?php if (get_sub_field('anchor')) { ?> data-anchor="<?php the_sub_field('anchor'); ?>"<?php } ?>>
    <div class="container">
        <div class="section-content"><?php the_sub_field('content'); ?></div>
        <?php if (have_rows('items')): ?>
            <div class="faqs-list">
                <?php while (have_rows('items')): the_row(); ?>
                    <div class="faqs-list-item checkViewport fadeIn">
                        <div class="faqs-list-item-question">
                            <div class="h5">
                                <svg preserveAspectRatio="none" height="14" viewBox="0 0 254 14" fill="none">
                                    <path d="M1 12C48.98 7.83384 184.094 -5.91494 253 8.25974" stroke="#FEC800" stroke-width="4"/>
                                </svg>
                                <span><?php the_sub_field('title'); ?></span>
                            </div>
                            <div class="ico"></div>
                        </div>
                        <div class="faqs-list-item-answer">
                            <p><?php the_sub_field('description'); ?></p>
                        </div>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
    </div>
</section>

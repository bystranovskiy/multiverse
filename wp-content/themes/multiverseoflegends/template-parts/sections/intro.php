<section class="intro"<?php if (get_sub_field('anchor')) { ?> data-anchor="<?php the_sub_field('anchor'); ?>"<?php } ?>>
    <?php
    $image = get_sub_field('image');
    if ($image): ?>
        <img class="intro-img checkViewport fadeIn" src="<?php echo esc_url($image['sizes']['large']); ?>"
             alt="<?php echo esc_attr($image['alt']); ?>"
             width="<?php echo esc_attr($image['width'] / 2); ?>"
             height="<?php echo esc_attr($image['height'] / 2); ?>"/>
    <?php endif; ?>
    <div class="container">
        <div class="intro-content">
            <div class="content checkViewport fadeIn"><?php the_sub_field('content'); ?></div>

            <div class="buttons checkViewport fadeIn">
                <?php
                $link = get_sub_field('button_primary');
                if ($link):
                    $link_url = $link['url'];
                    $link_title = $link['title'];
                    $link_target = $link['target'] ?: '_self';
                    ?>
                    <a class="btn" href="<?php echo esc_url($link_url); ?>"
                       target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?></a>
                <?php endif; ?>
                <?php
                $link = get_sub_field('button_secondary');
                if ($link):
                    $link_url = $link['url'];
                    $link_title = $link['title'];
                    $link_target = $link['target'] ?: '_self';
                    ?>
                    <a class="btn btn--secondary" href="<?php echo esc_url($link_url); ?>"
                       target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?></a>
                <?php endif; ?>
            </div>
        </div>
</section>

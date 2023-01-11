<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package multiverseoflegends
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-JSHDL95KZ4"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JSHDL95KZ4');
    </script>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo THEME_URI;?>/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo THEME_URI;?>/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo THEME_URI;?>/favicon/favicon-16x16.png">
    <link rel="manifest" href="<?php echo THEME_URI;?>/favicon/site.webmanifest">
    <link rel="mask-icon" href="<?php echo THEME_URI;?>/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">

    <header>
        <div class="container">
            <div class="row">
                <div class="col col-logo">
                    <?php echo get_custom_logo(); ?>
                </div>

                <div class="col col-content">
                    <nav>
                        <div class="row">

                            <div class="col">
                                <?php
                                wp_nav_menu(
                                    array(
                                        'theme_location' => 'menu-1',
                                        'menu_id' => 'primary-menu',
                                    )
                                ); ?>
                            </div>

                            <?php
                            $discord = get_field('discord_url', 'option');
                            $twitter = get_field('twitter_url', 'option');
                            if ($discord || $twitter):?>
                                <div class="col col-social">
                                    <ul>
                                        <?php if ($discord): ?>
                                            <li>
                                                <a href="<?php echo $discord; ?>" target="_blank">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14"
                                                         viewBox="0 0 18 14">
                                                        <path d="M15.2378 1.24668C14.0905 0.720273 12.8602 0.332437 11.5739 0.110307C11.5505 0.10602 11.5271 0.116733 11.515 0.138161C11.3568 0.419572 11.1815 0.786696 11.0588 1.07525C9.6753 0.868127 8.29889 0.868127 6.94374 1.07525C6.82099 0.780282 6.63936 0.419572 6.48043 0.138161C6.46836 0.117448 6.44496 0.106735 6.42154 0.110307C5.13593 0.331727 3.90567 0.719564 2.7577 1.24668C2.74776 1.25097 2.73924 1.25812 2.73359 1.2674C0.400044 4.75367 -0.239213 8.15425 0.0743851 11.5127C0.075804 11.5291 0.0850274 11.5448 0.0977985 11.5548C1.63741 12.6855 3.12878 13.3719 4.59246 13.8268C4.61588 13.834 4.6407 13.8254 4.65561 13.8061C5.00184 13.3333 5.31048 12.8348 5.57511 12.3105C5.59072 12.2798 5.57582 12.2433 5.5439 12.2312C5.05435 12.0455 4.5882 11.8191 4.1398 11.562C4.10433 11.5412 4.10149 11.4905 4.13412 11.4662C4.22848 11.3955 4.32286 11.3219 4.41297 11.2477C4.42927 11.2341 4.45198 11.2312 4.47115 11.2398C7.41696 12.5848 10.6062 12.5848 13.5172 11.2398C13.5364 11.2305 13.5591 11.2334 13.5761 11.247C13.6662 11.3212 13.7606 11.3955 13.8557 11.4662C13.8883 11.4905 13.8862 11.5412 13.8507 11.562C13.4023 11.8241 12.9361 12.0455 12.4459 12.2305C12.414 12.2426 12.3998 12.2798 12.4154 12.3105C12.6857 12.834 12.9943 13.3326 13.3342 13.8054C13.3484 13.8254 13.3739 13.834 13.3973 13.8268C14.8681 13.3719 16.3595 12.6855 17.8991 11.5548C17.9126 11.5448 17.9211 11.5298 17.9225 11.5134C18.2978 7.63068 17.2939 4.25798 15.2612 1.26811C15.2562 1.25812 15.2477 1.25097 15.2378 1.24668ZM6.01502 9.46774C5.12812 9.46774 4.39735 8.65351 4.39735 7.65354C4.39735 6.65358 5.11395 5.83935 6.01502 5.83935C6.92315 5.83935 7.64686 6.66073 7.63266 7.65354C7.63266 8.65351 6.91606 9.46774 6.01502 9.46774ZM11.9961 9.46774C11.1092 9.46774 10.3784 8.65351 10.3784 7.65354C10.3784 6.65358 11.095 5.83935 11.9961 5.83935C12.9042 5.83935 13.6279 6.66073 13.6137 7.65354C13.6137 8.65351 12.9042 9.46774 11.9961 9.46774Z"
                                                              fill="white"/>
                                                    </svg>
                                                </a>
                                            </li>
                                        <?php endif; ?>
                                        <?php if ($twitter): ?>
                                            <li>
                                                <a href="<?php echo $twitter; ?>" target="_blank">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"
                                                         width="18px"
                                                         height="18px">
                                                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"
                                                              fill="white"/>
                                                    </svg>
                                                </a>
                                            </li>
                                        <?php endif; ?>
                                    </ul>
                                </div>
                            <?php endif; ?>

                            <div class="col col-lang-switcher">
                                <?php do_action('wpml_add_language_selector');?>
                            </div>


                            <div class="col col-buttons">
                                <ul>
                                    <?php
                                    $link = get_field('whitepaper_button', 'option');
                                    if ($link):
                                        $link_url = $link['url'];
                                        $link_title = $link['title'];
                                        $link_target = $link['target'] ? $link['target'] : '_self';
                                        ?>
                                        <li><a class="btn btn--sm btn--secondary"
                                               href="<?php echo esc_url($link_url); ?>"
                                               target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?></a>
                                        </li>
                                    <?php endif; ?>

                                    <?php
                                    $link = get_field('whitelist_button', 'option');
                                    if ($link):
                                        $link_url = $link['url'];
                                        $link_title = $link['title'];
                                        $link_target = $link['target'] ? $link['target'] : '_self';
                                        ?>
                                        <li>
                                            <a class="btn btn--sm" href="<?php echo esc_url($link_url); ?>"
                                               target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?></a>
                                        </li>
                                    <?php endif; ?>
                                </ul>
                            </div>
                        </div>
                    </nav><!-- #site-navigation -->
                </div>

                <div class="col col-mobile-menu-toggle">
                    <div class="toggle">
                        <span></span>
                    </div>
                </div>

            </div>
        </div>

    </header><!-- #masthead -->

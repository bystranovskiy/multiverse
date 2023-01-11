<?php

/**
 * Definition of global variables
 */

defined('THEME_URI') || define('THEME_URI', get_template_directory_uri());
defined('THEME_DIR') || define('THEME_DIR', get_template_directory());


/**
 * Enqueue theme global css and js
 */

function enqueue_theme_build()
{
    wp_enqueue_style('main-styles', THEME_URI . '/build/main.min.css', array());
    wp_enqueue_script('main-script', THEME_URI . '/build/main.min.js', array('jquery'));

    if ( is_404() ) {
        wp_enqueue_style('404-styles', THEME_URI . '/build/error404.min.css', array());
    }

    if ( is_page_template('page-template_thanks-for-submitting.php') ) {
        wp_enqueue_style('page-thanks-for-submitting', THEME_URI . '/build/page-thanks-for-submitting.min.css', array());
    }
}
add_action('wp_enqueue_scripts', 'enqueue_theme_build');


/**
 * Enqueue sections css and js
 */

function enqueue_sections_build($layouts)
{
    foreach ($layouts as $layout) {
        $css_file_path = '/build/section-' . $layout . '.min.css';
        $css_file_path_url = THEME_URI . $css_file_path;
        $css_file_path_dir = THEME_DIR . $css_file_path;
        if (file_exists($css_file_path_dir) && file_get_contents($css_file_path_dir)) {
            wp_enqueue_style('section-' . $layout, $css_file_path_url, array());
        }

        $js_file_path = '/build/section-' . $layout . '.min.js';
        $js_file_path_url = THEME_URI . $js_file_path;
        $js_file_path_dir = THEME_DIR . $js_file_path;
        if (file_exists($js_file_path_dir) && file_get_contents($js_file_path_dir)) {
            wp_enqueue_script('section-' . $layout, $js_file_path_url, array('jquery'));
        }
    }
}


/**
 * Init ACF theme option page
 */

function init_acf_option()
{
    if (function_exists('acf_add_options_page')) {
        // Add parent.
        $parent = acf_add_options_page(array(
            'page_title' => __('Загальні опції', 'kapsul'),
            // 'menu_title' => 'Theme Settings',
            'menu_slug' => 'theme-general-settings',
            'capability' => 'edit_posts',
            'redirect' => false,
        ));
        // Add sub pages.
        /*acf_add_options_page(array(
            'page_title' => __('Дочірні опції', 'kapsul'),
            'menu_slug' => 'child-options',
            'parent_slug' => $parent['menu_slug'],
        ));*/
    }
}
add_action('acf/init', 'init_acf_option');


function in_array_any($needles, $haystack): bool
{
    return (bool)array_intersect($needles, $haystack);
}
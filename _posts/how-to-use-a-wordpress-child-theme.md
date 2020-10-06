---
title: "How To Use A Wordpress Child Theme"
date: "2017-08-06"
---

If you think about your [Wordpress](https://en.wikipedia.org/wiki/WordPress) site, what controls your site's behaviours, functionality and look, is your theme.

So, if you want to change looks and behaviours of your site, you have to change or modify your [Wordpress theme](https://redq.io/blog/wordpress-restaurant-theme/).

At this point, the role of the [child theme](https://codex.wordpress.org/Child_Themes) comes into play. A child theme is nothing but the mirror of your original theme. By other means, the child theme augments the look or functionality of the original theme.

In this article, we will dig into the details of the child theme like how to use a WordPress child theme. After going through the whole article you will learn about how to create child theme and its details functionalities.

# Why should we use a Child Theme?

As a theme developer for any amount of time being , you will know the importantance of using a child theme when building upon an existing theme . Your future headache of adjustments to your theme’s code will decrease for sure.

**Let's have a look at some other reasons:**

- If you customize a theme directly and later the theme get updated, your customization may be in great danger . By using a child theme you can ensure your safety that your customization's are preserved.
- A child theme can increase your speed in development time.
- Customizing a child theme is a proper way to start learning about WordPress theme development.
- You have the freedom of deactivating the child theme and return back to original theme anytime.

## ![How to use a WordPress child theme-Create](/assets/blog/images/How-to-use-a-WordPress-child-theme-Create.jpg)

## How to Create a Child Theme?

**There are two different ways.**

1. Creating a Child Theme Manually
2. Creating a Child Theme Using Third Party Plugin

In this articles, we will briefly discuss about creating the child theme manually. But if you are short in time, you can also use some free plugins available in the [wordpress.org](https://wordpress.org/) for creating a child theme quickly.

So, let's start our day meal :).

Creating a child theme is not as difficult as putting the ball in the basket :). For creating a child theme, you have to create at least one directory and two files.

- The child theme directory
- style.css
- functions.php

**Make sure your parent theme is present in the Appearance > Themes page, otherwise it will not work.**

![Themes-page-How-to-use-a-WordPress-child-theme Appearance](/assets/blog/images/Appearance-Themes-page-How-to-use-a-WordPress-child-theme.jpg)

Here, [**twenty seventeen**](https://wordpress.org/themes/twentyseventeen/) is the child theme and we created the child theme directory named **twenty seventeen-child**. Then we created a two files under this directory style.css and functions .php.

## How to use a WordPress child theme?

Now, go to your style.css file and put the following code

\[php\] /\* Theme Name: Twenty seventeen Child Theme URI: http://yourwebsite.com/twentyseventeen-child/ Description: My first child theme, based on Twenty seventeen Author: REDQ TEAM Author URI: http://redq.io Template: twentyseventeen Version: 1.0.0 Tags: black, green, white, light, dark, two-columns, three-columns, left-sidebar, right-sidebar, fixed-layout, responsive-layout, custom-background, custom-header, custom-menu, editor-style, featured-images, flexible-header, full-width-template, microformats, post-formats, rtl-language-support, sticky-post, theme-options, translation-ready, accessibility-ready, responsive-layout, infinite-scroll, post-slider, design, food, journal, magazine, news, photography, portfolio, clean, contemporary, dark, elegant, modern, professional, sophisticated Text Domain: twenty-seventeen-child \*/ \[/php\]

Now, the actual work starts.

### The old way

To customize your theme’s CSS, you can add any changes to your child theme’s CSS file below the @import line. All new CSS information is added after the original theme’s CSS is loaded.

\[php\] /\* Theme Name: Twenty seventeen Child Theme URI: http://yourwebsite.com/twentyseventeen-child/ Description: My first child theme, based on Twenty seventeen Author: REDQ TEAM URI: http://redq.io Template: twentyseventeen Version: 1.0.0 Tags: black, green, white, light, dark, two-columns, three-columns, left-sidebar, right-sidebar, fixed-layout, responsive-layout, custom-background, custom-header, custom-menu, editor-style, featured-images, flexible-header, full-width-template, microformats, post-formats, rtl-language-support, sticky-post, theme-options, translation-ready, accessibility-ready, responsive-layout, infinite-scroll, post-slider, design, food, journal, magazine, news, photography, portfolio, clean, contemporary, dark, elegant, modern, professional, sophisticated Text Domain: twenty-seventeen-child \*/ \[/php\]

@import url("../twentyseventeen/style.css");

Note that, the template name and mother of style.css should be same like this

![How to use a WordPress child theme style css ](/assets/blog/images/How-to-use-a-WordPress-child-theme-style-css.png)

### **The effiecient way**

The best step is to enqueue the parent and child theme stylesheets. Note that the method we discussed previously by importing the parent theme stylesheet using @import: is not good practice at all , as it takes more times to load the style sheets.

The effiecient and proper method of enqueuing the original parent theme stylesheet is to add a wp_enqueue_scripts action and wp_enqueue_style() in your child theme's functions.php.

\[php\] &amp;lt;?php add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' ); function my_theme_enqueue_styles() { wp_enqueue_style( 'twentyseventeen', get_template_directory_uri() . '/style.css' );

}?&amp;gt; \[/php\]

Now Zip the folder and upload it via **Appearance -> Themes ->Add New** and Activate the theme. Now, you can change any make in the css file of your child theme without affecting the parent theme.

### **Using Theme Hooks**

An another proper or better way to modify a child theme via functions.php is to use hooks. If you are known of theme hooks before, think of them as little anchors in a theme’s files that gives opportunity to add content, functions and many stuff , without editing the core files themselves. Suppose, we are using a child theme called tweentyseventeen-child. Now, tweentyseventeen-child theme's blog side bar section is rendered via this hook 'tweentyseventeen_blog_sidebar'\`

do_action('tweentyseventeen_blog_sidebar');

Now, we want to append a custom sidebar widget area with the default sidebar section. Let's make a function to use the new registered sidebar area

\[php\] function blog_sidebar_widget_function() { if ( is_active_sidebar( 'blog-main-side-bar' ) ) : dynamic_sidebar( 'blog-main-side-bar' ); endif; } \[/php\]

Next step is we need to attached the new custom sidebar function with the previous main side bar hook via adding an action **add_action .**

\[php\] add_action('tweentyseventeen_blog_sidebar', 'blog_sidebar_widget_function'); \[/php\]

Now the comment section is all yours. Share your thoughts with us.

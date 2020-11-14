---
title: "Why My WordPress Post Comparison Is Better Than Yours"
date: "2017-08-28"
category: "Article, Plugin"
excerpt: "WordPress post comparison is  a pretty common feature when you run a real estate site or  a car dealership site, or electronic products and so on. Your  customers may  want to compare any kind of posts before they continue to buy or order. That's why you will look for a WordPress post comparison plugin. WordPress"

coverImage: "https://d2qklehrvrfpx7.cloudfront.net/blogimages/alike.png"
ogImage:
  url: "https://d2qklehrvrfpx7.cloudfront.net/blogimages/alike.png"
---

WordPress post comparison is  a pretty common feature when you run a real estate site or  a car dealership site, or electronic products and so on. Your  customers may  want to compare any kind of posts before they continue to buy or order. That's why you will look for a WordPress post comparison plugin.

# WordPress post comparison

Here you will get some idea about an excellent comparison plugin. It's very easy to manage the plugin and it fully supports any custom post type, taxonomy and meta data. This plugin comes with a very user friendly visual comparison page builder. You can easily configure your site comparison logic for any post type.

Don't get convinced too fast before knowing how the plugin works. So in this article , you will get an idea about the plugin workflow.

<a href="https://1.envato.market/c/1309180/275988/4415?u=https%3A%2F%2Fcodecanyon.net%2Fitem%2Falike-any-post-comparison-wordpress%2F15538788" class="btn">Purchase Plugin</a>

## Frequently asked question?

1. Is this plugin works with any post type?

```
Yes.
```

1. How many custom post type I can add for comparison logic?

```
There is no limit, you can add whatever you want.
```

1. Does this plugin support comparison between custom taxonomy?

```
Yes
```

1. Does this plugin can show the difference between custom fields?

```
Yes.
```

## Build Comparison Logic

After purchasing the comparison plugin and installing it into your [WordPress installation](https://redq.io/blog/wordpress-optimization-tips-improve-website-performance/). You will get a menu named **Alike**

In the alike menu you will see a **+** icon. You can specify the post type name here. Then start building your comparison logic.

You will see two option **add row** and **add set**

### Add Set

For adding the bundle data you can use the add set option. Inside the  add set option,  you can add unlimited rows. In the front-end portion , it will show the group of data row.

![](https://d2qklehrvrfpx7.cloudfront.net/blogimages/alike1.png)

Upper portion of Property overview has 3 rows. Post thumbnail, post title and the location taxonomy. Lower portion of type, contract, rating and price is individual row.

Backend configuration is pretty simple for add set.
![](https://d2qklehrvrfpx7.cloudfront.net/blogimages/alike2.png)

Type the group name and if you want this as a header group then enable the switch so it will show the row data as a group, otherwise it will show the group name as a section separator and then show the result as simple row.
![](https://d2qklehrvrfpx7.cloudfront.net/blogimages/alike3.png)

### Add Row

Add row is the basic option for adding data set into wp post comparison logic block. You can add unlimited post data such as custom fields and taxonomy here. View level is also controlled via some custom helper options.

Such as simple, boolean, rating, woocommerce price.
![](https://d2qklehrvrfpx7.cloudfront.net/blogimages/alike4.png)
This data building part is fully support the drag-n-drop feature. You can rearrange the data position.

## Compare button integration

There is another important feature you need to know. That is added with the  compare button. You can use our provided shortcode into the post content editor or use the code directly into WordPress template.

```
<?php echo do_shortcode('[alike_link vlaue="compare" show_icon="true" icon_class="fa fa-heart"]'); ?>
```

You can also use the **\[alike_link vlaue="compare" show_icon="true" icon_class="fa fa-heart"\]** into your post content text editor.

Another way is you can directly call the button markup into any php or js based template.

```
<a href="#"
  class="alike-button alike-button-style"
  data-post-id=<?php echo esc_attr( get_the_ID() ) ?>"
  data-post-title="<?php echo esc_attr( get_the_title() ) ?>"
  data-post-thumb="<?php echo esc_url( $post_image_src[0] ) ?>"
  data-post-link="<?php echo esc_url( get_the_permalink() ) ?>"
  title="<?php echo esc_attr($value) ?>">
  <?php echo ($show_icon) ? wp_kses('<i class="'.$icon_class.'"></i>') : esc_attr($value) ?>
</a>
```

Here you will see the php data you can by pass this from javascript object data.

In underscore template the bottom code will be used

```
<a href="#"
    class="alike-button alike-button-style"
    data-post-id="{{post.ID}}"
    data-post-title="{{post.post_title}}"
    data-post-thumb="{{post.thumb_url}}"
    data-post-link="{{post.post_link}}"
    title="Add To Compare">
    <i class="fa fa-exchange"></i>
</a>
```

## Alike Preview Page

This page will automatically created after the plugin activation. You don't need to worry about that. But for your help the shortcode name will be **\[alike_preview\].** Just add a new page and inside the content use this shortcode. The page will do the rest.

### Settings

Now it is the time to know about plugin settings. Here is an important thing you should consider and that is you have to specify the shortcode redirection page from the widget. When you add some post from the posts lists, then it will add to your compare widget.
![](https://d2qklehrvrfpx7.cloudfront.net/blogimages/alike5.png)

Select the alike preview page for front-end redirection. This is important and without this the plugin won't work.

You can also change the post thumbnail size and specify the maximum posts to compare at a time in here.
https://d2qklehrvrfpx7.cloudfront.net/blogimages/alike6.png
The front-end part will look like this.

### Summary

Now a days, a lots of site need WordPress comparison plugin, but a helpful plugin is very difficult to build to meet all the requirements for your website. You can try this awesome plugin. Just give it a shot, you won't regret.

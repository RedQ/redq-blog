---
title: "How to Change the Default Search URL Slug in WordPress"
date: "2018-06-02"
---

\[vc_row\]\[vc_column\]\[vc_column_text\]Do you desire to manipulate the default search URL template in WordPress? Actually, the search URL in WordPress is not that much easy to use. In this article, we will demonstrate you how to non-complexly manipulate your URL slug of default search in WordPress and make it more relevant and user-friendly to your search engine optimization.

### Changing Search Page URL Slug in WordPress

According to this tutorial, you require editing some of your WordPress Theme files.

### Method 1. Change WordPress Search URL Slug via Functions File

This method number 1 is more flexible and suggested to most users.

In the beginning, you requisite copying the actual code below and paste it into the functions.php file for your theme or in a site-specific plug-in:

1

2

3

4

5

6

7

`function` `wpb_change_search_url() {`

`if` `( is_search() && !` ` empty``( ` ` $_GET``[``'s'``] ) ) { `

`wp_redirect( home_url(` `"/search/"` `) . urlencode( get_query_var(` `'s'` `) ) );`

` exit``(); `

`}`

`}`

`add_action(` ` 'template_redirect'``, ` `'wpb_change_search_url'` `);`

You must have to save all the changes and you can not afford to forget it. Otherwise, everything will be on the previously unchanged state.

Now you may pay a visit to your website and give it a try to use the feature of searching. You could be notified that the search URL will appear like this:

http://example.com/search/your-search-query/

![](/assets/blog/images/searchresults.jpg)

### Method 2. Change Search URL Slug via htaccess File

The .htaccess file is a very important file and certainly, times used to install redirects and other site configuration functions. Also, you can use it to alter the appearance of the default URL slug for the search of a WordPress address.

The .htaccess file is located in the home or root folder of your website files, and you must use the File Manager application or FTP in cPanel to modify it.

In your website's .htaccess file, you require pasting the following code at the bottom:

1

2

3

`# Change WordPress search URL`

`RewriteCond %{QUERY_STRING} \\?s=([^&]+) [NC]`

`RewriteRule ^$ /search/%1/? [NC,R,L]`

Do not forget to keep the saving of all your changes and re-upload the .htaccess file back to the web-server through FTP or a File Manager application.

Now you may pay a visit to your website and utilize the feature of searching. You will be notified that now the search URL will appear like this:

http://example.com/search/your-search-query/

### Conclusion

We expect that this article will assist you truly to learn “How to Change the Default Search URL Slug in WordPress”. If you really like this article then please do not forget to give us a rating or leave a comment in the comment section. It really inspires us a lot to provide you more quality articles. Thank you very much for reading this article. That is all for today. Have a nice day.\[/vc_column_text\]\[/vc_column\]\[/vc_row\]

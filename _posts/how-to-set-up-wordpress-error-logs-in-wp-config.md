---
title: "How to Setup WordPress Error Logs in WP-Config"
date: "2018-08-13"
---

\[vc_row\]\[vc_column\]\[vc_column_text\]Do you eager to set up an error log for WordPress in a WordPress-configurable file? The wp-config file in WordPress system just not does the control manipulating job in your settings of WordPress site but it is alongside also a very handy debugging tool. So in this devoted article, we will demonstrate how to setup WordPress error logs in wp-config

### Setting up WordPress Error Logs in WP-Config File

At the very beginning, you require editing your WordPress's wp-config.php file. You may have the access to it by connecting to your [WordPress website](https://redq.io/blog/food-website-wordpress-themes-free-download/) via cPanel using File Manager application or an FTP client.

![](/assets/blog/images/edit-wpconfigfile.png)

You can discover a wp-config.php file exists in the root path of your WordPress site. You require to open the file just in a text editor and inspect for the line that is uttering "That’s all, stop editing! Happy blogging."

you require adding the following code just before this actual line :

1

`define(` ` 'WP_DEBUG'``, true ); `

There might be a possibility that this code is by this time existed and forged in your wp-config.php file. It could be set as 'false'. In this instance, you just requisite to change it to 'true'.

This line will only start debugging mode in WordPress. Whatever, that debugging is used to let you view any errors and warnings in addition to the front page of your website besides the admin area of your WordPress website.

If you desire to view the error logs by logged in, so you will require adding the code below to your wp-config.php file following the WP_DEBUG line.

1

`define(` ` 'WP_DEBUG_LOG'``, true ); `

You should now upload your wp-config.php file back to your WordPress website by saving the changes you made in this file and do not forget it.

### Check the WordPress error logs

In the beginning, you require to pay a visit to the WordPress website and access those pages that have been caused by errors or warnings. Now on next, you requisite to establish connections to your website utilizing a file manager application in the host's cPanel of your WordPress hosting or you could use an FTP client to do so.

After being connected, move to /wp-content/ folder and within it, you will discover a file named 'debug.log'.

![](/assets/blog/images/debuglog.png)

Now You may download, see, or edit this file. All WordPress errors are contained in this file, also all warnings, and all notifications that are logged in.

![](/assets/blog/images/errorsphp.jpg)

### Conclusion

Now, this article came to its end point. Hope this article will assist you to learn 'How to Setup WordPress Error Logs in WP-Config'. If this article really assists you then please do not forget to give us a rating or leave a comment in the comment section. It is naturally very inspiring for us to deliver you more quality articles and also it will let us be known where we have to improve. Thank you very much for reading this article. Have a nice day.

\[/vc_column_text\]\[/vc_column\]\[/vc_row\]

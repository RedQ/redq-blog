---
title: "BBPress Wordpress Tutorial: How to Create a Forum"
date: "2017-08-23"
---

\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]

WordPress brings you the facilities to make awesome forum platform for any type of choice you have.

# Tips for creating support forum with bbPress

bbPress Comes with awesome forum facilities with very easy accessibility. Let's discuss how we can create a forum panel in WordPress with the help of bbPress.

There are few steps we are trying to cover in this article.

1. Getting started with bbPress plugin
2. Configure the bbPress basic settings
3. User & Forum management settings
4. Create a basic forum

Lets move on to the steps one by one.

#### Getting started with bbPress :

The first thing is you need to install bbPress into your WordPress. You can easily download the plugin from WordPress's admin panel dashboard.

**The process is WP\_Admin Panel > Plugins > Add New Plugin**

\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_single\_image image="373" img\_size="full" alignment="center"\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]

After install and activate the plugin this welcome window will appear.Means your installation is successful

\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_single\_image image="374" img\_size="full" alignment="center"\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]

After installing the bbPress it will provide you some options in the WordPress's admin dashboard. _**Forums, Topics & Replies.**_

In Forums, all the Forums thread are listed. It will give you an overview of how many topics are include in any specific forum, count of replies, who is the Admin and when he created it! etc.

In Topics, it will give you an overview of how many topics are opened under various forums, how many people are connected to it, who are those authors! their topic creating timeline etc.

In Replies, this section is really very simple. It's just keep all the track of replies on various forums in various topics.

#### Configure the bbPress basic settings :

Obviously bbPress will provide you some configuration panel for maintaining the forum you have created. Those configuration panels are located in two sections of WP\_Admin panel, _**Tools & Settings**_.

In Tools (WP\_Admin Panel > Tools > Forums ), it will provide you three options. _**Repair forums, Import forums & Reset forums**_.

- Repair forums works on keep tracking all the forums, topics, replies, related taxonomies and their internal relationships. Suppose, you are the admin and you bulk import some forum panels from others into your site. Then you can easily migrate & manage the internal relationships of the forums, tags, topics, replies etc. Sometimes your previously created forum may get out of synchronisation. You can hunt them down and manage them too via this settings.
    

\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_single\_image image="375" img\_size="full" alignment="center"\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]Import forum provides you the easy way to migrate your previously created forums database into your newly created forum database. There are other options too to tune the whole importing process, db connection settings etc.\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_single\_image image="376" img\_size="full" alignment="center"\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]Reset forum settings deals with you about the reset process of your whole forum lists. It is an one way road. Better keep an eye when you are going to use it.\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_single\_image image="377" img\_size="full" alignment="center"\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]

In settings (WP\_Admin panel > Settings > Forums ), it consists of different settings approaches. Forum User Settings, Forum Features, Topics and Replies Per Page, Topics and Replies Per RSS Page, Forum Root Slug & single slug etc etc. More specifically it's the user & forum management section.

Here is glimpse of this settings panel.

\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_single\_image image="378" img\_size="full" alignment="center"\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]

#### User & Forum management settings :

Let's come to discussion point of users & forums. bbPress gives you the user management with post & role control system.

In Forum **User** Settings site admin can allow/disallow the post editing time limit, anonymous posting, user role etc. 5 type of user role can be imposed. KeyMaster, Moderator, Participant, Spectator & Blocked.

- KeyMaster's role is very similar to site admin, he has the global access to every forums.
    
- Moderator's activity is tends to KeyMaster but s/he can't access the global settings.
    
- Participant has authorisation to create new topics, replying on other topics etc.
    
- Spectators can view the topics but has no ability to create a new one.
    
- Blocked, you can easily understand it by this role name. Blocked user has no authorisation either posting or replying.
    

Next level is come to **Forum** management settings. Forum settings covers a vast area like

- Forum Features
- Topics and Replies Per Page
- Topics and Replies Per RSS Page
- Forum Root Slug
- Single Forum Slug
- Forum User Slugs.

Enough of the settings panel introduction. Now, it's time to move on the last steps of this article that is creating a basic forum.

#### Creating a basic forum :

To create a basic forum go to **WP\_Admin panel > Forums > Add New Forum.**

During the forum creation you can choose the Forum type, forum status, parent forum (if it has any), forum visibility etc.

Now, related settings need to forum creation is that, people need login/registration process to communicate , A forum index page where all the forums are listed or displayed to users etc.

For creating a login/registration page, site admin needs to create a pages first via this ShortCode.

`[bbp-login]`– Render the login section on Login page.

`[bbp-register]` – Render the register section on specific registration page.

`[bbp-lost-pass]` – Render the lost password section.

For displaying a complete forum lists create a new page and put this ShortCode `[bbp-forum-index]`

For more help here is the ShortCode lists covered by bbPress to display every functionalities at front-end. URL : [https://codex.bbpress.org/features/shortcodes/](https://codex.bbpress.org/features/shortcodes/)

\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[/vc\_row\]\[vc\_column\]\[vc\_column\_text\]

### Conclusion:

That's all for now. Hope you might find this helpful for starting the use of bbPress to build up a forum in WordPress. For any kind of enhancement or modification or criticism we are open to that. Thanks!

\[/vc\_column\_text\]\[/vc\_column\]\[vc\_column\_text\]\[/vc\_column\_text\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

 

**See Also:**

[Best Contact Form Plugins for WordPress](https://redq.io/blog/best-contact-form-plugins-wordpress/)

[Reactive Lite WordPress Free Plugin](https://redq.io/blog/reactive-lite-wordpress-free-plugin/)

[Best Contact Form Plugins for WordPress](https://redq.io/blog/best-contact-form-plugins-wordpress/)

[Rating Builder WP Free Plugin ( Review and Installation )](https://redq.io/blog/rating-builder-wp-free-plugin/)

[10 Best WordPress Notification Bar Plugins](https://redq.io/blog/10-best-word-press-notification-bar-plugins/)

[Reuse Builder WP Free Plugin ( Review and Installation )](https://redq.io/blog/reuse-builder-wp-free-plugin/)

[Top 10 WordPress Booking Plugins](https://redq.io/blog/top-10-wordpress-booking-plugins/)

[BBPress WordPress Tutorial: How to Create a Forum](https://redq.io/blog/how-to-create-a-forum-bbpress-wordpress/)

[How To Create Booking System With WooCommerce?](https://redq.io/blog/create-woocommerce-booking-system/)

[How to Integrate WordPress Social Login?](https://redq.io/blog/wordpress-social-login-integration/)

[How To Find The Right WordPress Restaurant Theme For Your Website](https://redq.io/blog/wordpress-restaurant-theme/)

[Top 10 Must-have & Best Free WordPress Plugins](https://redq.io/blog/top-10-must-best-free-wordpress-plugins-2017/)

[10 Best Social Sharing Plugins for WordPress](https://redq.io/blog/10-best-social-sharing-plugins-for-wordpress/)

[Top 5 Best WordPress SEO Plugins](https://redq.io/blog/top-5-best-wordpress-seo-plugins/)

[7 Best Free Photo Gallery Plugins for WordPress](https://redq.io/blog/best-free-photo-gallery-plugin-for-wordpress/)

[Super Easy Ways To Learn Everything About WP Job Manager Plugin](https://redq.io/blog/wp-job-manager-plugin/)\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]

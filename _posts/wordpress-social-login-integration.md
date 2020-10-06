---
title: "How to Integrate WordPress Social Login?"
date: "2017-08-19"
---

\[vc_row\]\[vc_column\]\[vc_column_text\]Now a days Third Party Authentication or [Social Login/Registration](https://1.envato.market/c/1309180/275988/4415?u=https%3A%2F%2Fcodecanyon.net%2Fitem%2Fsocial-login-for-wordpress-woocommerce-buddypress-bbpress%2F18981588) is getting much popular than conventional User Login/Registration process.

If you think generally that it's a pressure on mind to remember every username/password you have used to access data on various site. To remove this UX hassle isn't it a better approach to authorize the user from their corresponding social or third-party website profile.

Through pros and cons in modern sectors like e-commerce shop or popular blogging platform or even on business portal like directory listings site uses Social/Third-party Authentication.

# Wordpress Social Login Integration

Let's move on discussion with example about Social/Third-party Authentication system based on popular CMS (Content Management System) like WordPress.

#### WordPress default integration :

In WordPress you are very popular with this User Sign-Up/Sign-in window.

![registration Wordpress Social Login](/assets/blog/images/registration-Wordpress-Social-Login.jpg)

What if I changed your default login/registration view and give you this extra two `Sign-in With` helper process!

![two registration Wordpress Social Login](/assets/blog/images/two-registration-Wordpress-Social-Login.jpg)

In WordPress it provides it's user some `hook` to integrate extra functionalities with it's default behavior.

In `Social Login for WordPress WooCommerce BuddyPress bbPress` we have used some of them too. To integrate extra login section with the default login form we have used this action hook `login_form`

#### ShortCode :

This plugin provides you ShortCode functionalities, which support you to integrate social login plugin into any post type, page, forms etc.

\[php\]\[slwp_social_button\] \[/php\]

That's why it's more flexible to use. We have create a control section for the Site admin. Site admin can choose the user role whether the user need to be sign-up as a Admin or Author or Subscriber or Shop manager or a simple customer/user.

![control Wordpress Social Login](/assets/blog/images/control-Wordpress-Social-Login.jpg)

Site Admin can provide the redirect url section after they sign-up/in based on their activity role.

## 1\. WooCommerce Integration

Along with the WordPress's default login/registration process "[Social Login for WordPress WooCommerce BuddyPress bbPress](https://1.envato.market/c/1309180/275988/4415?u=https%3A%2F%2Fcodecanyon.net%2Fitem%2Fsocial-login-for-wordpress-woocommerce-buddypress-bbpress%2F18981588)" has provided support to [WooCommerce plugin](https://wordpress.org/plugins/woocommerce/).

In WooCommerce there is a action_hook named

\[php\]woocommerce_after_template_part\[/php\]

, we have used that to add our social login activity in the checkout page. When not logged-in users buy any thing from shop and add them to cart, then during the checkout process this section will appear.

\[php\]add_action('woocommerce_after_template_part', array( &amp;\$this, \[YOUR_LOGIN_BUTTON_FUNCTION_NAME\])); \[/php\]



![Checkout_SL Wordpress Social Login](/assets/blog/images/Checkout_SL-Wordpress-Social-Login.jpg)

## 2\. BuddyPress Integration

In BuddyPress `template_notices` action hook is used to connect social login plugin with [BuddyPress plugin](https://wordpress.org/plugins/buddypress/). Here is a sign-up page view with BuddyPress.

## ![front Wordpress Social Login Integration](/assets/blog/images/front-Wordpress-Social-Login-Integration.jpg)3\. bbPress Integration

[bbPress](https://wordpress.org/plugins/bbpress/) is a very popular forum software created by WordPress. If you have run a Blog/Forum platform then our Social-Login-Plugin can be a very good consideration to help you.

bbPress integration is done by connecting our Social-Login-Plugin via this two action hooks.

- `bbp_template_after_single_forum`
- `bbp_template_after_single_topic`

We shouldn't do lengthy the discussion of how we managed to add them etc etc. It may make you bored.. Let's move on how we can connect our site with any specific third-party website like ([FaceBook](https://www.facebook.com/), [Twitter](https://twitter.com/) etc)

#### Example with FaceBook

We provide you a very simple & friendly options panel where you can Enable/Disable which authentication process you want. Suppose you want to integrate FaceBook authentication process into your site. Visit the **Social-Login options panel** from your site [social login activity](https://redq.io/blog/create-woocommerce-booking-system/), Select `Enable` of FaceBook authentication.

Then follow this procedure.

- From [here](https://developers.facebook.com/apps) create a FaceBook app.
- Click the top right create new app green button. fill all the fields then submit.
- after creating you app you will be redirected to your app dashboard.
- From there go to settings panel and copy api key and api secret key.
- set app domain to ur domain name(just domain name no http/https). then from bottom add platform button set platform to website and set site key to ur website url.
- Then click save & copy your api key and secret key.

![facebookauth Wordpress Social Login](/assets/blog/images/facebookauth-Wordpress-Social-Login.jpg)



Your next steps are inside your site’s Social Login Options Panel.

- Paste the APP-ID & Secret Key from the previous copy inside the text field of FaceBook section.
- Then save it.

![facebook Wordpress Social Login](/assets/blog/images/facebook-Wordpress-Social-Login.jpg)

**Your FaceBook integration is Done!!**

Look it’s that simple of using this plugin. You can follow up this similar procedure in every third-party authentication we are going to provide to you.

#### Provided Features

Let’s discuss the features we are offering to you.

- 9 Third-party Social Login Supported!
  - _Google_
  - _Facebook_
  - _Github_
  - _Twitter_
  - _Instagram_
  - _LinkedIn_
  - _Dribbble_
  - _OpenID_
  - _Yahoo_
- WooCommerce Supported.
- BuddyPress Supported.
- BBPress Supported.
- Envato Product Purchase Key Verification.
- MailChimp Subscription.
- Turn on/off facilities for any features.
- ShortCode is provided for social Login button.
- You can set any role for user to register.
- You can also set redirection url after a user get registered.

#### Two special feature

We have Provided Envato authentication process to for a large number of envato users.

For Envato users site admin can register an app from [Envato App Link](https://build.envato.com/)

After sign-in into Envato account register a new app with necessary fields. It will return an authentication key

![envato_key Wordpress Social Login](/assets/blog/images/envato_key-Wordpress-Social-Login.jpg)

Copy this authentication key and paste it into Social-login settings panel envato section.

**Twitter confirmation process**

After twitter authentication generally it didn't send any confirmation towards users. That's why we have created a Twitter Confirmation process which is supported by google re-captcha.

![twitter Wordpress Social Login](/assets/blog/images/twitter-Wordpress-Social-Login.jpg)

### [**![Download Plugin](/assets/blog/images/Download-Plugin.png)**](https://1.envato.market/c/1309180/275988/4415?u=https%3A%2F%2Fcodecanyon.net%2Fitem%2Fsocial-login-for-wordpress-woocommerce-buddypress-bbpress%2F18981588)

### **WordPress Social Login Integration Video Tutorials**

https://www.youtube.com/watch?v=rkwP6w8oDZE

**Thanks for your reading. Hope you have enjoyed it!**\[/vc_column_text\]\[/vc_column\]\[/vc_row\]\[vc_row\]\[vc_column\]\[vc_column_text\]

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

[Super Easy Ways To Learn Everything About WP Job Manager Plugin](https://redq.io/blog/wp-job-manager-plugin/)\[/vc_column_text\]\[/vc_column\]\[/vc_row\]

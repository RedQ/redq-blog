---
title: "How to Use SMTP Server to Send WordPress Emails"
date: "2018-05-10"
---

\[vc_row\]\[vc_column\]\[vc_column_text\]In this article for the beginners, we will demonstrate "How to Use SMTP Server to Send WordPress Emails". So let's start the article.

### Using Email Accounts by Your Host

Many of the WordPress hosting providers giving services of email for each domain you have hosted with them. This measures that you can generate an e-mail account with your own domain name, such as **yourname@yoursite.com**.

In the beginning, you require generating an e-mail account. In this example, we will demonstrate you how to make an e-mail account in cPanel. Some other account management systems might be utilized by your hosting service provider, most hosting services providers are providing almost similar basic procedures.

Sign in to the account of your hosting, and give a click to your email account at the bottom of the Email section.

![](/assets/blog/images/emailaccounts1.png)

This will demonstrate you a basic form where you require filling out the information you need to generate your email account.

We will use this account to send email from the WordPress website, we propose creating an email account such as WordPress@example.com. It will ensure that next time you may restore example.com with your own domain name.

![](/assets/blog/images/emailform.png)

Once you have created your email account, now you are prepared to use it on WordPress. Just earlier you do this; the following information will be required from your hosting service provider.

1. The host of SMTP to your email address.
2. The port of SMTP for secure login. You may analysis the support segment of your host's website for this information. An article may be providing this information. If you do not receive it, you should ask the support of your hosting provider to provide this information.

### Using Your Branded Email Address in WordPress

Now the activation of WP Mail SMTP plugin will be required. So activate it.

After activation, you requisite to see **Settings »Email** to configure settings for the plugin.

![](/assets/blog/images/wpmailsmtp-settings-1.png)

In the beginning, you must enter the Email address into 'From Email' that you have created. Then you can add the 'From Name', which will be used as the name of the sender.

If you forget to add 'From Name', then the default WordPress email will be used by the plugin.

After that, you requisite to select the mailer. Proceed ahead and choose the 'Other SMTP' radio button to select it.

![](/assets/blog/images/choosemailer.png)

Next, you requisite to check the box following the 'Return Path' option. This option specifies the return path corresponding to the email address of the sender. If you did not check it, non-delivery receipts and bounced messages will be lost.

After that, you requisite to set up SMTP options.

![](/assets/blog/images/smtp-settings.png)

In the beginning, you requisite to enter an SMTP port and host. From your hosting provider, you can get this information. In general, SMTP hosts are mail.yourdomain.com (replace yourdomain.com with your actual domain name). SMTP is commonly used for Port 465.

After that, you must select encryption. Most hosting companies for WordPress support TLS and SSL. We suggested using the TLS option instead of SSL when available.

Then, turn on the toggle of authentication and supply your SMTP username and password. In general, your SMTP username is actually your e-mail address.

As a plain text, your password will be saved, which is insecure. You should not be worried, we will demonstrate you how to be safer after this article.

Please remember you should not forget to click the 'Save Settings' button to save your changes.

### Testing Your SMTP Settings

You can now set up WP Mail SMTP to send your e-mail messages, let's check if everything is working well, on the settings page of the plugin, click the tab 'EmailTest'.

![](/assets/blog/images/sendtestemail.png)

You want to get a test email then you will require providing an email address. This should be a valid email address that you may access. Then, click the 'Send Email' button to proceed.

Now WP Mail SMTP will send an e-mail message by using the settings of SMTP that you provided earlier. Successfully sent emails will show you a success message.\[/vc_column_text\]\[/vc_column\]\[/vc_row\]

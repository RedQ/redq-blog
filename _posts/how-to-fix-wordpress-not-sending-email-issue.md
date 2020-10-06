---
title: "How to Fix WordPress Not Sending Email Issue"
date: "2018-05-10"
---

\[vc_row\]\[vc_column\]\[vc_column_text\]A very common problem with WordPress is "WordPress is not sending Email". A lot of beginner users are facing this issue that their contact form plugin is not sending emails or otherwise their not capable of viewing any notifications from WordPress. So in this article, we will try to provide you the solution to fix this "WordPress is not sending Emails" issue. Let's start the article.\[/vc_column_text\]\[/vc_column\]\[/vc_row\]\[vc_row\]\[vc_column\]\[vc_column_text\]

### Why are you not be able to get any emails from your WordPress built Website?

The most common fact for having this issue is that your WordPress hosting server might not be configured to properly use PHP mail() functionality.

Although they will allow it to be functional, many email service providers use a different kind of tools to eradicate spam emails. These tools seldom try to fetch that an email is written or sent from the location it claims to be originating from, and on several occasions, emails sent by websites based on WordPress cannot pass this test.

So on these occasions, when an email is sent out from your website based on WordPress, it might not even go into spam folder of the destined website or location. For this reason, we recommend that you should not use WordPress to send or provide your email or newsletter.

This is the main fact that we recommend you to use SMTP to send emails in WordPress based website. Nowadays SMTP (Simple Mail Transfer Protocol) is the industry standard mailing protocol system for sending or receiving emails. Not like the PHP mail function, SMTP uses real-time authentication system which is more reliable to deliver your emails or newsletter.

There are various companies already offering SMTP services, after all in this article, we will provide only two SMTP services that we recommend: MailGun and Gmail.\[/vc_column_text\]\[/vc_column\]\[/vc_row\]\[vc_row\]\[vc_column\]\[vc_column_text\]

### Sending Your WordPress based website's Emails Using Mailgun

Mailgun is one of the most popular email service providers. Mailgun allows the website owners to send a large volume of emails without any risk of losing emails.

In fact, it is a dedicated email service provider, they spend a lot of time and money to ensure that your email must reach its true destination.

Though Mailgun is a paid service, it offers the website owners first 10,000 emails for completely free every month. That is really more than enough for the most WordPress based website owners who just have begun their website or blog.

Here are all the procedures of how to install your WordPress based website to use the mailing system of Mailgun for sending emails.

At the very beginning, you require to signup on the Mailgun website. After having a sign-up, you have to click over the “Add your domain” button.

![](/assets/blog/images/Add-your-domain.png)

Now you can view an add domain page. From there you require adding a subdomain to your WordPress based website’s domain name. For example, mg.mydomain.com.

![](/assets/blog/images/add-subdomain.png)You could make a new subdomain on your existing domain name by following the provided instructions below.

At the very beginning, you require visiting the cPanel dashboard of your hosting account. After that, click on the subdomain's icon under the domain's section.

![](/assets/blog/images/cpanel-subdomains.png)

On the upcoming next page, you have to provide your subdomain and then choose your root domain from the drop-down menu.

![](/assets/blog/images/entersubdomain.png)

On next you have to click on the create button, and you can see a success message will appear which denotes that your subdomain has been successfully created.

Now you can add this subdomain to Mailgun’s add domain page. After you have added the domain, Mailgun will display you a few amounts of DNS records.

![](/assets/blog/images/mgdnsrecords.png)

Now go back again to your cPanel dashboard and then click on ‘Advanced DNS Zone Editor’.

![](/assets/blog/images/dnszoneeditor.png)

You will be prompted to specify the domain whose DNS records you want to change. Once you specify your root domain name, you will see the option to add new DNS records.

The first TXT entry will be your subdomain. You must start by entering the subdomain in the Name field, then select TXT as the record type. Then, you must add 14400 to the TTL field and copy the displayed value to the TXT Data field on Range Verification Settings page of Mailgun.

![](/assets/blog/images/dnstxtrecord.png)

Redo the procedure by adding another TXT record.

While it finished, go back to the cPanel dashboard and give a click on the MX Entry icon.

![](/assets/blog/images/mxentrymenu.png)

You will be prompted to choose your root domain, on next scroll down thoroughly to the bottom of the page. There you will find an option to add a new MX entry.

Enter the destination values and priority, and click on the create a new record button.

The result will be, you have successfully added your domain to Mailgun, your domain must be verified from the correct DNS records. This may take some time because DNS records may take a while to update.

You could check the current status of your domain verification by going to the domain's page in your Mailgun account.

Once the Mailgun shows an active state next to your domain name, it has the ability to verify the DNS changes that you have created.

![](/assets/blog/images/mailgundomains.png)

Once you have enabled your domain, you can start using Mailgun to send email from your WordPress website.

The first thing you require to do is install and activate the SMTP WP Mail plugin.

After activation, you require viewing **Settings> WP Mail SMTP** to configure the plugin settings. First, you have to supply your sender email address and the name you desire to use for the sender.

![](/assets/blog/images/wpmailsmtp-settings.png)

Later, you must pick the Mailgun as your mailer and check the box next to implement the return path to match the from email address.

![](/assets/blog/images/selectmailer.png)

Finally, you will require providing a private API key of Mailgun and a Mailgun subdomain. To obtain this information from your Mailgun account, click on the links below in each field.

![](/assets/blog/images/apikeydomain.png)

Please remember that, do not forget to click on the Save Settings button to save your changes.

After that, you have been successfully set up to send emails using Mailgun from your WordPress website.

Now you may click on the "Email Test" tab on the settings page in the plugin to send a test email and view the result that everything works correctly.

![](/assets/blog/images/emailtest.png)\[/vc_column_text\]\[/vc_column\]\[/vc_row\]\[vc_row\]\[vc_column\]\[vc_column_text\]

### Sending WordPress Emails Using Gmail SMTP Servers

An additional option is to use a Gmail SMTP server to send emails from WordPress, and you can use a normal Gmail account by this way to send your emails. Regardless, delivery of email will be way too better if you use Google Apps to work with your custom email address.

Whatever you are using a free or a paid Gmail account, the rest of the procedures will remain the same.

In the beginning, you have to install and activate the WP Mail SMTP plugin.

After activation, you will require configuring the plugin settings to see the **Settings » WP Mail SMTP** page. First, you requisite to give your Gmail address in the "From email" field and display the name as a sender you desire.

![](/assets/blog/images/wpmailsmtp-gmail.png)

Then, you have to go to the mailer option. For WordPress, There are two ways to use Gmail mail server to send the email.

The first method, how to use Gmail APIs to send e-mail messages. This method is recommended because it is safer and more reliable. The second way is to use the SMTP server of your Gmail account manually.

We will provide you both ways, whatever, we recommend using the numerical one method.

### Method 1: Setting up Gmail to Send WordPress Emails Using OAuth Protocol

In the beginning, you should choose your mailer like Gmail at the bottom of the WP Mail SMTP page. Check the box following to set the return path same as a sender, if this box has not been checked then it will make bounced and all the messages which are failed will be gone forever

![](/assets/blog/images/selectgmailsender.png)

Then, you will see the function to enter your Client Secret, Client ID, and a URL in "Authorized Redirect URL" field.

**Creating an App and Generate API Keys for Gmail**

To use the APIs of Gmail to send email messages in WordPress, you requisite to build an application and create an API key. To do so, go to the 'Google Developers Console' site and create a new project.

![](/assets/blog/images/create-gdc-project-1.png)

Although you do not see the blue button to create a project, then you also can click on 'Select a project' drop down and create a new project.

You will be asked to give a name for your project. Provide it a significant name so you can easily recognize it the next time you come here.

![](/assets/blog/images/nameproject-1.png)

Click on the create button to proceed further.

The Developer Console will now build your project and redirect you to the dashboard. Google allows developers having access to many of their APIs and services. Now that your project has been prepared, you requisite to enable the APIs you actually required.

![](/assets/blog/images/enable-apis-1.png)

Click on Enable APIs and services button to proceed further.

This will take you to the APIs Library page. Type Gmail in the search box to rapidly discover Gmail API and click to choose it.

![](/assets/blog/images/selectgmailapi-1.png)

Now You can see a brief description of the API and what it could do. Just click on the "Enable" button to proceed.![](/assets/blog/images/enablegmailapi-1.png)

Now that your API has been enabled, the following step is to create credentials that you may use in your WP mail SMTP plugin settings.

Click to 'Create credentials' button to proceed further.

![](/assets/blog/images/createcredentials-1.png)

On the following screen, you will require choosing "Web browser (Javascript)" in ‘Where will you be calling the API from?’ field. Then, click on the 'User data' function.

![](/assets/blog/images/api-creds1-1.png)

To proceed, click on the ‘What credentials do I need?’ button.

Now you will be asked to give a name for your OAuth client ID. You should enter ‘WP Mail SMTP’ here.

![](/assets/blog/images/api-creds2-1.png)

Under the JavaScript Key field, add the domain name to your website. After that, you will require copying and paste the Authorized redirect URLs from the WP Mail SMTP plugin settings.

Click the 'Create client ID' button to proceed.

After that, you requisite to enter a name for the OAuth consent screen. You can give a name after the plugin here.

![](/assets/blog/images/api-creds3-1.png)

Click the 'Continue' button and 'Developer Console' will display your 'Client ID'. You may copy and paste it into the settings page of the WP Mail SMTP plugin. Whatever, you will even now require the 'Client secret key'.

![](/assets/blog/images/clientid-1.png)

Click on the 'Done' button to poceed on.

You will now be taken to the credentials page of your project. You will see the newly generated credentials listed here. Click the edit button following your credentials.

![](/assets/blog/images/editcreds-1.png)

This will lead you to the edit credential page where you will be capable to see your 'Client secret' key. You require to copy and paste the key into the settings page of your plugin.

![](/assets/blog/images/clientsecret-1.png)

Go back to the settings page of the plugin in the WordPress admin section. Now you have that both 'Client ID' and 'Client secret' key, you have to click on the 'Save Settings' button to proceed.

![](/assets/blog/images/saveclientcreds-1.png)

The plugin will now start to save your settings and reload the page. After that, you will require scrolling down to the bottom of the settings page and click on the ‘Allow plugin to send emails using your Google account’ button.

![](/assets/blog/images/allowplugin-1.png)

This will bring you to your Google Account and you will be prompted to give permission so that your WordPress website can send emails on your behalf.

![](/assets/blog/images/allowgmail-1.png)

After that, you will be returned to your website where you can see a message of success.

Now you have successfully installed WordPress to use a Gmail SMTP server to send emails by using the OAuth protocol. Now you can click the "Email Test" tab on the settings page of the plugin to send a test email and monitor if everything works correctly.

![](/assets/blog/images/emailtest-1.png)

### Method 2: Setting Gmail to Send WordPress Emails Using SMTP

This method grants WP Mail SMTP to manually linked to the SMTP servers of Gmail to send email from WordPress.

In the beginning, you required visiting the Settings &raquo WP Mail SMTP page to configure the settings of the plugin.

Enter the Gmail address you desire to use as 'From Email' field and also enter your name in 'From Name' field.

![](/assets/blog/images/gmail-smtp-1.png)

Choose "Other SMTP" as your mailer and check the following box 'Return Path'.

To configure more settings, scroll down to other SMTP section.

![](/assets/blog/images/gmailsmtp-wpmailsmtp-1.png)

Here is how to fill out the information of the plugin settings:

- SMTP Host: smtp.gmail.com
- SMTP Port: 465
- Encryption: Use SSL encryption
- Authentication: Turn on authentication
- Username: Your complete Gmail address, e.g. john.smith@yourdomain.com or john.smith@gmail.com
- Password: Password of your Gmail account

Click on the 'Save Changes' button to save your settings.

All of this, you have successfully installed the WP Mail SMTP to use the Gmail SMTP servers.

Now you can click on the "Email Test" tab on the settings page of the plugin to send a test email and monitor if everything works correctly.

![](/assets/blog/images/emailtest-2.png)

### Conclusion

We expect that this article will assist you truly to learn "How to Fix WordPress Not Sending Email Issue". If you really like this article then please do not forget to give us a rating or leave a comment in the comment section. It really inspires us a lot to provide you more quality articles. Thank you very much for reading this article. That is all for today. Have a nice day.\[/vc_column_text\]\[/vc_column\]\[/vc_row\]

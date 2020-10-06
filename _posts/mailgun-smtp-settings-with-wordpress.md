---
title: "Mailgun SMTP Settings With Wordpress"
date: "2017-08-19"
---

\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]

[SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) settings with [mailgun](https://www.mailgun.com/) provides you awesome solution to avoid the unnecessary difficulties of running your own mail server or reduce the restrictions of your host's provider mail server.

If you use contacts form in your site like [contact form 7](https://wordpress.org/plugins/contact-form-7/) or [Gravity forms](http://www.gravityforms.com/) or [WP forms](https://wordpress.org/plugins/wpforms-lite/), then you need to rely on your website for sending Email.

Then sometimes it happened that you’re not able to receive any notifications from your WordPress contact form ? It is a complete disaster for you that your forms is not sending you emails when your customers fills out your forms.

A lot of times your site isn't sending email. The main reason behind that is your hosting provider .

They don't have the php mail function turned on on the server . That's why SMTP is used for sending email. SMTP stand for simple mail transfer protocol and it is the industry standard for sending emails.

\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]

## Mailgun SMTP Settings

I am gonna walk with you through in this elaborated article about how to setup a mailgun account and how to connect that to your website properly .Then, we will install mailgun plugins for WordPress and describe its workflow. By this, you will be able to know that your emails are getting sent on your websites.

\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]

## Signup for Mailgun

The first thing you gonna do is to go mailgun website and you have to sign up.

\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_single\_image image="138" img\_size="full" alignment="center"\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]Then click the signup button on the right corner and click on the signup button. Mailgun service is quite affordable. The first 10,000 emails in every month is free, you will get a free 100 email validations in every month with 30 days log retention. You all also get the opportunity of getting Multiple user accounts and many lots of stuffs by adding a credit card.\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_single\_image image="139" img\_size="full" alignment="center"\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]

After signing up correctly , you will get an area with the success message and two option.

- Sending Email from the sandbox server
- By adding your own domain

\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_single\_image image="140" img\_size="full" alignment="center"\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]

We're gonna click on the Add a Domain button. You can add your domains or subdomains as far as your wish.The mailgun itself recommends adding subdomains. You have to create the subdomain on you host platform.

At first, go to your hosting account and log into your hosting cpanel. Now in your cpanel , you will find a section named Domains and Under this you will find Subdomains portion. It can be different for hosting to hosting but you will find this section for sure in your cpanel like this

\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_single\_image image="141" img\_size="full" alignment="center"\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]After clicking on Subdomains portions, you can add your subdomains under a specific domains. If you have multiple domains, make sure you select your desired domains for your subdomains.\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_single\_image image="143" img\_size="full" alignment="center"\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]Now, the name of my subdomain is redq.optimumccl.com. Now, i have to put this subdomain on the mailgun. Now, go to mailgun site and go to this portion\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_single\_image image="144" img\_size="full" alignment="center"\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]After doing that, Click on the Add domain button and you will get the confirmation message. Now, we need to go through and do some verification's. After getting the confirmation message, mailgun will tell you to follow some instructions like Go To Your DNS Provider, Add DNS Records For Sending etc.\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]

## Add DNS Records For Sending

So, back to your hosting accounts and go to the home cpanel area and go to your advanced dns zone area to set this up. There are two records you want to enter

\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_single\_image image="145" img\_size="full" alignment="center"\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]

## Add Mx Records

Then , move back to mailgun website and find the portion Add DNS Records For Sending option.

\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_single\_image image="146" img\_size="full" alignment="center"\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]

First MX record:

+

- **Type :** MX
- **Priority:**10
- **value**: mxa.mailgun.org

Second MX record:

- **Type :** MX
- **Priority:**10
- **value**: mxa.mailgun.org

You will remember that, Mx records are same for everyone.

Now, after completing those step succesfully, Mailgun will verify your DNS records. Verfication process sometimes take 24-48 hours to complete . So, please don't bother.

At the meantime for your concern, anytime check the status of your domain verification by going to your Domains page in the Mailgun account.

Once Mailgun can track the changes of your Dns record , it will definately show a button with active status next to your domain name.

\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]

### Configure Your WordPress to Send Emails

Now, its time to configure your [WordPress site](https://redq.io/blog/why-use-wordpress-for-a-website/) to send emails. You have to install free mailgun plugin in your website. Please go to dashboard-> plugins-> add new->search for mailgun and install ad activate it.

\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_single\_image image="148" img\_size="full" alignment="center"\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]Then go to settings and put the correct domain name and api key . You have to put your Mailgun API keys for this work . Simply login to Mailgun account and hit a click on your domain name. Mailgun will then give you SMTP credentialsand your API key.\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_single\_image image="149" img\_size="full" alignment="center"\]\[/vc\_column\]\[/vc\_row\]\[vc\_row\]\[vc\_column\]\[vc\_column\_text\]

After putting all the required information , click on the test configuration button.Then , Mailgun will test all of your settings and will give you the desired confirmation message.

SMTP settings with mailgun is easy if you know the process perfectly. I hope that, this article will save your save your headache and your most valuable time.

\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]

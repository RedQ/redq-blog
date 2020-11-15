---
title: "Plan Creations and Restrictions  in Membership Site Using UserPlace Plugin"
date: ""
category: "Plugin"
excerpt: "Hello and welcome to UserPlace, a free WordPress membership plugin, plan creation for a membership site.  Once the payment gateway settings are done, you will be required to  create your own plans."
coverImage: "https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan.png"
ogImage:
  url: "https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan.png"
---

Hello and welcome to [UserPlace](https://redq.io/userplace) a free WordPress membership plugin, plan creation for a membership site. Once the payment gateway settings are done, you will be required to create your own plans. The details about the payment settings are given in this article ([payment gateways](https://redq.io/blog/membership-plugin-with-payment-gateways/)). By using these plans, users will be able to subscribe to your site and will become members of your site.

[![cartsy-banner](https://d2qklehrvrfpx7.cloudfront.net/blogimages/cartsy-banner.jpg)](https://bit.ly/cartsyTheme)

[Free Download UserPlace Plugin](https://wordpress.org/plugins/userplace-member-subscription-restriction-payments/)

&lt;span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start"&gt;﻿&lt;/span&gt;

Contents [[show](https://redq.io/blog/plan-creations-membership-site/?fbclid=IwAR3nuQDrtMh2H16D7Ai1Lqy4o382HDgIKH0VYWuQTFUQ3Y4xuCBtln85jt4#)]

## To create a plan, at first, we have to go to the admin menu UserPlace -> Membership Plan

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan1.png)

As you can see, we have already created a default plan for you and this default plan enables a user to be under in this default plan if he is not registered in any plan of the site.

The logged in user will be able to use the facilities that you will include in the default plan. So, Let’s discuss the Default plan.

Default plan will be created upon plugin activation. This is a must have a plan you can’t delete this plan. Any restriction regarding this plan will be applicable to the non-registered user and user without any subscription.

So before creating any new plans, you first have to fix the restriction for this default plan. You can set any plan to default. If you set your plan to this default then This plan is not paid plan. You can edit any restriction for this plan to your need.

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan2.png)

Details about how you can configure default plan restriction will be discussed in restriction sections.

### **How to create a custom plan**

We can add a new plan by clicking add new membership plan.

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan3.png)

To create a new plan we have to complete a few parts I.e plan title, plan page URL, plan builder, plan id and apply restrictions.

Let’s see each and every part of this plan creation. Firstly, we will need to give your plan a name. Then coming to the plan Id which is the most important part of creating a new plan. The plan id needs to be the plan id that we can generate from our payment gateway.

In a nutshell, to add a new plan page, you will fill up these three fields.

- Plan Page Url
- Plan Builder
- Plan Restrictions

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan4.png)

#### **Plan Page Url**

Plan URL section will be auto-generated, so you won’t have to do anything. This section will provide a URL to buy this plan. You can use this URL anywhere.

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan5.png)

##### **Plan Builder**

Plan builder part needs the access to payment gateway dashboard. For this part, we have created two submenus with details documentation where you can create plan and get this plan id.

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan6.png)

##### **Plan restriction**

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan7.png)

We will discuss it in the later.

**Stripe**

We have a dedicated tutorial video for membership plan creation with the stripe gateway which you can see from below URL

To create a stripe plan you need to login to stripe dashboard first. Then navigate to Billing -> Product

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan8.png)

Then, add a new product.

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan9.png)

This you will be redirected to the page with below info

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan10.png)

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan11.png)

Now click the pointed area and then you will be redirected to a new page with plan id and more details

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan12.png)

Copy this plan id and paste it the the wordpress Add member plan Plan builder section Stripe/Braintree Plan Id. Check the below image.

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan13.png)

Braintree

To add a new plan from Braintree dashboards you have to navigate to `Recurring Billing->Plans`section and from the re-click to new

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan14.png)

Now In the new page, you see a button to add a new plan

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan15.png)

Click this button and you will be redirected to create new plan page with below form

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan16.png)

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan17.png)

Fill all the pointed field and press create after creation you will be redirected to new plan details page with your plan ID.

Copy this plan id and paste it the WordPress Add member plan Plan builder section Stripe/Braintree Plan Id. Check the below image.

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan18.png)

Now, Let’s discuss about plan restrictions.

There are three parts in restrictions.

1. General
2. View Restriction
3. Submission Restriction

**General**

In the general section you have the capability to enable/disable plan, make a plan as default, set price, set role for this user plan. The user who will buy this plan will attach this role. You can also set coupon from here.

![img](https://d2qklehrvrfpx7.cloudfront.net/blogimages/plan19.png)

<a href="https://redq.io/userplac" class="btn">Visit Site</a>

Details about coupon will be available in the next article.

**View Restriction**

This portion gives you multiple options to restrict different data from being viewed by a user. Suppose user with default plan subscription, you want to restrict comment capability for any post type. you can do that from view level restriction.

You can also restrict widget, Post type from being shown by this user.

If you restrict this user from being shown blog post then this user won’t be able to see any blog post. Same way user won’t be able to see any restricted widgets.

##### UserPlace Article Series

- UserPlace Intro[: Intro To UserPlace – A Complete Free WordPress Membership Plugin](https://redq.io/blog/userplace-wordpress-membership-plugin-free/)
- UserPlace Coupon:[ How To Setup Coupon In Your Membership Site With UserPlace Plugin](https://redq.io/blog/userplace-setup-coupon-user-role-and-menu-restrictions-on-your-membership-site/)
- Stripe [Setup: UserPlace Plugin – Setup Payment Gateway For Your Membership Site](https://redq.io/blog/membership-plugin-with-payment-gateways/)

<a href="https://wordpress.org/plugins/userplace-member-subscription-restriction-payments/" class="btn">Free Download</a>

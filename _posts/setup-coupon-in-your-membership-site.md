---
title: "How to  Setup Coupon in your Membership Site  With UserPlace Plugin"
date: "2018-10-11"
---

Hello good people, hope you all had a good day and we are ready with a new article of the [UserPlace](https://redq.io/userplace) article series. This tile the article is about coupon creations and it's usage with your membership site by using the [UserPlace Plugin](https://wordpress.org/plugins/userplace-member-subscription-restriction-payments/). So let's dig into the article.

<iframe src="https://www.youtube.com/embed/VcJ95WyzCtc" width="900" height="550" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe>

## **Userplace Coupon**

Coupon is the part where you can create a coupon and attach this coupon to any plan and the plan price will be reduced as the commission of the coupon.

To create a new coupon, at  first you have to go to the dashboard admin menu, UserPlace -> Coupons

![](/assets/blog/images/u90.png) As we can see on the top there is an option "Add New Coupon" and if we click here, we will go to the coupon creation.

Now fill the below fields. Here, the most important field is the Coupons/Discounts Id. To get the Coupons for the stripe to follow the Stripe section below.

![](/assets/blog/images/u91.png)

At the top, there is coupon title and at the bottom, there is "coupons or discounts id". We will require to generate the "coupon id" from the payment gateway and paste it in here.

### **Stripe Coupon**

To generate the "Coupon Id" we need to go to our payment gateway and as we are using stripe lets go to our stripe dashboard. So, Go to Stripe Dashboard menu Billing -> Coupon ([https://dashboard.stripe.com/test/coupons](https://dashboard.stripe.com/test/coupons)). Now add new coupon as your need. Follow the below images.

![](/assets/blog/images/u93.png)

![](/assets/blog/images/u94.png)

Now let's create a new coupon. Next is the type of the discount and we will select it as "fixed discount". let's give the discount amount of 2 USD.

Next is to select the "duration of the discount", we will give this as a "onetime" discount. We can also set the redemption limit.

After creating the coupons you will get the id by clicking on the newly created coupons from the coupons list. Copy that id and paste that id in the coupon fields of the coupons we were creating from WordPress dashboard.

![](/assets/blog/images/u95.png)



You have created your coupon. Next part is attaching this coupon in a plan. When creating a plan you will get a portion to attach coupon. You will get the list of all coupon you have created in your coupons menu. Now select any coupon you want to attach to the plan. Follow the below images. Go to your Membership plan list from dashboard and`Userplace->Membership Plan` edit any plan to attach this new coupon.

![](/assets/blog/images/u96.png)



\[ushop_button_shortcode_blog_wrap btn_align="text-center"\] \[ushop_button_shortcode_blog btn_class="download-btn" btn_text="Free Download UserPlace Plugin" btn_url="https://wordpress.org/plugins/userplace-member-subscription-restriction-payments/"\] \[/ushop_button_shortcode_blog_wrap\]

**UserPlace Article Series**

- UserPlace Intro[: Intro To UserPlace – A Complete Free WordPress Membership Plugin](https://redq.io/blog/userplace-wordpress-membership-plugin-free/)
- Stripe Setup: [UserPlace Plugin – Setup Payment Gateway For Your Membership Site](https://redq.io/blog/membership-plugin-with-payment-gateways/)
- Plan Creation[: Plan Creations And Restrictions In Membership Site Using UserPlace Plugin](https://redq.io/blog/membership-plugin-with-payment-gateways/)

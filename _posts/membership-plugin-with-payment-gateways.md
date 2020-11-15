---
title: "UserPlace Plugin - Setup  Payment Gateway for Your Membership Site"
date: "2018-10-02"
category: "Article, Blog, Plugin"
excerpt: "Hello and welcome to the second part of UserPlace article series. (Fist article Intro To Userplace) As we all know, A complete free WordPress membership plugin available in wordpress.org. This time the article is about Membership plugin with Payments Gateway set up. We will discuss each option step by step. After the UserPlace installation, the first thing we have to"
coverImage: "https://d2qklehrvrfpx7.cloudfront.net/blogimages/stripe.png"
ogImage:
  url: "https://d2qklehrvrfpx7.cloudfront.net/blogimages/stripe.png"
---

Hello and welcome to the second part of [UserPlace](https://redq.io/userplace) article series. (Fist article [Intro To Userplace](https://redq.io/blog/userplace-wordpress-membership-plugin-free/))

[![cartsy-banner](https://d2qklehrvrfpx7.cloudfront.net/blogimages/cartsy-banner.jpg)](https://bit.ly/cartsyTheme)

As we all know, A complete free WordPress membership plugin available in [wordpress.org](https://wordpress.org/plugins/userplace-member-subscription-restriction-payments/). This time the article is about Membership plugin with Payments Gateway set up. We will discuss each option step by step. After the [UserPlace](https://redq.io/userplace) installation, the first thing we have to do is to setup a payment gateway and payment credentials stripe membership site. Once we go to payments from the UserPlace menu, we will see that there are three parts:

<iframe src="https://www.youtube.com/embed/PQd5F3JBOoU" width="900" height="550" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

## WordPress **Membership Plugin with 2 Payment Gateway Free**

- General
- Stripe
- Braintree

![](https://d2qklehrvrfpx7.cloudfront.net/blogimages/stripe1.png)

We have already added two payment gateways to our plugin. They are  [Stripe](https://stripe.com/) and [Braintree](https://www.braintreepayments.com/).

On the general settings, we have to select one of the gateways. It can be either Stripe or Braintree. Now we will elaborate the process step by step.

Let's select stripe on this occasion. As we have chosen stripe we have to move to stripe tab then there is an option to setup payment mode.

![](https://d2qklehrvrfpx7.cloudfront.net/blogimages/stripe2.png)

**Stripe**

In the stripe menu, you will see the below forms. There are two modes for settings i.e. Test and Live. For testing, purpose select the Test Mode and For Production Select the Live mode. You have to provide different credentials for a different mode.

![](https://d2qklehrvrfpx7.cloudfront.net/blogimages/stripe3.png)

![](https://d2qklehrvrfpx7.cloudfront.net/blogimages/stripe11.png)

We will get these keys from stripe gateway dashboard. Please follow the link [https://dashboard.stripe.com/account/apikeys](https://dashboard.stripe.com/account/apikeys)

First, we have to go to the stripe dashboard and from the left-hand side of the menu, we have to select API keys which are under developers. We will see the API key here and now we have to copy the API key and paste it on our test stripe API key field.

![](https://d2qklehrvrfpx7.cloudfront.net/blogimages/stripe4.png)

Then we have to click the reveal test key token and then need to authenticate in order to reveal the key. Let's give our password to authenticate. Now the test API key is revealed and we just have to copy and paste it in the test stripe secret key field and have to click the save button.

![](https://d2qklehrvrfpx7.cloudfront.net/blogimages/stripe5.png)

**Braintree**

If you have selected Braintree in the payment general settings, then you need to follow the below procedure to work with the payment. Braintree Have two mode Sandbox and Production. Use the sandBox mode for testing Purpose.

In the Braintree tab, you will get the below settings form. If you select payment type to Sandbox, you will see like this

![](https://d2qklehrvrfpx7.cloudfront.net/blogimages/stripe6.png)

And If you select payment type to Production, you will see like this

![](https://d2qklehrvrfpx7.cloudfront.net/blogimages/stripe87.png)

To get your Braintree sandbox keys you need to go to the URL [https://sandbox.braintreegateway.com .](https://sandbox.braintreegateway.com/) Now follow the below images to go through the process

![](https://d2qklehrvrfpx7.cloudfront.net/blogimages/stripe8.png)

Now, Please go to API keys page and you will get options like this

![](https://d2qklehrvrfpx7.cloudfront.net/blogimages/stripe9.png)

Now click on the view and you will be redirected to the below page from where you will get all the required details.

![](https://d2qklehrvrfpx7.cloudfront.net/blogimages/stripe10.png)

Fill the corresponding fields with the specific credentials and your Braintree payment gateway is ready is used.

See you in the next part of this article series.

##### UserPlace Article Series

- UserPlace Intro[: Intro To UserPlace – A Complete Free WordPress Membership Plugin](https://redq.io/blog/userplace-wordpress-membership-plugin-free/)
- UserPlace Coupon: [How To Setup Coupon In Your Membership Site With UserPlace Plugin](https://redq.io/blog/userplace-setup-coupon-user-role-and-menu-restrictions-on-your-membership-site/)
- Plan Creation[: Plan Creations And Restrictions In Membership Site Using UserPlace Plugin](https://redq.io/blog/membership-plugin-with-payment-gateways/)

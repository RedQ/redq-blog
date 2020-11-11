// import images
import img16 from '../assets/faq/rnb/16.png';
import img17 from '../assets/faq/rnb/17.png';
import img18 from '../assets/faq/rnb/18.png';

export const faqs = [
	{
		id: 1,
		title: 'How Does General Pricing Work?',
		content:
			'Admin can set general price from the back-end. It’s just like default pricing type of woo-commerce. During booking, the price calculates depending on that price. For example, suppose you set General price as 10$. Now from front-end if anyone book three days the price calculate as ( 10$ + 10$ + 10$ ) = 30$',
	},
	{
		id: 2,
		title: 'How Does Daily Pricing Work?',
		content:
			'Admin can set daily price from the back-end. During booking, the price calculates depending on the respective day’s price. For example, suppose you set Saturday price as 10$, Sunday price as 15$, Monday price as 15$ from the back-end. Now from front-end if anyone book three days as Saturday, Sunday and Monday the price calculated as ( 10$ + 15$ + 15$ ) = 40$',
	},
	{
		id: 3,
		title: 'RnB calendar is not showing?',
		content:
			'Please download the latest version from code canyon and replace the older version with the newest one. Then delete your existing orders from Dashboard->WooCommerce->orders. Hope it will work.',
	},
	{
		id: 4,
		title: 'Does this plugin support Inventory?',
		content:
			'Yes, inventory management feature is available now from v2.0. To get more information about it, you can check our online documentation from our item details page. or simply follow the link: <a href="https://redq.gitbooks.io/woocommerce-rental-and-booking/content/inventory_management.html">Inventory Management</a>',
	},
	{
		id: 5,
		title: 'How Does Monthly Pricing Work?',
		content:
			'Admin can set monthly basis price from the back-end. During booking, the price calculates depending on the respective month’s price. For example, suppose you set January month price as 10$, February price as 15$, March price as 15$ from the back-end. Now from front-end if anyone book three days in January, three days in February then the total price calculates as ( 310$ + 315$ ) = 75$',
	},
	{
		id: 6,
		title: 'How Does Day Ranges Pricing Work?',
		content:
			"Admin can set unlimited day ranges pricing from the back-end. During booking, the price calculates depending on the respective day range's price.+ Suppose you set min day 1 and max days 5 and it’s cost as 60$, another day ranges pricing is min days 6 and max days 10 and it’s cost 50$. You can set price as per-day or fixedbasis. If you set price applicable as per day then the calculation will be like this: Now if anyone book 3 days from front-end then the total price will be = 60 * 3 $ = 180$. Now if any one book 8 days from front-end then the total price will be = 50 * 8 $ = 400$ If you set price applicable as fixed then the calculation will be like this: Now if any one book 3 days from front-end then the total price will be = 60$ = 60$. Now if any one book 8 days from front-end then the total price will be = 50$ = 50$",
	},
	{
		id: 7,
		title:
			'How Can I Set Redirect to Cart Page After Clicking Book Now Button?',
		content:
			'There is an option in woo commerce setting to redirect to cart page after booking. please enable this option then when you click book now button it will redirect you to cart page. You will find this option from here <code>Dashboard->Woo-commerce->settings</code>',
	},
	{
		id: 8,
		title: 'How do I disable/enable pickup date and time?',
		content: 'You find this option in the settings tab of product backend.',
	},
	{
		id: 9,
		title: 'How do I disable/enable drop-off date and time?',
		content:
			'You find this option in the settings tab of product backend. You also find the global setting for this options from <code>Dashboard->woo-commerce->settings->rnb</code> settings tab.',
	},
	{
		id: 10,
		title: 'How do I change pickup or drop-off date title?',
		content:
			'You find this option in the settings tab of product backend. You also find the global setting for this options from <code>Dashboard->woo-commerce->Settings->rnb</code> settings tab.',
	},
	{
		id: 11,
		title: 'How do I change pickup or drop-off location title?',
		content:
			'You find this option in the settings tab of product backend. You also find the global setting for this options from <code>Dashboard->woo-commerce->settings->rnb</code> settings tab.',
	},
	{
		id: 12,
		title:
			'How do I change resource or security deposit or additional person title?',
		content:
			'You find this option in the settings tab of product backend. You also find the global setting for this options from <code>Dashboard->woo-commerce->settings->rnb</code> settings tab.',
	},
	{
		id: 13,
		title:
			'Is your plugin work smoothly with others WooCommerce default product types?',
		content:
			'Yes. it is fully compatible with woo-commerce default product types.',
	},
	{
		id: 14,
		title: 'How can I check admin functionality of this plugin?',
		content:
			'URL username: demo password: demo For this, you have to log in with the above credentials. Then you have to go <code>Dashboard->products->add new</code>, then from product type drop-down select the rental product. Then you can see all admin functionality of this plugin.',
	},
	{
		id: 15,
		title: 'How to make product single page like our demo?',
		content:
			'We used a salient theme to represent our demo and we customize their product single page to implement our own design concept. It’s is not any related part of our plugin. This design will not match with salient’s product single page. We customize code with premium support. If you want this design you can take our premium support and please contact through our support system.',
	},
	{
		id: 16,
		title: 'How Does Hourly Pricing work?',
		content:
			'If you total rental or booking day less than 1day then the booking cost will be calculated as hourly price rate. You can set hourly price from product backend. It works as following. Suppose you set per hour price as 10$ from product backend. Now if your total rental day becomes less than 1day like 2 hours then the booking cost will be 10*2 = 20$. If your total booking or rental days becomes more than 1 day then the hourly price will not work.',
	},
	{
		id: 17,
		title: 'Back-end RnB Calendar is broken.',
		content:
			'It is a problem with the database and the orders that caused the calendar not showing, Please emptied the orders database, then it will be solved.',
	},
	{
		id: 18,
		title: 'Book now button text don’t show in front-end?',
		content:
			'For book now text issue, We’ve provided an option in the setting tab of product backend to set this text. Please check this and set the text. Hope your problem will be solved.',
	},
	{
		id: 19,
		title: 'Add to cart button text is not showing! How to solve it?',
		content:
			'Go to product back-end. From <strong>“setting tab”</strong> select <strong>“physical appearance tab”</strong>. From here you can set the button text.',
	},
	{
		id: 20,
		title:
			'Location data not showing in cart, checkout and email. How to fix it?',
		content:
			'Please check our <a href="https://redq.gitbooks.io/woocommerce-rental-and-booking/content/locations.html">online docs</a>. Hope it will help you.',
	},
	{
		id: 21,
		title: "Where I'll find or download the latest version of plugin?",
		content:
			'You can download it from your download tab. or you can see the download link like this <a href="http://prntscr.com/d7uclt">http://prntscr.com/d7uclt</a> in plugin page <a href="https://codecanyon.net/item/rnb-woocommerce-rental-booking-system/14835145">https://codecanyon.net/item/rnb-woocommerce-rental-booking-system/14835145</a>. For here you can download the latest version.',
	},
	{
		id: 22,
		title: 'Does it support same product multiple item booking at a same time?',
		content:
			"Sorry, this feature isn't currently available. But it will be coming very soon.",
	},
	{
		id: 23,
		title:
			'Does it support WooCommerce Variable-Product variations added inside the Rental-Product?',
		content: "Sorry, this procedure isn't possible.",
	},
	{
		id: 24,
		title:
			'How can I make an option non-clickable that mean this option is required?',
		content:
			'For this you have to create a term from <code>Dashboard->Inventory->Deposit</code> taxonomy. So go to this taxonomy and setSecurity Deposite Clickablevalue as no.',
	},
	{
		id: 25,
		title: 'Which payment gateways are supported by this plugin?',
		content:
			'For payment gateway: our plugins is a standard wooCommerce extension. It supports all payment gateways which are supported by wooCommerce. You can check all supported payment gateway from <a href="https://woocommerce.com/product-category/woocommerce-extensions/payment-gateways/">here </a>. By default, it provides PayPal, Direct bank transfer and Cash on Delivery payment method.',
	},
	{
		id: 26,
		title: 'Does this plugin work on multi site?',
		content:
			'Yes, Our plugin works fine on multisite. For here you can read one of our customer review regarding this It took some time to find out but now I can confirm that this plugin works on multisite. The trick is that you can’t activate WooCommerce or this plugin on network level but you must do it on sub-site level …',
	},
	{
		id: 27,
		title: 'How to delete date from admin panel?',
		content:
			'Every product creates child products depending on it inventory item. You will find these child post in <code>Dashboard->Inventory</code> directory. You can delete the date from the child product of the main product.',
	},
	{
		id: 28,
		title: 'What is Instance Pay During Booking %, how can i remove?',
		content:
			'Instance pay during booking feature works like the following example. Suppose you set instance pay during booking is 50%. That means you must have to pay 50% of your total cost during checkout. You can pay rest 50% after contacting with admin or by hand or later. You can set the no. of a percent from the global setting panel. You will find this option from here <code>Dashboard->WooCommerce->settings->rnb-setting url</code>. You can disable this option for the setting tab of the main product. Go to the back-end of this product and check the <code>Settings->show/hide tab</code>. You will find this option here.',
	},
	{
		id: 29,
		title: 'How to disable some dates from backend?',
		content:
			'In RnB plugin, Every product creates at least one child product in <code>Dashboard->Inventory</code> post type. Child post may be increased depending on your inventory size of that product. You can disable date or date ranges from the child post of main product that you will find <code>Dashboard->Inventory</code>.',
	},
	{
		id: 30,
		title: 'How to change calendar translation?',
		content:
			'Go the <code>wooCommerce->RNB->Settings Tab</code> -> <a href="http://prntscr.com/ea888w">http://prntscr.com/ea888w</a> put the required information.',
	},
	{
		id: 31,
		title: 'Do I get the design like demo after installing the plugin?',
		content:
			'Our rental plugin works with all WooCommerce supported theme. It takes the design of woo-commerce single page of that theme. Our plugin doesn’t provide any custom design to show the rental product in front-end. RnB plugin provides the rental & Booking functionality. We’ve used the Salient theme for our demo site. We’ve customized the woo-commerce single page for our design. If you want the custom design like our demo site. We can do it for premium support.',
	},
	{
		id: 32,
		title: 'How Starting Block Days feature works in this plugin?',
		content:
			'Suppose today is 13 May, You set starting block days as 2. In this case this feature work like this. you can see in front-end calendar that 14 and 15 May are blocked. It always blocks the 2 days starting from today not in per booking.',
	},
	{
		id: 33,
		title: 'How does Post Bookings Block Days feature work?',
		content:
			'Suppose you set Post Bookings Block Days as 2 days. Then if someone book from 15 may to 17 may then you can see in front-end calendar that extra two days after 17 may also be blocked. So that means in this case total block days will be 15, 16, 17, 18, 19 dates in the calendar. Here is one more thing that needs to be clear that in this case customer has to pay only for 3 days.',
	},
	{
		id: 34,
		title: 'How does max late hour work?',
		content:
			'For example. support you set max late hour as 2 from our settings panel. Now if anyone books a car from 10/05/2018, 10:00 to 11/05/2018, 10:00 or 11:00 or 12:00 he will be charged for 1 day. now if he returns at 13:00 or greater than 13:00 he will be charged for extra 1 day. You will find this option in our settings panel on condition tab. The label of this option is <strong>“Max let hour”</strong>.',
	},
	{
		id: 35,
		title: 'How inventory, availability and quantity works in plugin?',
		content:
			'Our plugin provides inventory adding system from the inventory tab of product back-end. You can add unlimited inventory by clicking add inventory button. For example, you have created two inventory from here by clicking add inventory button. Now when someone wants to book this product, he can choose max 2 from quantity for a particular date or range of the day. After booking 2 times of a particular date or date range these will be blocked in the calendar for next customers.',
	},
	{
		id: 36,
		title: 'Is it possible to update quantity from cart page?',
		content:
			'You can’t update quantity from cart page. Our plugin doesn’t allow this. You have to update or modify plugin functionality from the product single page. Our plugin does nothing with the customizer. Please check with your theme developer.',
	},
	{
		id: 37,
		title: 'Request for quote doesn’t send email to user.',
		content:
			'Sometimes your SMTP server has some configuration issue. Please check it with your server provider. Otherwise, you can use some third-party options for sending email directly from your server. You can use Mailgun service, it will take care of your server email issue: <a href="https://wordpress.org/plugins/wp-mailgun-smtp/ https://www.mailgun.com/">https://wordpress.org/plugins/wp-mailgun-smtp/ https://www.mailgun.com/</a>',
	},
	{
		id: 38,
		title: 'Is translation available in my language?',
		content:
			'We’ve added some languages for multi-lingual support. We’ve used Poedit auto-translation and google translation for that. So this translated strings might not be 100% correct for native language. But you can modify the string very easily. Here we’ve explained in details Video tutorial <a href="https://www.youtube.com/watch?v=Jz8MY_K1P38&list=PLUT1MYLrVpA_d_fzbuIDwFANBvo1ckApI&index=3">https://www.youtube.com/watch?v=Jz8MY_K1P38&list=PLUT1MYLrVpA_d_fzbuIDwFANBvo1ckApI&index=3</a> Included languages : German Italian Russian Spanish French Dutch',
	},
	{
		id: 39,
		title: 'Is it possible to add radio button/box instead of checkbox?',
		content:
			'Right now only the checkbox is available. Some customization needed. We will think about it, in the future. If possible we will add radio box support.',
	},
	{
		id: 40,
		title: 'Is it possible to show locations on map?',
		content:
			'Yes. We’ve provided uber like layout in our previous version. You can check our online docs. In the settings panel, there is an option to choose the layout. Please check our online docs to get more idea about the settings options <a href="https://redq.gitbooks.io/woocommerce-rental-and-booking/content/settings-panel.html">https://redq.gitbooks.io/woocommerce-rental-and-booking/content/settings-panel.html</a>',
	},
	{
		id: 41,
		title: 'Manually entering a rental order.',
		content:
			'We don’t have any manual booking support from the administration panel. You should do it form frontend if you want to.',
	},
	{
		id: 42,
		title: 'Information about how to use the Modal product view',
		content: `In order to use the Modal product view you need to:
    <ol>
       <li>Create&nbsp; a new product or edit and existing one.</li>
       <li>Under 'Product Data', change to 'Rental Product'.</li>
       <li>In the same section, click on 'settings' and go to the 'Conditions' tab.</li>
       <li>On the first option ('Choose Settings For Conditions Tab') change to 'Local Settings'. This will tell the system to use your settings for this product and not to use the global settings.</li>
       <li>Finally, scroll down and change 'Choose Booking Layout' to 'Modal Layout'.</li>
    </ol>
    With the product settings configured to 'local settings' and the local settings now set to 'Model Layout' your rental product will now use the modal layout as shown in the demo.`,
	},
	{
		id: 43,
		title: 'Is manually inventory choosing option available?',
		content: 'No it is not possible.',
	},
	{
		id: 44,
		title: 'ajax error on importing turbo data',
		content:
			'please increase the php server execution time and server max upload size in your server. If your error still persists then contact us on our support.',
	},
	{
		id: 45,
		title: 'How to translate Admin text?',
		content: `WPML allows you to translate contents of the Customizer or different theme options as like sliders, footer, and widgets.
    Finding the theme options and making them translatable to make the theme options translatable go to the <code>WPML ->String Translation</code> page and click the <strong>Translate texts in admin screens</strong> option. 
    <img src=${img16} alt="16" />
    On this page, you have to find the right option. Usually, theme options are listed somewhere below <strong>theme_mods_{themename}</strong>. The following image shows an example, where we looked for the <strong>WP Real Estate Pro</strong> theme’s options and found them under <strong>WP Pro Real Estate 6_options</strong>. 
    <img src=${img17} alt="17" /> 
    Theme options are presented in a tree view and inside, we found the sliders stored under the name <strong>ct_flex_slider</strong>. We checked all slide titles to make them translatable. 
    <img src=${img18} alt="18" />`,
	},
	{
		id: 46,
		title:
			'Is it possible to change the wording on the booking form field on product single page such as duration cost etc?',
		content:
			'Hi At present we do not have any option to set them from the back end. So you will have to do a bit of customization on the <code>rnb-data-provider.php</code> and <code>main-script.js</code> files <a href="https://prnt.sc/q6fu89">https://prnt.sc/q6fu89</a> <a href="https://prnt.sc/q6func">https://prnt.sc/q6func</a>',
	},
];

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
];

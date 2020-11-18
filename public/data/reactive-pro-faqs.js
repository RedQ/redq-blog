export const faqs = [
	{
		id: 1,
		title: 'What is the per-requirement knowledge for this plugin?',
		content: `<p>You have to know very basic of WordPress such as</p>
      <p>i) post type/ custom post type</p>
      <p>ii) taxonomy/ custom taxonomy</p>
      <p>iii) meta/ custom meta field</p>
      <p>iv) term meta/ attributes</p>
      <p>v) Geobox</p>
      <p>also, you have planned the whole thing like how to create your post type why you should create it and also you have to create relevant data such as taxonomy and meta field. you can use our free plugin to create custom post type, taxonomy, meta, term meta etc.&nbsp;<a href="https://wordpress.org/plugins/reuse-builder/" target="_blank" rel="noopener">Reuse Builder</a></p>
      <p>after you have all this data ready in your WordPress you can start from our below video tutorial to learn how to start with the reactive pro.</p>
      <p><a href="http://reactive.redq.io/video-guide/" target="_blank" rel="noopener">http://reactive.redq.io/video-guide/</a></p>
      <p>Now at this point, it's ok to guess that you have a&nbsp;<strong>basic wordpress knowledge</strong>&nbsp;and you also have covered our&nbsp;<strong>pre-requirements</strong>, properly read our&nbsp;<strong>documentation</strong>, watched our&nbsp;<strong>video tutorials.&nbsp;</strong>But Still, you are having trouble Understanding How to work with the plugin and Have your Required search functionality. Don't worry To help you We have our Dedicated Technical Support team who will help you to achieve your goal. But to make it quicker we need to work closely so that you can complete the project before the deadline. By close i mean you need to provide proper information so that our technical team can quickly understand your issues and help you to fix it as soon as possible. I am adding common issues and some tips on how you should ask for help in the support forum based on our experiences till now. Though common issues have been discussed thought this&nbsp;<strong>FAQ</strong>&nbsp;section you can have a look at this section in the below FAQ to know about it more.</p>
      <p><strong>Common Issues:</strong></p>
      <p><em><strong>a) The most common issues we heard in the support forum is that nothing is working after installing the plugin.</strong></em>&nbsp;well, it can happen if you didn't setup the free helper add-ons redq-reuse-form or it can also happen because of a third party plugin conflict. we have created a faq for that which you can find below faq<em>&nbsp;</em><strong>vi)</strong>&nbsp;<strong>I have setup the plugin but nothing is working?&nbsp;</strong>if it still doesn't fix your issue you need to ask in the support site specifying that you have followed our faq that i've mention above and followed the steps thats been described but in some steps, you are having trouble or you have issues with a third party plugin by specifying the plugin name.</p>
      <p><strong>b)&nbsp;</strong><em><strong>Another issues we heard is how to use the plugin to achieve your goal?</strong></em>&nbsp;Well if you have the pre-requirement and followed the above steps properly you should have a basic idea about the plugin, but if you still have trouble you need to ask in the support forum by specifying what's your goal or what kind of search page and functionality you need with proper details so that the support forum can send you the steps quickly and you can follow them to do that.</p>
      <p><strong>c)&nbsp;</strong><em><strong>What kind of information or data is needed to be on your site to search for them?&nbsp;</strong>Again This steps is very&nbsp;</em><strong>important</strong>&nbsp;to create your search page, The below data or information is needed for search page in your site:</p>
      <ul>
         <li>You need to know which post type you want to search and also you need to have this post type with posts be ready in your site before your proceed with our plugin though you can work simultaneously with our plugin and your post type with some test posts (by post_type i mean post, product, portfolio, car etc) but the recommended way to do that is to have all your posts ready so that you can tests them with our plugin.</li>
         <li>To search your posts you need to have your taxonomy and meta related with that post type ready so that you can use the taxonomy or meta to search your posts via checkbox, dropdown, range etc.</li>
      </ul>
      <p><em><strong>d) What kind of information i need to provide in the support forum to solve my issues?&nbsp;</strong>_Well this is another tricky part you need to inform them about your requirement in proper details such as&nbsp;<strong>what is Reactive Builder? what post type i should select in Reactive Builder? How to Search parent child category etc?&nbsp;</strong>with your issues details, it helps the support team to understand better your issue if you provide them some screenshot and also inform them&nbsp;</em><strong>which post type you want to search and what is the related information such as taxonomy and meta you have(important).&nbsp;</strong>_To make it even better you can provide the below information,</p>
      <ul>
         <li>Plugin version you are using</li>
         <li>helper addons version you are using</li>
         <li>which step you have already followed</li>
         <li>at what situation you are having the issues</li>
         <li>since when you are having the issues</li>
         <li>at which update you are having the issue</li>
      </ul>
      <p><strong>e) The documentation is too difficult to understand?&nbsp;</strong>You gotta understand that Having a search functionality with your requirement is no simple work. Its a months of work to create a search functionality. But our plugin is here not only to save your efforts but also it give you lots of settings and functionality to make your search page customization easy. There are lots of Searching plugin in the market with easy settings but none of them will provide you with so much functionality, customization like ours. Plus we are give you a Frontend page builder system to create your search page which is supper flexible. It takes people days to learn the basic steps of a new page builder (if you don't know how this page builder works). But I hope our plugin doesn't take it that long and once you master of it you can create search pages for your of clients (Having a search functionality is one of the work thats have a huge demand in both on and off the freelance market) easily. About the difficult part if you follow our direction and contact with the support forum they will make it easier for you to understand also we are continuously working on a more easier User friendly UI and documentation. But keep in mind that A complex work with a Flexible and customization feature based plugin will take some time from you. At least it's worth the time to give it a proper try. And you are not alone a dedicated support team is waiting there for you to help.</p>`,
	},
	{
		id: 2,
		title:
			'Does this plugin support advance custom meta filed such as checkbox, select box, radio box, datepicker, (repetitive field) etc in the meta field?',
		content: `<p>No, this kind of advance meta field does not work with our plugin and also it's not recommended to use advance custom meta field for search-related purpose though it easy to manage to create data but it will hugely make the search performance bad. That's why we haven't tried to bring the feature and at that moment it's not possible to provide this feature either.</p>
    <p>if you need to use the simple custom meta field we recommend using our free plugin&nbsp;<a href="https://wordpress.org/plugins/reuse-builder/" target="_blank" rel="noopener">Reuse Builder&nbsp;</a>instead of other advance custom meta field plugin.</p>
    <p>the advance meta field it will only work it a single data for example if you have a meta checkbox field and you select only one value then it may work but in case of multiple select, it may not work. that's why we don't recommend.</p>`,
	},
	{
		id: 3,
		title:
			'How to do the map single page redirection from the marker pop up window?',
		content: `<p>You can use the below code to do that</p>
    <pre><code>&lt;a href="{{data.post_link}}"&gt;&lt;div class="reactiveInfoWindowWrapper"&gt;
      &lt;div class="reactiveInfoWindowImage"&gt;
        &lt;img src="{{data.thumb_url}}" alt="Image"&gt;
      &lt;/div&gt;
      &lt;div class="reactiveInfoWindowContents"&gt;
        &lt;h4&gt;{{data.post_title}}&lt;/h4&gt;
        &lt;p class="reactiveAddressText"&gt;{{data.meta.formattedAddress}}&lt;/p&gt;
        &lt;p class=""&gt;{{data.meta.phone}}&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;/a&gt;</code></pre>`,
	},
	{
		id: 4,
		title: 'How to show a taxonomy term in grid?',
		content: `Use the below code to show the taxonomy terms
    <pre><code class="language-javascript">
    &lt;# _.each(post.terms.your_taxonomy_name, function(term) { #&gt;
    <span class="{{term.slug}}">{{term.name}}</span>
    &lt;# }); #&gt;
    </code></pre>`,
	},
	{
		id: 5,
		title: 'How to show the meta in the grid?',
		content: `<p>To show metadata in the grid you have to use the below code and make sure you have selected the meta name in the rebuilder shortcode.</p>
    <pre><code class="language-javascript">{{post.meta.your_meta_name}}</code></pre>
    <p>in the "your__meta__name" should be your meta key name.</p>
    `,
	},
	{
		id: 6,
		title: 'I have setup the plugin but nothing is working',
		content: `
    <p>To fix this issue make sure you have installed the helper plugins that is&nbsp;<code>redq-reuse-form</code>&nbsp;and&nbsp;<code>googlemap</code>plugins.</p>
    <p>check the below video tutorial for more details</p>
    <p><a href="https://youtu.be/llabWVjyP8Q?list=PLUT1MYLrVpA9znKC6yCdFGg0hatr2E0qC" target="_blank" rel="noopener">https://youtu.be/llabWVjyP8Q?list=PLUT1MYLrVpA9znKC6yCdFGg0hatr2E0qC</a></p>
    <p>If you still have issues after following this tutorial then follow the below points,</p>
    <ol>
      <li>
        <p>It can be a third party plugin conflict issue you can check it by deactivating other plugins one by one. if it's a plugin issue you can send us the plugin name in our support forum, we will check it for you and let you know in details about the issue so that you can inform the plugin author.</p>
      </li>
      <li>
        <p>it can be due to javascript error as our plugin is based on advance javascript, if you have any js error coming from either your theme or any third party plugin this might not work. in this case, if you know which theme or plugin causing the js error you can contact with them or you can contact with our support team about the js error our team will check it for you.</p>
      </li>
      <li>
        <p>Caching issue if your server or any third party plugin or theme is doing caching on your site the plugin can not work properly as due to caching site store the previous js and CSS files in this case our plugin files may not load properly which you have to find by yourself if it's a caching issue, you can contact your server administrator, theme or third party plugin author to know if they are doing any caching and how can you turn it off.</p>
      </li>
      <li>
        <p>if you still don't know about the issue you can always contact our support team.</p>
      </li>
    </ol>
    `,
	},
	{
		id: 7,
		title: 'How to reduce the post content word in the grid?',
		content: `
      <p>You can use the below code to reduce the post content</p>
      <pre><code>{{post.post_content.substr(0, 20)}}</code></pre>
    `,
	},
	{
		id: 8,
		title: 'How to setup home page search?',
		content: `
    To do the home page search just create a rebuilder shortcode and select the redirect page where you want to redirect when submitting the search.
    <img src="https://redq.io/blog/wp-content/uploads/2018/09/1.png" alt="" width="888" height="645" scale="0">&nbsp;After creating the shortcode as usual paste the shortcode in the homepage and in the frontend create your search bar using drag and resize as you want.
    <img src="https://redq.io/blog/wp-content/uploads/2018/09/2.png" alt="" width="888" height="165" scale="0">
    Then the important part is taking a&nbsp;<code>apply filter</code>&nbsp;button in your search block then from the settings panel of apply filter select your search page and redirect option. that's it.
    <img src="https://redq.io/blog/wp-content/uploads/2018/09/3.png" alt="" width="889" height="159" scale="0">
    <img src="https://redq.io/blog/wp-content/uploads/2018/09/4.png" alt="" width="1251" height="431" scale="0">
    Also, you have to make sure you have already set up the search page where you are redirecting your visitor (the search page you have selected in the apply filter button you have to set up another reactive builder shortcode in that page with same post type and taxonomies so that it can find the result properly. Make sure you don't use the same shortcode for your home page and Redirected page.
    `,
	},
	{
		id: 9,
		title: 'Where can I find the tutorial video?',
		content: `<a href="http://reactive.redq.io/video-guide/">http://reactive.redq.io/video-guide/</a>`,
	},
	{
		id: 10,
		title: 'Which component is best to search for parent child taxonomy?',
		content: `The combo box search component is to search your parent-child search component.`,
	},
	{
		id: 11,
		title: `How to show post in post date /post name/meta value (for example: price[only number format supported]with customization it's possible to order alphabetically) order?`,
		content: `
    <p>To do this you have to go to the global settings option at the top right side,</p>
    <p>then choose your order from the drop-down</p>
    <img src="https://redq.io/blog/wp-content/uploads/2018/09/5.png" alt="" width="1256" height="391" scale="0">
    `,
	},
	{
		id: 12,
		title: 'How to show result grid only for specific terms?',
		content: `<p>To do this you have to go to the global settings option at the top right side,</p>
    <p>then choose your terms from the drop-down</p>
    <img src="https://redq.io/blog/wp-content/uploads/2018/09/6.png" alt="" width="1177" height="574" scale="0">`,
	},
	{
		id: 13,
		title: 'How to provide the sort option for the visitor to sort the result?',
		content: `
    <ul>
      <li>To provide the sort option you have to take a bar component</li>
      <li>from the bar setting panel (click on the + sign at the right side) take a sorting attributes</li>
    </ul>
    <img src="https://redq.io/blog/wp-content/uploads/2018/09/7.png" alt="" width="815" height="52" scale="0">
    <img src="https://redq.io/blog/wp-content/uploads/2018/09/8.png" alt="" width="1196" height="260" scale="0">
    by default, it will only show the default option but you can add options like&nbsp;<code>post date</code>,&nbsp;<code>post name</code>,&nbsp;<code>any kind of meta(only number format</code>&nbsp;to do that click on the settings panel-&gt;go to the sorting tab.
    <img src="https://redq.io/blog/wp-content/uploads/2018/09/9.png" alt="" width="416" height="122" scale="0">
    then you have to choose the option from the dropdown bundle it has two filed one is your meta key that you will choose another one is the text you want to show to the visitor,
    <img src="https://redq.io/blog/wp-content/uploads/2018/09/10.png" alt="" width="1209" height="487" scale="0">
    like below
    <img src="https://redq.io/blog/wp-content/uploads/2018/09/11.png" alt="" width="1222" height="493" scale="0">
    `,
	},
	{
		id: 14,
		title: 'How can I use optimal custom size thumb image in the grid?',
		content: `
    <p>To do that First go to the below file,</p>
    <p>i) reactivepro-&gt;app-&gt;graph.php</p>
    <p>ii) at line number 742 add the below code,</p>
    
    <pre><code>$singlePost['150_thumb'] = wp_get_attachment_thumb_url( $singlePost['thumbnailUrl'] );</code></pre>
    <p>it will look like the below image just change to&nbsp;<code>150_thumb</code>,</p>
    <img src="https://redq.io/blog/wp-content/uploads/2018/09/12.png" alt="" width="807" height="79" scale="0">
    <p>iii) then just add the below code in the grid instead of&nbsp;<code>{{post.thumb_url}}</code></p>
    
    <pre><code>{{post.150_thumb}}</code></pre>
    <p>if you need other sized you can use the below function instead of</p>
    
    <pre><code>wp_get_attachment_thumb_url</code></pre>
    <p><a href="https://developer.wordpress.org/reference/functions/wp_get_attachment_image_src/" target="_blank" rel="noopener">https://developer.wordpress.org/reference/functions/wp_get_attachment_image_src/</a></p>
    
    <pre><code>$singlePost['custom_thumbUrl'] = wp_get_attachment_image_src( $singlePost['thumbnailUrl'], array(250, 250));</code></pre>
    <p>and use it in the grid template like below</p>
    
    <pre><code>{{post.custom_thumbUrl}}</code></pre>
    <p>That's it.</p>
    `,
	},
	{
		id: 15,
		title:
			'Does your Filtering system work with any kind of system or Post Type for example: Car, Real Estate, Jobs, Company, Restaurant etc?',
		content: `Yes, our plugin works with any kind of system or post type, with our plugin if you have fulfilled the above requirement you can easily Filter your site Cars, Real estate, Jobs, company, Restaurant etc with category taxonomy or any custom taxonomy you want. it also supports simple linear meta field to search or filter.`,
	},
	{
		id: 16,
		title: 'How to set up the image picker or How to use it?',
		content: `
    <p>First of all, you need to know exactly why we have built the image picker and why you should use it,</p>
    <p>We have built the image picker to make a meaning full search component in your site, unlike checkbox, radio box it will show images of your taxonomy term meta. For example, if you have property on your site and you want to show images of your property type you can use our image picker in this case. it will look like the below image,</p>
    <img src="https://redq.io/blog/wp-content/uploads/2018/09/13.png" alt="" width="267" height="526" scale="0">
    <p>It will behave exactly like any checkbox or radio box component. so, now let's see what we have exactly done to create this component. as I've already informed you we have used here the term meta. if you don't know what is term meta please search it on google as in our pre-requirement we assume that you have a good idea about post type, taxonomy, meta and term meta. if you don't know about it you have to learn about this and you can use our below plugin to create them,</p>
    <p><a href="https://wordpress.org/plugins/reuse-builder/" target="_blank" rel="noopener">Reuse Builder</a></p>
    <p>so, here's what we've done,</p>
    <p>i) Fist we have created a custom post type called&nbsp;<code>Property</code></p>
    <p>ii) then we have created a custom taxonomy called&nbsp;<code>Property type</code></p>
    <p>iii) then we have created an image type term meta for&nbsp;<code>Property Type</code></p>
    <p>if you have successfully created the above steps and created your terms, here's what it looks like on my site,</p>
    <img src="https://redq.io/blog/wp-content/uploads/2018/09/14.png" alt="" width="1122" height="671" scale="0">
    <strong>Image: Property Type Taxonomy page</strong>
    <img src="https://redq.io/blog/wp-content/uploads/2018/09/15.png" alt="" width="1130" height="479" scale="0">
    <p><strong>Image: Property Type Term page</strong></p>
    <p>so, if you have everything done successfully if you have something similar to the above steps.</p>
    <p>now, take an image picker in your search page.</p>
    <img src="https://redq.io/blog/wp-content/uploads/2018/09/16.png" alt="" width="1219" height="345" scale="0">
    now from the settings panel of image picker choose the term meta and your term meta name,
    <img src="https://redq.io/blog/wp-content/uploads/2018/09/17.png" alt="" width="1238" height="341" scale="0">
    <p>you can see in the above image that we have chosen the Term meta and our term meta name here is&nbsp;<code>image</code>&nbsp;for the property type.</p>
    <p>It will look like the first image if everything is done properly.</p>
    `,
	},
	{
		id: 17,
		title: 'Is there any way to solve Yoast SEO plugin conflict?',
		content: `<p>Actually, this is not our plugin issue, in the latest version of Yoast SEO plugin there is some javascript error in the console coming from the Yoast SEO plugin once they solve this error the conflict will be automatically solved. One of our users has informed us that he solve this issue by turning off Yoast SEO plugin on the reactive admin pages. We will update this section if we find anything more on this.</p>
    <p>Update: we have found a simple solution all you need to do is to turn of the Yoast SEO option on the reactive builder pages. You can turn it off using the screen options.</p>
    <p>From that Screen, options list turn off anything related to Yoast SEO.</p>
    <p>Or temporarily deactivate the Yoast SEO plugin and after creating your builder shortcode you can activate it again.</p>`,
	},
	{
		id: 18,
		title:
			'How to show limited post content or excerpt on the grid without cutting words?',
		content: `
    <p>Follow the below code to do this,</p>
    <pre><code>{{post.post_content.split(" ").splice(0,20).join(" ")}}</code></pre>
    <p>The number 20 here is the number of words you want to show in the grid.</p>`,
	},
];

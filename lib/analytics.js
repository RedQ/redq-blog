// export const GA_TRACKING_ID = 'AW-793894866';
export const GA_TRACKING_ID = 'UA-69989058-2';

export const trackPageview = (url) => {
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url,
	});
};

export const trackEvent = ({ action, category, label, value }) => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value,
	});
};

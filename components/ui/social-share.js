import React, { useState, useEffect } from 'react';
import {
	FacebookShareButton,
	TwitterShareButton,
	EmailShareButton,
	FacebookIcon,
	TwitterIcon,
	EmailIcon,
} from 'react-share';

export default function SocialShare({ title }) {
	const [siteURL, setSiteURL] = useState('');
	useEffect(() => {
		const router = window.location;
		setSiteURL(router.href);
	}, []);
	return (
		<>
			<FacebookShareButton
				className="mr-3 focus:outline-none transition-opacity duration-300 hover:opacity-75"
				quote={title}
				url={siteURL}
			>
				<FacebookIcon round size={46} />
			</FacebookShareButton>
			<TwitterShareButton
				className="mr-3 focus:outline-none transition-opacity duration-300 hover:opacity-75"
				title={title}
				url={siteURL}
			>
				<TwitterIcon round size={46} />
			</TwitterShareButton>
			<EmailShareButton
				className="focus:outline-none transition-opacity duration-300 hover:opacity-75"
				subject={title}
				url={siteURL}
				body={siteURL}
			>
				<EmailIcon round size={46} />
			</EmailShareButton>
		</>
	);
}

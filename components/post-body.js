import { useEffect } from 'react';
import fitvids from 'fitvids';
import SocialShare from './social-share';
import markdownStyles from './markdown-styles.module.css';

export default function PostBody({ content }) {
	useEffect(() => {
		fitvids('.post-container');
	}, []);
	return (
		<div className="max-w-3xl mx-auto">
			<div
				className={`post-container ${markdownStyles['markdown']}`}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
			<div className="mt-12">
				<h2 className="text-2xl mb-5 leading-snug text-gray-900 font-semibold">
					Share on:
				</h2>
				<SocialShare />
			</div>
		</div>
	);
}

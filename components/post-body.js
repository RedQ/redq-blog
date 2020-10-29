import { useEffect } from 'react';
import fitvids from 'fitvids';
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
		</div>
	);
}

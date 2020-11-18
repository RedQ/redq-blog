import PostHeader from './post-header';
import PostBody from './post-body';

export default function PostSingle({
	date,
	title,
	category,
	coverImage,
	content,
}) {
	return (
		<>
			<PostHeader
				date={date}
				title={title}
				category={category}
				coverImage={coverImage}
			/>
			<PostBody content={content} />
		</>
	);
}

import cn from 'classnames';
// import Avatar from '../components/avatar';
import Container from '../components/container';
import DateFormatter from '../components/date-formatter';
import CoverImage from '../components/cover-image';
import PostTitle from '../components/post-title';

export default function PostHeader({ title, coverImage, date, author }) {
	return (
		<>
			<div
				className="w-screen bg-light-gray transform -translate-x-1/2 pt-40 pb-24 mb-8 md:mb-16"
				style={{ marginLeft: '50%' }}
			>
				<Container className="px-10">
					<div className="mb-6 text-blue-700 uppercase tracking-widest text-sm font-semibold">
						<DateFormatter dateString={date} />
					</div>
					<PostTitle className="max-w-screen-md">{title}</PostTitle>
				</Container>
			</div>
			<div className="max-w-3xl mx-auto mb-10">
				<CoverImage
					className={cn('w-full shadow-xl')}
					title={title}
					src={coverImage}
				/>
			</div>
			{/*<div className="max-w-3xl mx-auto">
				<div className="block md:hidden mb-6">
					<Avatar name={author?.name} picture={author?.picture} />
				</div>
			</div>*/}
		</>
	);
}

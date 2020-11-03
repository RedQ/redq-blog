import cn from 'classnames';
import Container from './container';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import SocialShare from './social-share';
import Categories from './categories';

// dummy category
const categories = [
	{
		path: '/blog',
		title: '#React',
	},
	{
		path: '/blog',
		title: '#Next',
	},
	{
		path: '/blog',
		title: '#Gatsby',
	},
	{
		path: '/blog',
		title: '#GraphQL',
	},
];

export default function PostHeader({ title, coverImage, date }) {
	return (
		<>
			<div
				className="w-screen bg-light-gray transform -translate-x-1/2 py-24 md:py-32 lg:py-40 mb-12 sm:mb-16 relative"
				style={{ marginLeft: '50%' }}
			>
				<Container className="px-5 pb-1">
					<div className="mb-6 text-blue-700 uppercase tracking-widest text-sm font-semibold">
						<DateFormatter dateString={date} />
					</div>
					<h1 className="max-w-screen-md text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-8">
						{title}
					</h1>
					<SocialShare title={title} />
				</Container>
				{/* Start banner dot pattern */}
				<div
					className="absolute hidden sm:block"
					style={{
						opacity: 0.4,
						backgroundColor: '#f4f4f4',
						backgroundImage: 'radial-gradient(#2b6cb0 1px, #f4f4f4 1px)',
						backgroundSize: '22px 22px',
						right: '8px',
						width: '25%',
						height: '56%',
						bottom: '18px',
						zIndex: -1,
					}}
				></div>
				{/* End banner dot pattern */}
			</div>
			<div className="max-w-3xl mx-auto mb-10">
				<Categories className="mb-6" items={categories} />
				<CoverImage
					className={cn('w-full shadow-xl')}
					title={title}
					src={coverImage}
				/>
			</div>
		</>
	);
}

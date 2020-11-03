import Link from 'next/link';

const Categories = ({ className, items }) => {
	return (
		<div className={`site-categories ${className}`}>
			{items.map((item, index) => (
				<Link href={item.path} key={`${item.title}-${index}`}>
					<a className="font-semibold uppercase tracking-widest text-sm text-blue-700 mr-4 transition-colors duration-300">
						{item.title}
					</a>
				</Link>
			))}
		</div>
	);
};

export default Categories;

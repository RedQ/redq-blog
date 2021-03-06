import { useState } from 'react';
import FlipMove from 'react-flip-move';
import Masonry from 'react-masonry-component';
import Container from '../../ui/container';
import SectionHeader from '../../ui/section-header';
import Img from '../../ui/image';
import FilterBar from './filter-bar';
import useItems from '../../../lib/use-list';
// products data
export default function ProductsBlock({ products: productList }) {
	const { items, filterByCategory, loadMore, hasMore } = useItems({
		list: productList,
		limit: 27,
	});

	const [filterByState, setStateFilterBy] = useState('all');
	const handleFilter = (filterBy) => {
		setStateFilterBy(filterBy);
		filterByCategory(filterBy);
	};

	return (
		<section className="py-10 lg:py-12 2xl:pt-16 2xl:pb-14 -mb-5">
			<Container fluid={true}>
				<SectionHeader
					slogan="Meet our products"
					title="Premium Themes, Plugins & Templates"
				/>

				<FilterBar isActive={filterByState} onClick={handleFilter} />

				<FlipMove className="mt-6 md:mt-8 lg:mt-10 2xl:mt-12 -m-5">
					<Masonry>
						{items?.map((item) => (
							<article
								key={`product-key-${item.id}`}
								className={`w-full md:w-3/6 xl:w-2/6 p-4 2xl:p-5`}
							>
								<a target="_blank" href={item.url}>
									<figure className="relative">
										<Img
											width={item.thumb.width}
											height={item.thumb.height}
											src={item.thumb.url}
											alt={item.title}
											quality={100}
											className="border border-product-border rounded-md"
										/>
										{item.featured && (
											<span className="tracking-wider absolute top-4 right-4 z-10 rounded py-1 px-2 text-sm font-medium uppercase text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
												Featured
											</span>
										)}
									</figure>
								</a>
								<header className="py-4">
									<a
										className="text-lg xl:text-xl font-medium tracking-tight mb-4"
										target="_blank"
										href={item.url}
									>
										{item.title}
									</a>
									<p className="text-rq-gray-600 mb-3 mt-3">
										{item.shortDescription}
									</p>
									<div className="flex items-center text-sm">
										<span className="bg-black text-white font-semibold rounded-2xl py-1 px-3">
											{item.price}
										</span>
										<span className="text-rq-gray-500 ml-3">
											{item.compatibleText}
										</span>
									</div>
								</header>
							</article>
						))}
					</Masonry>
					<div className="flex justify-center items-center mt-4 mb-8">
						{hasMore && (
							<a
								onClick={loadMore}
								className=" inline-block cursor-pointer outline-none bg-rq-gray-800 text-white font-semibold rounded py-4 px-8 transition-colors duration-200 hover:bg-rq-gray-700 focus:outline-none "
							>
								View More Products
							</a>
						)}
					</div>
				</FlipMove>
			</Container>
		</section>
	);
}

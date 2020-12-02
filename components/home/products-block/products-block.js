import { useState } from 'react';
import FlipMove from 'react-flip-move';
import Masonry from 'react-masonry-component';
import Container from '../../ui/container';
import SectionHeader from '../../ui/section-header';
import Img from '../../ui/image';
import FilterBar from './filter-bar';
// products data
import { productsData } from '../../../public/data/home-page/products.data';

export default function ProductsBlock() {
	const [products, setProducts] = useState(productsData);
	const [filterByState, setStateFilterBy] = useState('all');
	const handleFilter = (filterBy) => {
		setStateFilterBy(filterBy);
		const filteredProducts = productsData.filter((item) =>
			item.category.some((cat) => cat === filterBy)
		);
		setProducts(filteredProducts);
	};

	return (
		<section className="py-10 lg:py-12 2xl:pt-16 2xl:pb-14 -mb-5">
			<Container fluid={true}>
				<SectionHeader
					slogan="Meet our products"
					title="Premium Themes & Templates"
				/>

				<FilterBar isActive={filterByState} onClick={handleFilter} />

				<FlipMove className="mt-6 md:mt-8 lg:mt-10 2xl:mt-12 -m-5">
					<Masonry>
						{products.length > 0 &&
							products.map((item) => (
								<article
									key={`product-key-${item.id}`}
									className={`w-full sm:w-3/6 lg:w-2/6 p-4 2xl:p-5`}
								>
									<figure className="relative">
										<Img
											width={item.thumb.width}
											height={item.thumb.height}
											src={item.thumb.url}
											alt={item.title}
											quality={100}
										/>
										{item.featured && (
											<span className="tracking-wider absolute top-4 right-4 z-10 rounded py-1 px-2 text-sm font-medium uppercase text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
												Featured
											</span>
										)}
									</figure>
									<header className="py-4">
										<h2 className="text-lg xl:text-xl font-medium tracking-tight mb-2">
											{item.title}
										</h2>
										<p className="text-rq-gray-600 mb-3">
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
				</FlipMove>
			</Container>
		</section>
	);
}

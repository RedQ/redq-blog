import { useState } from 'react';
import FlipMove from 'react-flip-move';
import Masonry from 'react-masonry-component';
import Container from '../../ui/container';
import SectionHeader from '../../ui/section-header';
import Img from '../../ui/image';
import FilterBar from './filter-bar';
// products data
import { productsData } from '../../../public/data/home-page';

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
		<section className="py-16">
			<Container fluid={true}>
				<SectionHeader
					slogan="Meet our products"
					title="Premium Themes & Templates"
				/>

				<FilterBar isActive={filterByState} onClick={handleFilter} />

				<FlipMove
					className="mt-12 -m-5"
					// flex flex-wrap items-start
				>
					<Masonry>
						{products.length > 0 &&
							products.map((item) => (
								<article
									key={`product-key-${item.id}`}
									className={`w-2/6 p-5`}
									// ${item.featured ? 'w-3/6' : 'w-2/6'}
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
										<h2 className="text-xl font-medium tracking-tight mb-2">
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

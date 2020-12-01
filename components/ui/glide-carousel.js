import React, { Fragment, useEffect } from 'react';
import Glide from '@glidejs/glide';

const GlideCarousel = ({
	className,
	children,
	options,
	controls,
	prevButton,
	nextButton,
	bullets,
	numberOfBullets,
	carouselSelector,
}) => {
	const totalBullets = [];
	const addClasses = ['glide -mb-8'];

	for (let i = 0; i < numberOfBullets; i++) {
		totalBullets.push(i);
	}

	useEffect(() => {
		const glide = new Glide(
			carouselSelector ? `#${carouselSelector}` : '#glide',
			{
				...options,
			}
		);
		glide.mount();
	}, [carouselSelector, options]);

	if (className) {
		addClasses.push(className);
	}

	return (
		<div className={addClasses.join(' ')} id={carouselSelector || 'glide'}>
			<div className="glide__track" data-glide-el="track">
				<ul className="glide__slides pb-8">{children}</ul>
			</div>

			{controls && (
				<div
					className="glide__controls flex items-center"
					data-glide-el="controls"
				>
					<div className="glide__prev--area cursor-pointer" data-glide-dir="<">
						{prevButton ? (
							prevButton
						) : (
							<button className="absolute top-1/2 -mt-4 left-5 focus:outline-none py-2 px-4 rounded-3xl m-1 bg-rq-gray-800 text-white transition-colors duration-200 hover:bg-rq-gray-700">
								Prev
							</button>
						)}
					</div>
					<div className="glide__next--area cursor-pointer" data-glide-dir=">">
						{nextButton ? (
							nextButton
						) : (
							<button className="absolute top-1/2 -mt-4 right-5 focus:outline-none py-2 px-4 rounded-3xl m-1 bg-rq-gray-800 text-white transition-colors duration-200 hover:bg-rq-gray-700">
								Next
							</button>
						)}
					</div>
				</div>
			)}

			{bullets && (
				<div className="glide__bullets" data-glide-el="controls[nav]">
					<Fragment>
						{totalBullets.map((index) => (
							<button
								key={index}
								className="glide__bullet"
								data-glide-dir={`=${index}`}
							/>
						))}
					</Fragment>
				</div>
			)}
		</div>
	);
};

export const GlideSlide = ({ children }) => {
	return <div className="glide__slide relative">{children}</div>;
};

export const GlideNavButton = ({ className = '', children }) => {
	return (
		<button
			className={`${className} focus:outline-none absolute top-1/2 -mt-8 2xl:-mt-5 shadow-btn w-12 h-12  2xl:w-14 2xl:h-14 rounded-full bg-white flex items-center justify-center transition-colors duration-200 hover:bg-rq-gray-800 hover:text-white`}
		>
			{children}
		</button>
	);
};

export default GlideCarousel;

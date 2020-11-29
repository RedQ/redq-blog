import Img from '../ui/image';

export default function ProductCarousel() {
	return (
		<div className="relative w-full 2xl:my-16" style={{ height: '520px' }}>
			<Img
				src={'/images/cartsy-product-banner.png'}
				alt="Slider"
				layout="fill"
				objectFit="contain"
				quality={100}
			/>
		</div>
	);
}

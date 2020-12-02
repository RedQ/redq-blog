import Container from '../ui/container';
import { sliderWrapper, slidingFromRight } from './technology-block.module.css';
// import data
import { technologyData } from '../../public/data/technology.data';

export default function TechnologyBlock() {
	return (
		<>
			<Container className="py-10 lg:py-12 2xl:py-14">
				<div className="flex flex-col md:flex-row md:items-center">
					<span
						className="text-lg mr-8 flex-shrink-0"
						style={{ color: '#7C8894' }}
					>
						Technology we used:
					</span>
					<div
						className={`${sliderWrapper} flex flex-nowrap flex-auto items-center justify-between overflow-hidden w-full md:w-auto`}
					>
						<div
							className={`${slidingFromRight} flex items-center flex-shrink-0`}
						>
							{technologyData.map((item) => (
								<img
									key={`row-one-${item.title}`}
									src={item.thumb}
									alt={item.title}
									className="mx-6 lg:mx-8"
								/>
							))}
						</div>
						<div
							className={`${slidingFromRight} flex items-center flex-shrink-0`}
						>
							{technologyData.map((item) => (
								<img
									key={`row-two-${item.title}`}
									src={item.thumb}
									alt={item.title}
									className="mx-6 lg:mx-8"
								/>
							))}
						</div>
					</div>
				</div>
				<hr className="mt-6 md:mt-8 xl:mt-12 2xl:mt-14" />
			</Container>
		</>
	);
}

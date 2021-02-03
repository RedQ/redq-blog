import Container from '../ui/container';
import StatCard from '../ui/stat-card';

export default function StatsBlock() {
	return (
		<Container className="pt-2 md:pt-8 lg:pt-12 xl:pt-20 2xl:pt-24 pb-0  lg:pb-12 flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between">
			<div className="max-w-xl w-full md:max-w-rq-618 lg:max-w-md 2xl:max-w-3xl flex flex-col justify-center items-center lg:justify-start lg:items-start">
				<h2 className="max-w-full text-center lg:text-left text-2xl md:text-3xl leading-normal lg:text-4xl lg:leading-snug xl:text-44px xl:leading-snug font-bold tracking-tight md:leading-normal mb-3 lg:mb-5">
					Elite Author in Envato, build amazing products that creates value.
				</h2>
				<p className="w-full leading-loose text-rq-gray-800 md:max-w-lg lg:max-w-lg mb-5 md:mb-7 text-center lg:text-left">
					Along With WordPress Themes & Plugins, We always try to use latest
					trending technologies like React, Next Js, Gatsby Js, GraphQl, Shopify
					etc to make our products special.
				</p>
				<a
					href="https://themeforest.net/user/redqteam/portfolio"
					target="_blank"
					className="inline-block cursor-pointer outline-none bg-rq-gray-800 text-white font-semibold rounded py-4 px-8 transition-colors duration-200 hover:bg-rq-gray-700"
				>
					Our Portfolio
				</a>
			</div>
			<div className="flex-auto max-w-lg lg:max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-0 lg:pl-10 2xl:pl-0 gap-x-6 md:gap-x-8 2xl:gap-x-10 mt-10 xl:mt-0">
				<StatCard
					title="Up to"
					statNumber="97"
					shortInfo="Satisfied Customer"
					showPercentage={true}
					className="lg:transform lg:-translate-y-8 2xl:-translate-y-10"
				/>
				<StatCard
					title="Total"
					statNumber="30+"
					shortInfo="Highly crafted product"
				/>
			</div>
		</Container>
	);
}

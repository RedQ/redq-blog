import Container from '../ui/container';
import StatCard from '../ui/stat-card';

export default function StatsBlock() {
	return (
		<Container className="pt-8 lg:pt-12 xl:pt-20 pb-12 lg:pb-16 flex flex-wrap lg:flex-nowrap items-center justify-between">
			<div className="max-w-xl lg:max-w-md xl:max-w-xl 2xl:max-w-2xl">
				<h2 className="text-3xl leading-normal lg:text-4xl xl:text-44px font-bold tracking-tight lg:leading-snug mb-5 lg:mb-7">
					Elite Author in Envato, build <br className="hidden sm:block" />
					products that creates value.
				</h2>
				<p className="leading-loose text-rq-gray-800 lg:max-w-lg">
					Along With Wordpress Themes & Plugins, We always try to use latest
					trending techs like React, Next Js, Gatsby Js, GraphQl, Shopify etc to
					make our products special.
				</p>
			</div>
			<div className="flex-auto max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-0 lg:pl-10 2xl:pl-0 gap-x-6 md:gap-x-8 2xl:gap-x-10 mt-10 xl:mt-0">
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

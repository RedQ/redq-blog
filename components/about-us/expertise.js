import Container from '../ui/container';
import StatCard from '../ui/stat-card';

export default function StatsBlock() {
	return (
		<div>
			<Container className="pt-8 lg:pt-12 xl:pt-20 lg:pb-16 flex flex-wrap lg:flex-nowrap justify-between">
				<div className="max-w-full w-full lg:max-w-md xl:max-w-4xl lg:w-1/2 ">
					<h2 className="text-center lg:text-left text-2xl leading-normal lg:text-4xl 2xl:text-44px font-bold tracking-tight lg:leading-snug mb-5 lg:mb-7">
						Elite Author in Envato, <br className="hidden lg:block" /> build
						products that creates value
					</h2>
				</div>
				<div className="flex-auto max-w-full lg:pl-10 2xl:pl-0 text-center lg:text-left">
					<p className="leading-loose text-rq-gray-800 lg:max-w-lg text-center lg:text-left">
						Along With Wordpress Themes & Plugins, We always try to use latest
						trending techs like React, Next Js, Gatsby Js, GraphQl, Shopify etc
						to make our products special. Our rich tech choice will help you to
						build high performance applications. We are also known to provide
						great customer supports to our customers.
					</p>
				</div>
			</Container>
			<Container className="pt-8 lg:pt-12 xl:pt-20 pb-12 lg:pb-16 flex flex-wrap lg:flex-nowrap items-center justify-between">
				<div className="flex-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-y-0 lg:pl-0 2xl:pl-0 gap-x-6 md:gap-x-8 2xl:gap-x-10 mt-10 xl:mt-0">
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
						shortInfo="Highly crafted products"
					/>
					<StatCard
						title="Up to"
						statNumber="99"
						shortInfo="Rich Tech Choices"
						showPercentage={true}
						className="lg:transform lg:-translate-y-8 2xl:-translate-y-10"
					/>
					<StatCard
						title="Total"
						statNumber="10+"
						shortInfo="React Based Templates"
					/>
				</div>
			</Container>
		</div>
	);
}

import Container from '../ui/container';
import StatCard from '../ui/stat-card';

export default function StatsBlock() {
	return (
		<div>
			<Container className="pt-8 lg:pt-12 xl:pt-20 pb-12 lg:pb-16 flex flex-wrap lg:flex-nowrap justify-between">
				<div className="max-w-xl lg:max-w-md xl:max-w-lg lg:w-1/2">
					<h2 className="text-3xl leading-normal lg:text-4xl xl:text-44px font-bold tracking-tight lg:leading-snug mb-5 lg:mb-7">
						One of the fastest growing <br className="hidden sm:block" />{' '}
						software agencies in BD
					</h2>
				</div>
				<div className="flex-auto max-w-2xl lg:pl-10 2xl:pl-0">
					<p className="leading-loose text-rq-gray-800 lg:max-w-lg">
						Pick one of our stock themes, or create your custom theme with the
						most advanced theme editor on any online survey building tool. It is
						built to perform and run fast on all of the latest devices.
					</p>
				</div>
			</Container>
			<Container className="pt-8 lg:pt-12 xl:pt-20 pb-12 lg:pb-16 flex flex-wrap lg:flex-nowrap items-center justify-between">
				<div className="flex-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-y-0 lg:pl-0 2xl:pl-0 gap-x-6 md:gap-x-8 2xl:gap-x-10 mt-10 xl:mt-0">
					<StatCard
						title="Up to"
						statNumber="98"
						shortInfo="Satisfied Customer"
						showPercentage={true}
						className="lg:transform lg:-translate-y-8 2xl:-translate-y-10"
					/>
					<StatCard
						title="Total"
						statNumber="20+"
						shortInfo="Highly crafted product"
					/>
					<StatCard
						title="Up to"
						statNumber="98"
						shortInfo="Satisfied Customer"
						showPercentage={true}
						className="lg:transform lg:-translate-y-8 2xl:-translate-y-10"
					/>
					<StatCard
						title="Total"
						statNumber="20+"
						shortInfo="Highly crafted product"
					/>
				</div>
			</Container>
		</div>
	);
}

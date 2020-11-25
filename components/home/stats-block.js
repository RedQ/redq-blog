import Container from '../ui/container';
import StatCard from '../ui/stat-card';

export default function StatsBlock() {
	return (
		<Container className="py-16 flex items-center justify-between">
			<div>
				<h2 className="text-44px font-bold tracking-tight leading-snug mb-7">
					One of the fastest growing <br className="hidden sm:block" /> software
					agencies in BD
				</h2>
				<p className="leading-loose text-rq-gray-800 max-w-lg">
					Pick one of our stock themes, or create your custom theme with the
					most advanced theme editor on any online survey building tool. It is
					built to perform and run fast on all of the latest devices.
				</p>
			</div>
			<div className="flex-auto max-w-2xl grid grid-cols-2 pl-10 2xl:pl-0 gap-x-8 2xl:gap-x-10">
				<StatCard
					title="Up to"
					statNumber="98"
					shortInfo="Satisfied Customer"
					showPercentage={true}
					className="transform -translate-y-8 2xl:-translate-y-10"
				/>
				<StatCard
					title="Total"
					statNumber="20+"
					shortInfo="Highly crafted product"
				/>
			</div>
		</Container>
	);
}

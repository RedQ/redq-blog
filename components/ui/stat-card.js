export default function StatCard({
	title,
	statNumber,
	showPercentage,
	shortInfo,
	className = '',
}) {
	return (
		<div
			className={`p-8 xl:pt-10 xl:px-11 xl:pb-14 rounded-xl shadow-base transition-shadow hover:shadow-large ${className}`}
		>
			<span className="text-lg text-rq-gray-800">{title}</span>
			{showPercentage ? (
				<h2 className="flex items-center text-4xl xl:text-70px font-medium leading-tight mt-1 xl:mt-0 mb-2 xl:mb-0">
					{statNumber}
					<span className="font-normal text-3xl xl:text-40px">%</span>
				</h2>
			) : (
				<h2 className="flex items-center text-4xl xl:text-70px font-medium leading-tight mt-1 xl:mt-0 mb-2 xl:mb-0">
					{statNumber}
				</h2>
			)}
			<p className="text-rq-gray-800">{shortInfo}</p>
		</div>
	);
}

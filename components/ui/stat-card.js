export default function StatCard({
	title,
	statNumber,
	showPercentage,
	shortInfo,
	className = '',
}) {
	return (
		<div
			className={`pt-10 px-11 pb-14 rounded-xl shadow-base transition-shadow hover:shadow-large ${className}`}
		>
			<span className="text-lg text-rq-gray-800">{title}</span>
			{showPercentage ? (
				<h2 className="flex items-center text-70px font-medium leading-tight">
					{statNumber}
					<span className="font-normal text-40px">%</span>
				</h2>
			) : (
				<h2 className="flex items-center text-70px font-medium leading-tight">
					{statNumber}
				</h2>
			)}
			<p className="text-rq-gray-800">{shortInfo}</p>
		</div>
	);
}

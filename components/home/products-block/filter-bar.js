const filterBtns = [
	{
		title: 'All Items',
		handel: 'all',
	},
	{
		title: 'Wordpress Theme',
		handel: 'wp-theme',
	},
	{
		title: 'React Template',
		handel: 'react-template',
	},
	{
		title: 'Plugins',
		handel: 'plugins',
	},
];

export default function FilterBar({ isActive, onClick }) {
	return (
		<div className="mt-10 flex items-center justify-center">
			{filterBtns.map((item) => (
				<button
					key={`filter-btn-${item.handel}`}
					className={`focus:outline-none border border-solid rounded-3xl py-2.5 px-5 mx-1 transition-colors duration-300
          ${
						isActive === item.handel
							? 'text-white bg-black border-black'
							: 'text-filter-text border-rq-gray-400'
					}`}
					onClick={() => onClick(item.handel)}
				>
					{item.title}
				</button>
			))}
		</div>
	);
}

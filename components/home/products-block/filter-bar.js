const filterBtns = [
	{
		title: 'All Items',
		handel: 'all',
	},
	{
		title: 'WordPress Themes',
		handel: 'wp-theme',
	},
	{
		title: 'React Templates',
		handel: 'react-template',
	},
	{
		title: 'WordPress Plugins',
		handel: 'wp-plugin',
	},
	{
		title: 'Html Templates',
		handel: 'html',
	},
];

export default function FilterBar({ isActive, onClick }) {
	return (
		<div className="mt-4 lg:mt-10 flex flex-wrap items-center justify-center">
			{filterBtns.map((item) => (
				<button
					key={`filter-btn-${item.handel}`}
					className={`focus:outline-none border border-solid rounded-3xl py-2.5 px-5 mr-1 md:mr-3  mt-4 lg:m-1 transition-colors duration-300
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

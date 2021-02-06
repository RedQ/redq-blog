export default function SectionHeader({ className = '', slogan, title }) {
	return (
		<header className={`text-center px-2 ${className}`}>
			{slogan && (
				<div className="text-rq-blue-800 font-medium 2xl:text-lg mb-3.5">
					{slogan}
				</div>
			)}
			{title && (
				<h2 className="text-xl md:text-2xl lg:text-3xl font-medium leading-snug tracking-tight">
					{title}
				</h2>
			)}
		</header>
	);
}

export default function PostTitle({ className, children }) {
	return (
		<h1 className={`text-6xl font-bold tracking-tight ${className}`}>
			{children}
		</h1>
	);
}

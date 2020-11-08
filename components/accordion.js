import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineSearch } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';

export const Accordion = ({ i, expanded, setExpanded, id, title, content }) => {
	const isOpen = i === expanded;
	return (
		<div className="mb-3">
			<motion.header
				initial={false}
				animate={{
					backgroundColor: isOpen ? '#ebebeb' : '#f4f4f4',
				}}
				onClick={() => setExpanded(isOpen ? false : i)}
				className="py-4 px-5 rounded cursor-pointer flex items-center justify-between"
			>
				<h2 className="text-lg font-semibold text-gray-800">
					{id}. {title}
				</h2>
				{isOpen ? <AiOutlineMinus size={20} /> : <AiOutlinePlus size={20} />}
			</motion.header>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						key="content"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: 'auto' },
							collapsed: { opacity: 0, height: 0 },
						}}
						transition={{ ease: [0.04, 0.62, 0.23, 0.98] }}
					>
						<div
							className="py-4 px-5 text-gray-700"
							dangerouslySetInnerHTML={{ __html: content }}
						></div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

// motion variants
let easing = [0.175, 0.85, 0.42, 0.96];
const fadeInBottom = {
	exit: {
		y: 50,
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: easing,
		},
	},
	enter: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: easing,
		},
	},
};

export const AccordionWithFilter = ({ items }) => {
	let searchedFaqs = items;
	const [expanded, setExpanded] = useState(0);
	const [searchString, setSearchString] = useState('');
	if (searchString.length > 0) {
		searchedFaqs = items.filter(function (item) {
			const title = item.title;
			return title.match(searchString) ||
				title.toLowerCase().match(searchString)
				? title
				: '';
		});
	}

	return (
		<div className="mb-12">
			<div className="filter mb-8 relative">
				<input
					type="text"
					className="w-full border border-solid border-gray-300 rounded py-4 px-5 bg-light-gray text-gray-700 placeholder-gray-600 outline-none transition-all duration-300 focus:bg-white"
					placeholder="Search here"
					onChange={(e) => setSearchString(e.target.value)}
				/>
				<AiOutlineSearch
					size={22}
					style={{ top: '31%', right: '20px' }}
					className="absolute text-gray-600"
				/>
			</div>
			<AnimatePresence>
				{searchedFaqs.length > 0 ? (
					searchedFaqs.map((faq, index) => (
						<motion.div variants={fadeInBottom}>
							<Accordion
								i={index}
								key={`${faq.title}-${faq.id}`}
								id={faq?.id}
								title={faq.title}
								content={faq.content}
								expanded={expanded}
								setExpanded={setExpanded}
							/>
						</motion.div>
					))
				) : (
					<motion.div
						variants={fadeInBottom}
						className="p2 text-xl flex items-center justify-center"
					>
						Not found <span className="text-4xl ml-2">😥</span>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

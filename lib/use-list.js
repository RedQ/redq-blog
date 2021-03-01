import { useState } from 'react';

export default function useItems({ list = [], limit = 10 }) {
	const [currentItems, setCurrentItems] = useState(list);
	const [items, setItems] = useState(currentItems?.slice(0, limit));
	const [hasMore, setHasMore] = useState(currentItems?.length > limit);
	const [index, setIndex] = useState(limit);
	function loadMore() {
		const newIndex = index + limit;
		const newHasMore = newIndex < currentItems?.length;
		const newList = [...items, ...currentItems.slice(index, newIndex)];
		setIndex(newIndex);
		setItems(newList);
		setHasMore(newHasMore);
	}
	function filterByCategory(category) {
		const newIndex = limit;
		const filteredList = list?.filter((item) =>
			item.category.some((cat) => cat === category)
		);
		const newHasMore = newIndex < filteredList?.length;
		const newList = filteredList.slice(0, newIndex);
		setIndex(newIndex);
		setItems(newList);
		setCurrentItems(filteredList);
		setHasMore(newHasMore);
	}
	return {
		items,
		hasMore,
		loadMore,
		filterByCategory,
	};
}

// import { useRoute } from '@react-navigation/native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import { MealsList } from '../components';

export const MealsOverviewScreen = ({ navigation, route }) => {
	const catId = route.params.categoryId;

	const displayedMeals = MEALS?.filter((mealItem) => {
		return mealItem?.categoryIds.indexOf(catId) !== -1;
	});

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find(
			(category) => category.id === catId
		).title;

		navigation.setOptions({
			title: categoryTitle,
		});
	}, [catId, navigation]);

	return <MealsList items={displayedMeals} />;
};

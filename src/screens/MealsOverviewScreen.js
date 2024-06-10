// import { useRoute } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import { MealItem } from '../components';

export const MealsOverviewScreen = ({ navigation, route }) => {
	// const routeObj = useRoute();
	// const catRId = routeObj.params?.categoryId;

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

	const renderMealItem = (itemData) => {
		const item = itemData?.item;
		const mealItemProps = {
			id: item?.id,
			title: item?.title,
			imageUrl: item?.imageUrl,
			duration: item?.duration,
			complexity: item?.complexity,
			affordability: item?.affordability,
		};
		return <MealItem {...mealItemProps} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item?.id}
				renderItem={renderMealItem}
			/>
			{/* <Text>Meals Overview Screen = {catId} {catRId}</Text> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});

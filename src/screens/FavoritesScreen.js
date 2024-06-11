// import { useContext } from 'react';
import { MealsList } from '../components';
// import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

// Function using Context Api
// export const FavoritesScreen = () => {
// 	const favoriteMealsContext = useContext(FavoritesContext);

// 	const favoriteMeals = MEALS.filter((meal) =>
// 		favoriteMealsContext?.ids?.includes(meal?.id)
// 	);

// 	if (favoriteMeals.length === 0) {
// 		return (
// 			<View style={styles.rootContainer}>
// 				<Text style={styles.text}>You have no favorite meals yet.</Text>
// 			</View>
// 		);
// 	}

// 	return <MealsList items={favoriteMeals} />;
// };

// Function using Redux Toolkit
export const FavoritesScreen = () => {
	const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

	const favoriteMeals = MEALS.filter((meal) =>
		favoriteMealIds?.includes(meal?.id)
	);

	if (favoriteMeals.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>You have no favorite meals yet.</Text>
			</View>
		);
	}

	return <MealsList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
	},
});

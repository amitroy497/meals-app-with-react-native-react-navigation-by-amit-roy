import {
	Button,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { MEALS } from '../data/dummy-data';
import { IconButton, List, MealDetails, Subtitle } from '../components';
import { useContext, useLayoutEffect } from 'react';
import { FavoritesContext } from '../store/context/favorites-context';

export const MealDetailScreen = ({ navigation, route }) => {
	const favoriteMealsContext = useContext(FavoritesContext);

	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);

	const changeFavoritesStatusHandler = () => {
		if (mealIsFavorite) {
			return favoriteMealsContext.removeFavorite(mealId);
		}
		return favoriteMealsContext.addFavorite(mealId);
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						icon={mealIsFavorite ? 'star' : 'star-outline'}
						color='white'
						onPress={changeFavoritesStatusHandler}
					/>
				);
			},
		});
	}, [changeFavoritesStatusHandler, navigation]);

	return (
		<ScrollView style={styles.rootContainer}>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<Text style={styles.title}>This is the meal detail {mealId}</Text>
			<MealDetails
				duration={selectedMeal.duration}
				complexity={selectedMeal.complexity}
				affordability={selectedMeal.affordability}
				textStyle={styles.detailText}
			/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={selectedMeal.ingredients} />
					<Subtitle>Steps</Subtitle>
					<List data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 32,
	},
	image: {
		width: '100%',
		height: 350,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		margin: 8,
		textAlign: 'center',
		color: 'white',
	},
	detailText: {
		color: 'white',
	},
	listOuterContainer: {
		alignItems: 'center',
	},
	listContainer: {
		maxWidth: '80%',
	},
});

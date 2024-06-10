import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	CategoriesScreen,
	MealDetailScreen,
	MealsOverviewScreen,
} from './src/screens';
// import { Button } from 'react-native';

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<>
			<StatusBar style='light' />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: '#351401' },
						headerTintColor: 'white',
						contentStyle: { backgroundColor: '#3f2f25' },
					}}
				>
					<Stack.Screen
						name='MealsCategories'
						component={CategoriesScreen}
						options={{
							title: 'All Categories',
							// headerStyle: { backgroundColor: '#351401' },
							// headerTintColor: 'white',
							// contentStyle: { backgroundColor: '#3f2f25' },
						}}
					/>
					<Stack.Screen
						name='MealsOverview'
						component={MealsOverviewScreen}
						// options={({ route, navigation }) => {
						// 	const catId = route.params.categoryId;
						// 	return {
						// 		title: catId,
						// 	};
						// }}
					/>
					<Stack.Screen
						name='MealDetail'
						component={MealDetailScreen}
						// options={{
						// 	headerRight: () => {
						// 		return <Button title='Tap me!' />;
						// 	},
						// }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
